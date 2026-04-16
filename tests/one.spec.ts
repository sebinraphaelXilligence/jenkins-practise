import { test, expect } from '@playwright/test';

test('jenkins practise', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator('input[placeholder="Enter Name"]').fill('John Doe');
  await page.waitForTimeout(2000);
  


});