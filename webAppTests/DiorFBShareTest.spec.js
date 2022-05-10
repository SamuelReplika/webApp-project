import { test, expect } from '@playwright/test';

test.describe('dior FB share test', async () =>{

test('test', async ({ page }) => {
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
  await expect(page).toHaveURL('https://us.rpk.dior.com/Curation/Board/Index');
  // Click text=5 0 Mail Facebook Facebook Business Page Facebook Business Page Copy to Clipboar >> #exampleSizingDropdown3
  await page.locator('text=5 0 Mail Facebook Facebook Business Page Facebook Business Page Copy to Clipboar >> #exampleSizingDropdown3').click();
  // Click .panel-actions.mobile-icons-change.open .dropdown-menu li:nth-child(2) .shareFBBtn
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForNavigation(/*{ url: 'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fus.rpk.dior.com%252FCuration%252FShared%252FProducts%253FBoard%253DoYdrcyZ75fSXpTCMHKXXJg%253D%253D%2526Share%253DRM7qcR9hy6lsbG3rCnUZtw%253D%253D%2526User%253Dt2pKoFZTWW5o4O7cguU8uA%253D%253D%2526ShareTypeText%253DS4HN9y_s_l_a_s_h_ur402lsOXR3LfSQ%253D%253D&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_US' }*/),
    page.locator('.panel-actions.mobile-icons-change.open .dropdown-menu li:nth-child(2) .shareFBBtn').click()
  ]);
  // Fill input[name="email"]
  await page1.locator('input[name="email"]').fill('sam.herrera@replikasoftware.com');
  // Click input[name="pass"]
  await page1.locator('input[name="pass"]').click();
  // Fill input[name="pass"]
  await page1.locator('input[name="pass"]').fill('repdemotesting2020');
  // Click text=Log In
  await page1.locator('text=Log In').click();
  // Go to https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fus.rpk.dior.com%2FCuration%2FShared%2FProducts%3FBoard%3DoYdrcyZ75fSXpTCMHKXXJg%3D%3D%26Share%3DRM7qcR9hy6lsbG3rCnUZtw%3D%3D%26User%3Dt2pKoFZTWW5o4O7cguU8uA%3D%3D%26ShareTypeText%3DS4HN9y_s_l_a_s_h_ur402lsOXR3LfSQ%3D%3D&ext=1651851395&hash=Aeb1ggvICfB9YmHnnVU
  await page1.goto('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fus.rpk.dior.com%2FCuration%2FShared%2FProducts%3FBoard%3DoYdrcyZ75fSXpTCMHKXXJg%3D%3D%26Share%3DRM7qcR9hy6lsbG3rCnUZtw%3D%3D%26User%3Dt2pKoFZTWW5o4O7cguU8uA%3D%3D%26ShareTypeText%3DS4HN9y_s_l_a_s_h_ur402lsOXR3LfSQ%3D%3D&ext=1651851395&hash=Aeb1ggvICfB9YmHnnVU');
});
});