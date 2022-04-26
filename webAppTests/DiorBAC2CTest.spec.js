// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('dior c2c test', async () => {
    
    
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://us.rpk.dior.com/
  await page.goto('https://us.rpk.dior.com/');
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('ss+dior.us@replikasoftware.com');
  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();
  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('Replika1234!!');
  // Click text=Login
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://us.rpk.dior.com/Dashboard/Dashboard/Index' }*/),
    page.locator('text=Login').click()
  ]);
  // Click span:has-text("Boards")
  await page.locator('span:has-text("Boards")').click();
  // assert.equal(page.url(), 'https://us.rpk.dior.com/Curation/Board/Index');
  // Click text=Mail Facebook Facebook Business Page Facebook Business Page Copy to Clipboard Ne >> #exampleSizingDropdown3
  await page.locator('text=Mail Facebook Facebook Business Page Facebook Business Page Copy to Clipboard Ne >> #exampleSizingDropdown3').click();
  // Click #boardslisting >> text=Copy to Clipboard
  await page.locator('#boardslisting >> text=Copy to Clipboard').click();
  // Click button:has-text("Copy to Clipboard")
  await page.locator('button:has-text("Copy to Clipboard")').click();
  // Open new page
  const page1 = await context.newPage();
  // Go to https://us.rpk.dior.com/Curation/Shared/Products?Board=WQMtzvIoodGIEHRIe58vPA==&Share=y5dvLiCDC16wrSPxQw1KFw==&User=t2pKoFZTWW5o4O7cguU8uA==&ShareTypeText=egDEZy9zJ43E0hRbfHBV9Q==
  await page1.goto('https://us.rpk.dior.com/Curation/Shared/Products?Board=WQMtzvIoodGIEHRIe58vPA==&Share=y5dvLiCDC16wrSPxQw1KFw==&User=t2pKoFZTWW5o4O7cguU8uA==&ShareTypeText=egDEZy9zJ43E0hRbfHBV9Q==');
  // Go to https://us.rpk.dior.com/Curation/Shared/TrackEvents?Board=WQMtzvIoodGIEHRIe58vPA%3D%3D&Contact=H5egJOcDlpDkMsw6nQ837Q%3D%3D&User=t2pKoFZTWW5o4O7cguU8uA%3D%3D&Share=y5dvLiCDC16wrSPxQw1KFw%3D%3D&Detail=5kcFU5gFL9J93lcNtIgHYA%3D%3D&ShareTypeText=egDEZy9zJ43E0hRbfHBV9Q%3D%3D&MetaTagReq=False&RedirectTo=https%3A%2F%2Fwww.dior.com%2Fen_us%2Fproducts%2Fbeauty-C099600764-miss-dior-eau-de-parfum-eau-de-parfum-floral-and-fresh-notes&BenchmarkFileName=BenchMark_010420220123237889648
  await page1.goto('https://us.rpk.dior.com/Curation/Shared/TrackEvents?Board=WQMtzvIoodGIEHRIe58vPA%3D%3D&Contact=H5egJOcDlpDkMsw6nQ837Q%3D%3D&User=t2pKoFZTWW5o4O7cguU8uA%3D%3D&Share=y5dvLiCDC16wrSPxQw1KFw%3D%3D&Detail=5kcFU5gFL9J93lcNtIgHYA%3D%3D&ShareTypeText=egDEZy9zJ43E0hRbfHBV9Q%3D%3D&MetaTagReq=False&RedirectTo=https%3A%2F%2Fwww.dior.com%2Fen_us%2Fproducts%2Fbeauty-C099600764-miss-dior-eau-de-parfum-eau-de-parfum-floral-and-fresh-notes&BenchmarkFileName=BenchMark_010420220123237889648');
  // Go to https://www.dior.com/en_us/products/beauty-C099600764-miss-dior-eau-de-parfum-eau-de-parfum-floral-and-fresh-notes?utm_source=replika
  await page1.goto('https://www.dior.com/en_us/products/beauty-C099600764-miss-dior-eau-de-parfum-eau-de-parfum-floral-and-fresh-notes?utm_source=replika');
  // Click button:has-text("Accept all")
  await page1.locator('button:has-text("Accept all")').click();
  // Click button:has-text("See my selections")
  await page1.locator('button:has-text("See my selections")').click();
  // assert.equal(page1.url(), 'https://www.dior.com/en_us/products/beauty-C099600764-miss-dior-eau-de-parfum-eau-de-parfum-floral-and-fresh-notes?utm_source=replika#PageName=shopdior9876');
  // ---------------------
  await context.storageState({ path: 'auth.json' });
  await context.close();
  await browser.close();
})();

});
