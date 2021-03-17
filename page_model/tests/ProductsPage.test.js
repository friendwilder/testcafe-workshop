import InventoryPage from '../pages/InventoryPage'
import { CREDENTIALS } from '../data/Constants'
import LoginPage from '../pages/LoginPage'
import CartPage from '../pages/CartPage'

fixture('Logged in feature testing')
    .page `https://www.saucedemo.com`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('User is able to log out', async t => {
    await InventoryPage.clickLogoutLink()

    await t.expect(LoginPage.loginButton.exists).ok()
})

test('User is able to visit the shopping cart', async t => {
    await InventoryPage.gotoShoppingCart()

    await t.expect(CartPage.checkoutButton.exists).ok()
})

test('Single item successfully added to shopping cart', async t => {
    await t
    .click(InventoryPage.addToCartButton().nth(1))

    await t.expect(InventoryPage.shoppingCartBadge.withExactText('1').exists).ok()
})

test.only('Multiple items successfully added to shopping cart', async t => {
    await t
    .click(InventoryPage.addToCartButton().nth(0))
    .click(InventoryPage.addToCartButton().nth(1))
    .click(InventoryPage.addToCartButton().nth(2))
    .click(InventoryPage.addToCartButton().nth(3))
    .click(InventoryPage.addToCartButton().nth(4))
    .click(InventoryPage.addToCartButton().nth(5))

    await t.expect(InventoryPage.shoppingCartBadge.withExactText('6').exists).ok()
})