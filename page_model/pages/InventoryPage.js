import { Selector, t } from 'testcafe';

class InventoryPage {
    constructor() {
        this.title = Selector('.product_label')
        this.menu = Selector('#react-burger-menu-btn')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.inventoryItem = Selector('.inventory_item')
        this.item1AddToCartButton = Selector('.inventory_item').child(2).child('button')
        this.item6AddToCartButton = Selector('.inventory_item').nth(5).child(2).child('button')
        this.item1Name = Selector('.inventory_item').withAttribute('class', 'inventory_item_name').withText('Sauce Labs Backpack')
        this.addToCartButton = Selector('.btn_inventory')
        this.cartPageLink = Selector('.shopping_cart_link')
        this.shoppingCartBadge = Selector('.shopping_cart_badge')

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