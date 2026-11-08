export default async function run(page, ui) {
  const context = page.context();

  // Normal browser — scroll the map into view and shoot it
  await page.goto("http://localhost:8080/contact", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2500);
  await page.evaluate(() => {
    const el = document.querySelector("iframe[title='Map to Maayaa The Cafe']");
    if (el) el.scrollIntoView({ block: "center" });
  });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: "shot-normal-map.png" });

  // Instagram UA — scroll the fallback card into view and shoot it
  const igContext = await context.browser().newContext({
    userAgent:
      "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 Instagram 315.0.0.0.25 Android",
    viewport: { width: 412, height: 900 },
  });
  const igPage = await igContext.newPage();
  await igPage.goto("http://localhost:8080/contact", { waitUntil: "domcontentloaded" });
  await igPage.waitForTimeout(2000);
  await igPage.evaluate(() => {
    const el = document.querySelector("a[aria-label='Open Maayaa The Cafe in Google Maps']");
    if (el) el.scrollIntoView({ block: "center" });
  });
  await igPage.waitForTimeout(1500);
  await igPage.screenshot({ path: "shot-instagram-map.png" });
  await igContext.close();

  return { done: true };
}
