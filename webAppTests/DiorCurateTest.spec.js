// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('dior curate test', async () =>{

test('curate test', async () =>{
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
  // Click button:has-text("Ok")
  await page.locator('button:has-text("Ok")').click();
  // Click a:has-text("Curate")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.dior.com/en_us' }*/),
    page.locator('a:has-text("Curate")').click()
  ]);
  // Click button:has-text("Accept all")
  await page.locator('button:has-text("Accept all")').click();
  // Click [aria-label="FRAGRANCE\ \&\ BEAUTY"]
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.dior.com/en_us/beauty' }*/),
    page.locator('[aria-label="FRAGRANCE\\ \\&\\ BEAUTY"]').click()
  ]);
  // Click .button-link.css-lv160i >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.dior.com/en_us/fragrance/womens_fragrance/discover-miss-dior-rose-essence' }*/),
    page.locator('.button-link.css-lv160i').first().click()
  ]);
  // Click [aria-label="ORDER\ Miss\ Dior\ Rose\ Essence"] button:has-text("ORDER")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.dior.com/en_us/products/beauty-Y0996488-miss-dior-rose-essence-eau-de-toilette-fresh-floral-and-woody-notes' }*/),
    page.locator('[aria-label="ORDER\\ Miss\\ Dior\\ Rose\\ Essence"] button:has-text("ORDER")').click()
  ]);
  // Click text=Rep It
  await page.locator('text=Rep It').click();
  // Click button:has-text("Save")
  await page.locator('button:has-text("Save")').click();
  // assert.equal(page.url(), 'https://us.rpk.dior.com/Curation/Shared/SaveCuration');
  // Click text=New Board Existing Board >> #addnewboardbtn
  await page.locator('text=New Board Existing Board >> #addnewboardbtn').click();
  // Click [placeholder="Board\ Name"]
  await page.locator('[placeholder="Board\\ Name"]').click();
  // Fill [placeholder="Board\ Name"]
  await page.locator('[placeholder="Board\\ Name"]').fill('AutoTest');
  // Click textarea[name="Description"]
  await page.locator('textarea[name="Description"]').click();
  // Fill textarea[name="Description"]
  await page.locator('textarea[name="Description"]').fill('Automation Playwright');
  // Click #addNewBoard
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://us.rpk.dior.com/Curation/Board/Index' }*/),
    page.locator('#addNewBoard').click()
  ]);
  // ---------------------
  await context.close();
  await browser.close();
})();
});
});