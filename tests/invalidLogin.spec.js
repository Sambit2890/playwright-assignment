const { test, expect } = require('@playwright/test');

test('Test Case 3: Login with invalid credentials', async ({ page }) => {

  await page.goto('https://automationexercise.com/login');

  await page.fill('input[data-qa="login-email"]', 'wrong@example.com');
  await page.fill('input[data-qa="login-password"]', 'wrong123');

  await page.click('button[data-qa="login-button"]');

  await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();

});