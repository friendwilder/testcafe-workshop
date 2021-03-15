import { Selector } from testcafe;

class CheckoutFinal {
    constructor() {
        this.title = Selector('.subheader')
        this.cartList = Selector('.cart_list')
        this.paymentInfoText = Selector('.summary_value_label')
        this.subtotalInfoText = Selector('.summary_subtotal_label')
        this.taxInfoText = Selector('.summary_tax_label')
        this.totalAmountText = Selector('.summary_total_label')
        this.finishButton = Selector('.cart_button')
    }
}