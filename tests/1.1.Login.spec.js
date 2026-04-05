import { test, expect } from '@playwright/test';
import { URLs } from '../Common/URLs';

// Please note that the locator for the account button in the video differs from the current one,
// as Wix has since updated it. We have made the necessary changes in the file accordingly.

test('Login with valid credentials', async ({ page }) => {
  // Navigate to the Testing101 website
  await page.goto(URLs.pageLinkHomePage);
  await page.waitForTimeout(15000);
  //Click on the Consent button on Cookie pop-up
  //await page.getByLabel('Consent', { exact: true }).click();
  //Click on the Login button on the header
  await page.getByRole('button', { name: 'Log In' }).click();

  //Click on the Login button on the Signup page
  //  await page.getByTestId('signUp.switchToSignUp').waitFor({ state: 'visible' });
  await page.getByTestId('signUp.switchToSignUp').click();
  //Input valid data into the Email field
  await page.getByLabel('Email').fill('andriitest7799@gmail.com');
  //Input valid data into the Password field
  // getByRole('textbox', { name: 'Password' }).fill('Aa123_123');
  await page.getByLabel('Password').fill('Aa123_123');
  //Click on the Login button of the Login form
  await page.getByTestId('buttonElement').click();

  // Assertion: Check if 'andriitest7799 account menu' is visible after login
  await expect(page.getByTestId('handle-button')).toBeVisible();
});
