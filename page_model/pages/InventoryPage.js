import { Selector, t } from 'testcafe';

class InventoryPage {
    constructor() {
        this.title = Selector('.product_label')
        this.menu = Selector('#react-burger-menu-btn')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.inventoryItem = Selector('.inventory_item')
        this.addToCartButton = Selector('.btn_inventory')
        this.cartPageLink = Selector('.shopping_cart_link')

    }

    async clickLogoutLink() {
        await t
        .click(this.menu)
        .click(this.logoutLink)
    } 

    async gotoShoppingCart() {
        await t
        .click(this.cartPageLink)
    }
}

export default new InventoryPage()