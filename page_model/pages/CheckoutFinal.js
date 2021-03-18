import { Selector, t } from 'testcafe';

class CheckoutFinal {
    constructor() {
        this.title = Selector('.subheader')
        this.cartList = Selector('.cart_list')
        this.paymentInfoText = Selector('.summary_value_label')
        this.subtotalInfoText = Selector('.summary_subtotal_label')
        this.taxInfoText = Selector('.summary_tax_label')
        this.totalAmountText = Selector('.summary_total_label')
        this.finishButton = Selector('.cart_button').withExactText('FINISH')
        this.cartItem1 = Selector('.inventory_item_name').withText('Sauce Labs Backpack')
        this.cartItem2 = Selector('.inventory_item_name').nth(1).withExactText('Test.allTheThings() T-Shirt (Red)')
    }

    async clickFinishButton() {
        await t
        .click(this.finishButton)
    }
}


export default new CheckoutFinal()