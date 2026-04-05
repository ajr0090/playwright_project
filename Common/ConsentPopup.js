import { expect } from '@playwright/test';

class consentPopup {
constructor(page) {
this.page = page;
this.consentPopup = "xpath=//h1[text()='This site asks for consent to use your data']";
this.buttonConsent = "xpath=//button[@aria-label='Consent']";
this.buttonManageOptions = "xpath=//p[text()='Manage options']";
this.buttonAcceptAll = "xpath=//button[contains(@class, 'fc-data-preferences-accept-all')]";
}

async clickButtonConsent() {
await expect(this.page.locator(this.consentPopup)).toBeVisible();
const buttonConsent = this.page.locator(this.buttonConsent);
await buttonConsent.click();
}

async clickManageOptions() {
await expect(this.page.locator(this.consentPopup)).toBeVisible();
const buttonManageOptions = this.page.locator(this.buttonManageOptions);
await buttonManageOptions.click();
const buttonAcceptAll = this.page.locator(this.buttonAcceptAll);
await buttonAcceptAll.click();
}
}
export {consentPopup};