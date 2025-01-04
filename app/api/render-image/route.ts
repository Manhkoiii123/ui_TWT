/* eslint-disable @typescript-eslint/no-explicit-any */
import puppeteer from "puppeteer";

export async function POST(req: any) {
  try {
    const { htmlContent } = await req.json();

    if (!htmlContent) {
      return new Response(
        JSON.stringify({ error: "HTML content is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 1200, height: 800 });
    const screenshot = await page.screenshot({ type: "png", fullPage: true });
    await browser.close();
    return new Response(screenshot, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error("Error rendering image:", error);
    return new Response(JSON.stringify({ error: "Failed to render image" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
