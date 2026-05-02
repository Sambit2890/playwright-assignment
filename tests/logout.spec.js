const { test, expect } = require('@playwright/test');

test('Test Case 4: Logout User', async ({ page }) => {

  await page.goto('https://automationexercise.com/login');

  await page.fill('input[data-qa="login-email"]', 'test3344@example.com');
  await page.fill('input[data-qa="login-password"]', '123456');

  await page.click('button[data-qa="login-button"]');

  // verify logged in
  await expect(page.locator('text=Logged in as')).toBeVisible();

  // click logout
  await page.click('text=Logout');

  // verify redirected to login page
  await expect(page).toHaveURL(/login/);

});