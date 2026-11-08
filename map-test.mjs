export default async function run(page, ui) {
  const context = page.context();

  // 1) Normal browser — should render the live Google Maps iframe
  await page.goto("http://localhost:8080/contact", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2500);
  const normalIframe = await page.evaluate(() => {
    const f = document.querySelector("iframe[title='Map to Maayaa The Cafe']");
    return f ? { present: true, src: f.getAttribute("src") } : { present: false };
  });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "map-normal-bottom.png" });

  // 2) Simulated Instagram in-app browser — UA set BEFORE load so the app detects it
  const igContext = await context.browser().newContext({
    userAgent:
      "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 Instagram 315.0.0.0.25 Android",
  });
  const igPage = await igContext.newPage();
  await igPage.goto("http://localhost:8080/contact", { waitUntil: "domcontentloaded" });
  await igPage.waitForTimeout(2000);
  const igResult = await igPage.evaluate(() => {
    const iframe = document.querySelector("iframe[title='Map to Maayaa The Cafe']");
    const link = document.querySelector("a[aria-label='Open Maayaa The Cafe in Google Maps']");
    return {
      iframePresent: !!iframe,
      fallbackLinkPresent: !!link,
      fallbackHref: link ? link.getAttribute("href") : null,
      ua: navigator.userAgent,
    };
  });
  await igPage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await igPage.waitForTimeout(1200);
  await igPage.screenshot({ path: "map-instagram.png" });
  await igContext.close();

  return { normalIframe, igResult };
}
