export default async function run(page, ui) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const timer = setInterval(() => {
        window.scrollBy(0, 400);
        total += 400;
        if (total >= 6000) { clearInterval(timer); resolve(); }
      }, 120);
    });
  });
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  const imgs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('img')).map(i => ({
      src: (i.getAttribute('src') || 'NONE').split('/').pop(),
      ok: i.complete && i.naturalWidth > 0
    }))
  );
  return imgs;
}
