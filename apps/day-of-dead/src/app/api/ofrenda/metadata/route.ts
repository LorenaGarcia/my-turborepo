import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const elementosDir = path.join(process.cwd(), "public", "ofrenda", "elementos");
  if (!fs.existsSync(elementosDir)) {
    return NextResponse.json({ files: [] });
  }

  const files = fs.readdirSync(elementosDir).filter((f) => f.endsWith(".png"));
  return NextResponse.json({
    count: files.length,
    files,
  });
}
