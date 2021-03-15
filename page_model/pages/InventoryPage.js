import { Selector } from 'testcafe';

class InventoryPage {
    constructor() {
        this.title = Selector('.product_label')
        this.inventoryItem = Selector('.inventory_item')
        this.addToCartButton = Selector('.btn_inventory')
        this.cartPageLink = Selector('.shopping_cart_link')

    }
}

export default new InventoryPage()