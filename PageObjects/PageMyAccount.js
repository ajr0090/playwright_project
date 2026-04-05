class pageMyAccount {

constructor(page) {
this.page = page;
//Define XPath as properties here
this.buttonMyAccount = "xpath=//div[@class='OoN3ib' and @aria-label='andriitest7799 account menu']"
this.buttonMyAddress = "xpath=//span[text()='My Addresses']";
this.iframeMyAddress = "xpath=//iframe[@title='My Addresses']";
this.buttonAddNewAddress = "xpath=//div[@class='_10o0_ _26mkp hidden-mobile' and @data-hook='add-address-button']//button[@data-hook='button' and text()='Add New Address']"
this.iframeNewAddress = "xpath=/html/body/div[1]/div/div[5]/iframe";
this.fieldFirstName = "xpath=//input[@name='firstName']";
this.fieldLastName = "xpath=//input[@name='lastName']";
this.fieldCompanyName = "xpath=//input[@name='company']";
this.fieldAddress = "xpath=//input[@name='addressLine1']";
this.fieldAddressLine2 = "xpath=//input[@name='addressLine2']";
this.fieldCity = "xpath=//input[@name='city']";
this.dropdownCountry = "xpath=//input[@name='country']";
this.dropdownOption = '//*[@data-hook="dropdown-item-UKR"]';
this.fieldZipCode = "xpath=//input[@name='zipCode']";
this.fieldPhone = "xpath=//input[@name='phone']";
this.buttonAddAddress = 'xpath=//button[@data-hook="submit-add-address"]';
} 
}
 

        
export {pageMyAccount};