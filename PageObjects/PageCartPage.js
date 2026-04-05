class pageCartPage {

constructor(page) {
this.page = page;
//Define XPath as properties here
this.iframeMinicart = 'xpath=//iframe[contains(@class, "U73P_q")]';
this.buttonViewCart = 'xpath=//footer//span[text()="View Cart"]';
this.assertionEmptyCart = 'xpath=//h3[@data-hook="EmptyState.title"]';
this.buttonCheckout = "xpath=//span[text()='Checkout']";
} 

}

export {pageCartPage};   