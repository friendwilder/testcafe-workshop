import CheckoutStep from '../pages/CheckoutStep'
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import { CREDENTIALS, USER_DETAILS } from '../data/Constants'
import CheckoutFinal from '../pages/CheckoutFinal'
import ThankyouPage from '../pages/ThankyouPage'

fixture('Placing order testing')
    .page `https://www.saucedemo.com`
    .beforeEach(async t => {
            await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)

        })

test('Overview page items match previously added items', async t => {
    await t
    .click(InventoryPage.item1AddToCartButton)
    .click(InventoryPage.item6AddToCartButton)
    await InventoryPage.gotoShoppingCart()
    await t.click(CartPage.checkoutButton)
    await CheckoutStep.fillUserInformation(USER_DETAILS.STANDARD_USER.FIRST_NAME, USER_DETAILS.STANDARD_USER.LAST_NAME, USER_DETAILS.STANDARD_USER.POSTAL_CODE)

    await t
    .expect(CheckoutFinal.cartItem1.exists).ok()
    .expect(CheckoutFinal.cartItem2.exists).ok()

})

test('Purchase successfully completed', async t => {
    await InventoryPage.gotoShoppingCart()
    await t.click(CartPage.checkoutButton)
    await CheckoutStep.fillUserInformation(USER_DETAILS.STANDARD_USER.FIRST_NAME, USER_DETAILS.STANDARD_USER.LAST_NAME, USER_DETAILS.STANDARD_USER.POSTAL_CODE)
    await CheckoutFinal.clickFinishButton()
    
    await t.expect(ThankyouPage.ponyImage.exists).ok()
})