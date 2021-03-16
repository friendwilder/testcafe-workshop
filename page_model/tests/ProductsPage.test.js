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

test.only('User is able to visit the shopping cart', async t => {
    await InventoryPage.gotoShoppingCart()

    await t.expect(CartPage.checkoutButton.exists).ok()
})