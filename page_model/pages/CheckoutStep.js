import { Selector } from testcafe;

class CheckoutStep {
    constructor() {
        this.title = Selector('.subheader')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
        this.cancelButton = Selector('.cart_cancel_link')
        this.continueButton = Selector('.cart_button')
    }
}