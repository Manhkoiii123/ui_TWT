import puppeteer from "puppeteer";

export async function POST(req: Request) {
  try {
    const { htmlContent } = await req.json();

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    });
    const page = await browser.newPage();

    await page.setContent(htmlContent, { waitUntil: "networkidle2" });

    await page.evaluate(() => {
      const images = Array.from(document.images);
      return Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      );
    });

    const contentHeight = await page.evaluate(() => document.body.scrollHeight);
    await page.setViewport({ width: 1200, height: contentHeight });

    const screenshot = await page.screenshot({ type: "png" });

    await browser.close();

    return new Response(screenshot, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error) {
    console.error("Error rendering image:", error);
    return new Response(JSON.stringify({ error: "Failed to render image" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
