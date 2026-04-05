import { test, expect } from '@playwright/test';
import { URLs } from '../Common/URLs';

// Common setup for all tests
test.beforeEach(async ({ page }) => {
  await page.goto(URLs.pageLinkHomePage, {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  // Wait for the login button
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible({
    timeout: 15000,
  });
  await page.getByRole('button', { name: 'Log In' }).click();

  // Try to click "switch to login" if it exists
  const switchButton = page.getByTestId('signUp.switchToSignUp');
  if ((await switchButton.count()) > 0) {
    if (await switchButton.isVisible()) {
      await switchButton.click();
    }
  } else {
    console.log(
      '⚠️ switchToSignUp not found — continuing directly to login form',
    );
  }
});

// ✅ Test cases

test('Login with valid credentials', async ({ page }) => {
  await page.getByLabel('Email').fill('andriitest7799@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Aa123_123');
  await page.getByTestId('buttonElement').click();
  await expect(page.getByTestId('handle-button')).toBeVisible({
    timeout: 10000,
  });
});

test('Login with empty fields of the Login form', async ({ page }) => {
  await page.getByTestId('buttonElement').click();
  await expect(page.getByText('Email cannot be blank')).toBeVisible({
    timeout: 10000,
  });
  await expect(page.getByText('Make sure you enter a password.')).toBeVisible({
    timeout: 10000,
  });
});

test('Login with an empty Email field of the Login form', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Password' }).fill('Aa123_123');
  await page.getByTestId('buttonElement').click();
  await expect(page.getByText('Email cannot be blank')).toBeVisible({
    timeout: 10000,
  });
});

test('Login with an empty Password field of the Login form', async ({
  page,
}) => {
  await page.getByLabel('Email').fill('andriitest7799@gmail.com');
  await page.getByTestId('buttonElement').click();
  await expect(page.getByText('Make sure you enter a password.')).toBeVisible({
    timeout: 10000,
  });
});

test('Login with the invalid format of the Email', async ({ page }) => {
  await page.getByLabel('Email').fill('andriitest7799%gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Aa123_123');
  await page.getByTestId('buttonElement').click();
  await expect(
    page.getByText('Double check your email and try again.'),
  ).toBeVisible({ timeout: 10000 });
});

test('Login with the invalid Password', async ({ page }) => {
  await page.getByLabel('Email').fill('andriitest7799@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Aa123_1');
  await page.getByTestId('buttonElement').click();
  await expect(page.getByText('Wrong email or password')).toBeVisible({
    timeout: 10000,
  });
});

test('Login with non-existent user email', async ({ page }) => {
  await page.getByLabel('Email').fill('andriitest12345@gmail.com');
  await page.getByLabel('Password').fill('Aa123_123');
  await page.getByTestId('buttonElement').click();
  await expect(
    page.getByText("This email doesn't match any account. Try again."),
  ).toBeVisible({ timeout: 10000 });
});
