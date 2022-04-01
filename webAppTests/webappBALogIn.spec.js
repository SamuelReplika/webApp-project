// @ts-check
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://uat.myreplika.com/
  await page.goto('https://uat.myreplika.com/');
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('seena.babu+shuba@fingent.com');
  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();
  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('password@123');
  // Click text=Login
  await page.locator('text=Login').click();
  // Go to https://uat.myreplika.com/Dashboard/Dashboard/Index
  await page.goto('https://uat.myreplika.com/Dashboard/Dashboard/Index');
  // ---------------------
  await context.close();
  await browser.close();
})();