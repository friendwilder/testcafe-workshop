import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'
import InventoryPage from '../pages/InventoryPage'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test('Users can login using valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(InventoryPage.title.exists).ok()
})

test('Invalid user unable to login', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USER_NAME, CREDENTIALS.INVALID_USER.PASSWORD)

    await t.expect(LoginPage.errorMessage.exists).ok()
})