import { test, expect } from '@playwright/test';
import { URLs } from '../Common/URLs';

test('Add a new Address in My Account', async ({ page }) => {
  // Navigate to the Testing101 website with relaxed wait condition and longer timeout
  await page.goto(URLs.pageLinkHomePage, {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  // Wait for the cookie consent button to appear instead of a fixed timeout
  // const consentButton = page.getByLabel('Consent', { exact: true });
  // await consentButton.waitFor({ state: 'visible', timeout: 10000 });
  // await consentButton.click();

  // Continue with your test steps...
  // Example: navigate to My Account
  await page.getByRole('link', { name: 'My Account' }).click();

  // Example: add a new address
  await page.getByRole('button', { name: 'Add Address' }).click();
  await page.fill('#addressLine1', '123 Test Street');
  await page.fill('#city', 'Santa Cruz');
  await page.fill('#postalCode', '400001');
  await page.getByRole('button', { name: 'Save' }).click();

  // Assert that the new address appears
  await expect(page.getByText('123 Test Street')).toBeVisible();
});
