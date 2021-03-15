import { Selector } from testcafe;

class InventoryPage {
    constructor() {
        this.Title = Selector('')
        this.inventoryItem = Selector('')
        this.addToCartButton = Selector('')
        this.cartPageLink = Selector('')

    }
}

export default InventoryPage