import { test, expect } from '@playwright/test';
import { URLs } from '../Common/URLs';
// const { test, expect } = require('@playwright/test');

// Pay attention that we have updated the step to directly interact with the "View Cart" button
// without switching to an iframe, as the Minicart is no longer embedded in one.

test('End to End Purchase flow with the XPath locators', async ({ page }) => {
  test.setTimeout(50000);
  // Navigate to the Testing101 website
  await page.goto(URLs.pageLinkCategoryAllProducts);
  await page.waitForTimeout(5000);

  //Click on the Consent button on Cookie pop-up
  const buttonConsent = page.locator("xpath=//button[@aria-label='Consent']");
  //await buttonConsent.click();
  //Click on the Sorting option of the Filter tab
  const buttonSorting = page.locator("xpath=//span[text()='Sorting']");
  await buttonSorting.click();
  await page.waitForTimeout(5000);
  //Click on the Add To Cart button on the Americano product
  const buttonAddToCartPLP = page.locator(
    "xpath=//div[@data-slug='americano']//span[text()='Add to Cart']",
  );
  await buttonAddToCartPLP.waitFor();
  await buttonAddToCartPLP.click();

  //we have updated the step to directly interact with the "View Cart" button
  // without switching to an iframe, as the Minicart is no longer embedded in one.
  // // Click on the View Cart button on the Minicart sidebar
  const buttonViewCart = page.locator(
    'xpath=//button/span[text()="View Cart"]',
  );
import {test,expect} from '@playwright/test';
import { URLs } from '../Common/Urls';
import {consentPopup} from '../Common/ConsentPopup';
import { pagePLP } from '../PageObjects/PagePLP';
import { pageCartPage } from '../PageObjects/PageCartPage';
import { pageCheckout } from '../PageObjects/PageCheckout';
import { testData } from '../Common/TestData';

test('End to End Purchase flow with the XPath locators', async ({ page }) => {
  test.setTimeout(50000);
// Navigate to the Testing101 website
await page.goto(URLs.pageLinkCategoryAllProducts);
await page.waitForTimeout(5000);
const consentPopupWindow = new consentPopup(page);
await consentPopupWindow.clickManageOptions();
const plpPage = new pagePLP(page);
//Click on the Sorting option of the Filter tab
const buttonSorting = page.locator(plpPage.buttonSorting);
await buttonSorting.click();
await page.waitForTimeout(5000);
//Click on the Add To Cart button on the Americano product
const buttonAddToCartPLP = page.locator(plpPage.buttonAddToCartPLP);
await buttonAddToCartPLP.waitFor();
await buttonAddToCartPLP.click();
// // Start interacting with the iframe
const cartPage = new pageCartPage(page);
const iframeMinicart = page.frameLocator(cartPage.iframeMinicart);
const buttonViewCart = iframeMinicart.locator(cartPage.buttonViewCart);
await buttonViewCart.waitFor();
await buttonViewCart.click();
//Cart Assertion
const assertionEmptyCart = page.locator(cartPage.assertionEmptyCart);
await expect(assertionEmptyCart).not.toBeVisible();
//Click on the Checkout button on the My Cart page
const buttonCheckout = page.locator(cartPage.buttonCheckout);
await buttonCheckout.waitFor();
await buttonCheckout.click();
//Checkout step 1
const checkoutPage = new pageCheckout(page);
const fieldEmail = page.locator(checkoutPage.fieldEmail);
await fieldEmail.fill(testData.CustomerDetails.email);
const fieldFirstName = page.locator(checkoutPage.fieldFirstName);
await fieldFirstName.fill(testData.CustomerDetails.firstName);
const fieldLastName = page.locator(checkoutPage.fieldLastName);
await fieldLastName.fill(testData.CustomerDetails.lastName);
const fieldPhone = page.locator(checkoutPage.fieldPhone);
await fieldPhone.fill(testData.CustomerDetails.phone);
const dropdownCountryRegion = page.locator(checkoutPage.dropdownCountryRegion);
await dropdownCountryRegion.click();
const dropdownOption = page.locator(checkoutPage.dropdownOption);
await dropdownOption.click();
const fieldAddress = page.locator(checkoutPage.fieldAddress);
await fieldAddress.fill(testData.DeliveryDetails.address);
const fieldCity = page.locator(checkoutPage.fieldCity);
await fieldCity.fill(testData.DeliveryDetails.city);
const fieldZipCode = page.locator(checkoutPage.fieldZipCode);
await fieldZipCode.fill(testData.DeliveryDetails.zipCode);
const buttonContinueCheckout1 = page.locator(checkoutPage.buttonContinueCheckout1);
await buttonContinueCheckout1.click();
//Checkout step 2
const buttonContinueCheckout2 = page.locator(checkoutPage.buttonContinueCheckout2);
await buttonContinueCheckout2.click();
//Checkout step 3
const buttonPlaceOrder = page.locator(checkoutPage.buttonPlaceOrder);
await buttonPlaceOrder.waitFor();
await buttonPlaceOrder.click();
await page.waitForTimeout(5000);

  await buttonViewCart.waitFor({ state: 'visible', timeout: 50000 });
  await buttonViewCart.click();
  await buttonViewCart.click();
  //Cart Assertion
  const assertionEmptyCart = page.locator(
    'xpath=//h3[@data-hook="EmptyState.title"]',
  );
  await expect(assertionEmptyCart).not.toBeVisible();
  //Click on the Checkout button on the My Cart page
  const buttonCheckout = page.locator("xpath=//span[text()='Checkout']");
  await buttonCheckout.waitFor();
  await buttonCheckout.click();

  //Checkout step 1
  const fieldEmail = page.locator("xpath=//input[@aria-label='Email']");
  await fieldEmail.fill('test@example.com');
  const fieldFirstName = page.locator(
    "xpath=//input[@aria-label='First name']",
  );
  await fieldFirstName.fill('Testing');
  const fieldLastName = page.locator("xpath=//input[@aria-label='Last name']");
  await fieldLastName.fill('101');
  const fieldPhone = page.locator("xpath=//input[@aria-label='Phone']");
  await fieldPhone.fill('123-456-7890');
  const dropdownCountryRegion = page.locator(
    "xpath=//div[@data-hook='form-field-country']",
  );
  await dropdownCountryRegion.click();
  const dropdownOption = page.locator("xpath=//div[text()='Ukraine']");
  await dropdownOption.click();
  const fieldAddress = page.locator(
    "xpath=//div[@data-hook='form-field-addressLine']/div/div/div/input[@role='combobox']",
  );

  await fieldAddress.fill('1234 Example Street');
  const fieldCity = page.locator("xpath=//input[@aria-label='City']");
  await fieldCity.fill('Lviv');
  const fieldZipCode = page.locator(
    "xpath=//input[@aria-label='Zip / Postal code']",
  );
  await fieldZipCode.fill('12345');
  const buttonContinueCheckout1 = page.locator(
    "xpath=//span[text()='Continue']",
  );
  await buttonContinueCheckout1.click();
  //Checkout step 2
  const buttonContinueCheckout2 = page.locator(
    "xpath=//span[text()='Continue']",
  );
  await buttonContinueCheckout2.click();
  //Checkout step 3
  const buttonPlaceOrder = page.locator(
    "xpath=//span[text()='Place Order & Pay']",
  );
  await buttonPlaceOrder.waitFor();
  await buttonPlaceOrder.click();
  await page.waitForTimeout(5000);

  //Assertion
  await expect(
    page.locator(
      'xpath=//span[text()="You\'ll receive a confirmation email soon."]',
    ),
  ).toBeVisible({
    message: 'Error: Purchase confirmation message was not displayed.',
  });
});
// test('smoke test', async ({ page }) => {});

// test('basic test', async ({ page }) => {});
