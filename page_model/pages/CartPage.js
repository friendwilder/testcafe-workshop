import { Selector, t } from 'testcafe';

class CartPage {
    constructor() {
        this.title = Selector('.subheader')
        this.cartItemList = Selector('.cart_list')
        this.cartItem = Selector('.cart_item')
        this.cartRemoveButton = Selector('.cart_button')
        this.continueShoppingButton = Selector('.cart_footer.btn_secondary')
        this.checkoutButton = Selector('.checkout_button')
    }
}

export default new CartPage()