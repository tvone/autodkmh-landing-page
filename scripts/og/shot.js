const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const exe = process.env.BROWSER;
  const htmlPath = path.resolve(process.argv[2]);
  const out = path.resolve(process.argv[3]);
  const url = 'file:///' + htmlPath.replace(/\\/g, '/');

  const browser = await puppeteer.launch({
    executablePath: exe,
    headless: true,
    args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars', '--disable-lcd-text'],
    defaultViewport: { width: 1200, height: 630, deviceScaleFactor: Number(process.env.SCALE || 2) },
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate(async () => { if (document.fonts && document.fonts.ready) await document.fonts.ready; });
  await new Promise((r) => setTimeout(r, 600));
  const el = await page.$('.card');
  await el.screenshot({ path: out });
  await browser.close();
  console.log('done -> ' + out);
})().catch((e) => { console.error(e); process.exit(1); });
