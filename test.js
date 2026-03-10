import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', err => console.log('ERR:', err.toString()));

  await page.goto('http://localhost:5173/');

  const initialContent = await page.evaluate(() => document.querySelector('.page-container')?.innerHTML || 'NO CONTAINER');
  console.log('INIT_CONTENT_LENGTH:', initialContent.length);
  console.log('HAS_ROUTER_VIEW?', initialContent.includes('router-view'));

  await page.click('a[href="/policy"]');
  await new Promise(r => setTimeout(r, 500));

  const content = await page.evaluate(() => document.querySelector('.page-container')?.innerHTML || 'NO CONTAINER');
  console.log('AFTER_CLICK_CONTENT_LENGTH:', content.length);

  await browser.close();
})();
