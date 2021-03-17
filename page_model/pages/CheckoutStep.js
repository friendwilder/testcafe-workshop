import { Selector, t } from 'testcafe';

class CheckoutStep {
    constructor() {
        this.title = Selector('.subheader')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
        this.cancelButton = Selector('.cart_cancel_link')
        this.continueButton = Selector('.cart_button')
        this.errorButton = Selector('.error-button')
    }

    async clickContinueButton() {
        await t
        .click(this.continueButton)
    }

    async fillUserInformation(first_name, last_name, postal_code) {
        await t
        .typeText(this.firstNameField, first_name)
        .typeText(this.lastNameField, last_name)
        .typeText(this.postalCodeField, postal_code)
        .click(this.continueButton)
    }
}


export default new CheckoutStep()