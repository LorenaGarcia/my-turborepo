import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const elementosDir = path.join(process.cwd(), "public", "ofrenda", "elementos");
  const exists = fs.existsSync(elementosDir);
  const count = exists ? fs.readdirSync(elementosDir).length : 0;
  return NextResponse.json({ success: true, exists, count });
}
