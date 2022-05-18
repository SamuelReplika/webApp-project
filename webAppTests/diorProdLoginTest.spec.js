// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('dior login test', async () => {


test('login and close', async () => {
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
      await page.locator('text=Login').click();
      // Go to https://uat.myreplika.com/Dashboard/Dashboard/Index
      await page.goto('https://uat.myreplika.com/Dashboard/Dashboard/Index');
      // ---------------------
      await context.close();
      await browser.close();
  
    })();

});
});