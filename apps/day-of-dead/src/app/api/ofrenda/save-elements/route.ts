import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const TARGET_DIR = path.join(
  process.cwd(),
  "public",
  "ofrenda"
);
const ELEMENTS_DIR = path.join(TARGET_DIR, "elementos");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items } = body as { items: Record<string, string> };

    if (!items || typeof items !== "object") {
      return NextResponse.json({ error: "Invalid items format" }, { status: 400 });
    }

    if (!fs.existsSync(ELEMENTS_DIR)) {
      fs.mkdirSync(ELEMENTS_DIR, { recursive: true });
    }

    const savedFiles: string[] = [];

    for (const [id, dataUrl] of Object.entries(items)) {
      if (!dataUrl || !dataUrl.startsWith("data:image/png;base64,")) continue;
      const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");

      const elementFile = path.join(ELEMENTS_DIR, `${id}.png`);
      fs.writeFileSync(elementFile, buffer);

      savedFiles.push(`${id}.png`);
    }

    return NextResponse.json({
      success: true,
      count: savedFiles.length,
      savedFiles,
      directory: ELEMENTS_DIR,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!fs.existsSync(ELEMENTS_DIR)) {
      return NextResponse.json({ elements: [], exists: false });
    }
    const files = fs.readdirSync(ELEMENTS_DIR);
    return NextResponse.json({ elements: files, exists: true, count: files.length });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
