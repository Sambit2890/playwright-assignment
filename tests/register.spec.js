const { test, expect } = require('@playwright/test');

test('Test Case 1: Register User', async ({ page }) => {

  const email = `test${Date.now()}@example.com`;

  await page.goto('https://automationexercise.com');

  await page.click('text=Signup / Login');

  await page.fill('input[data-qa="signup-name"]', 'Sambit');
  await page.fill('input[data-qa="signup-email"]', email);

  await page.click('button[data-qa="signup-button"]');

  await page.fill('#password', '123456');
  await page.selectOption('#days', '1');
  await page.selectOption('#months', '1');
  await page.selectOption('#years', '2000');

  await page.fill('#first_name', 'Sambit');
  await page.fill('#last_name', 'Mohapatra');
  await page.fill('#address1', 'Bhubaneswar');
  await page.selectOption('#country', 'India');
  await page.fill('#state', 'Odisha');
  await page.fill('#city', 'Bhubaneswar');
  await page.fill('#zipcode', '751001');
  await page.fill('#mobile_number', '8114744288');

  await page.click('button[data-qa="create-account"]');

  await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible();
});