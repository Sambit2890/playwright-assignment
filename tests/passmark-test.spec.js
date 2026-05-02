import { test, expect } from '@playwright/test';
import { runSteps, configure } from 'passmark'; 
import 'dotenv/config';

console.log('Key loaded:', process.env.OPENROUTER_API_KEY ? 'YES' : 'NO');

configure({
  ai: {
    gateway: 'openrouter',
    model: 'meta-llama/llama-3.1-8b-instruct:free'
  }
});

test.setTimeout(120000);

test('Login with valid credentials using Passmark', async ({ page }) => {
  await runSteps({
    page,
    steps: [
      'Navigate to https://automationexercise.com',
      'Click on "Signup / Login" link', 
      'Type "test3344@gmail.com" in Email Address field',
      'Type "123456" in Password field',
      'Click the Login button',
      'Verify "Logged in as" text is visible'
    ]
  });
});