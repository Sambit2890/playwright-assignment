const { test, expect } = require('@playwright/test');

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');

  await page.fill('input[data-qa="login-email"]', 'test3344@example.com');
  await page.fill('input[data-qa="login-password"]', '123456');

  await page.click('button[data-qa="login-button"]');

  await expect(page.locator('text=Logged in as')).toBeVisible({ timeout: 10000 });
});