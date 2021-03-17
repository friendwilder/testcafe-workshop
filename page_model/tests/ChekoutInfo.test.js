import CheckoutStep from '../pages/CheckoutStep'
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import { CREDENTIALS, USER_DETAILS } from '../data/Constants'
import CheckoutFinal from '../pages/CheckoutFinal'

fixture('Required user info for checkout testing')
    .page `https://www.saucedemo.com`
    .beforeEach(async t => {
            await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
            await InventoryPage.gotoShoppingCart()
            await t.click(CartPage.checkoutButton)

        })

test('Error is shown due to missing info', async t => {
    await CheckoutStep.clickContinueButton()

    await t.expect(CheckoutStep.errorButton.exists).ok()
})

test('User successfully proceeds to checkout overview', async t => {
    await CheckoutStep.fillUserInformation(USER_DETAILS.STANDARD_USER.FIRST_NAME, USER_DETAILS.STANDARD_USER.LAST_NAME, USER_DETAILS.STANDARD_USER.POSTAL_CODE)

    await t.expect(CheckoutFinal.finishButton.exists).ok()
})