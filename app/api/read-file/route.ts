import { NextResponse } from "next/server";
import ejs from "ejs";
import path from "path";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, pathName } = body;
    const filePath = path.join(process.cwd(), "public", "template", pathName);
    const html = await ejs.renderFile(filePath, { data: { name } });
    return new NextResponse(html, {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error rendering EJS file", { status: 500 });
  }
}
