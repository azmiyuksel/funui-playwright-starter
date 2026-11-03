import { expect, test } from '@playwright/test';

test('sign in to the practice login form', async ({ page }) => {
  // Remember the consent choice before visiting the page so the banner cannot cover the form.
  await page.addInitScript(() => localStorage.setItem('funui-consent', 'denied'));
  await page.goto('/challenges/login');
  await page.getByTestId('login-username').fill('gunther');
  await page.getByTestId('login-password').fill('CentralPerk123!');
  await page.getByTestId('login-submit').click();
  await expect(page).toHaveURL(/\/challenges\/login\/secure$/);
  await expect(page.getByTestId('login-logout')).toBeVisible();
});
