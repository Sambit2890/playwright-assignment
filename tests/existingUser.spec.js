const { test, expect } = require('@playwright/test');

test('Test Case 5: Register User with existing email', async ({ page }) => {

  // Go to homepage
  await page.goto('https://automationexercise.com/');

  // Click Signup / Login
  await page.click('text=Signup / Login');

  // Enter name
  await page.fill('input[data-qa="signup-name"]', 'Sambit');

  // ⚠️ Use an email that is already registered
  await page.fill('input[data-qa="signup-email"]', 'test@example.com');

  // Click Signup button
  await page.click('button[data-qa="signup-button"]');

  // ✅ Verify error message (robust way)
  await expect(page.locator('text=/already exist/i')).toBeVisible();

})