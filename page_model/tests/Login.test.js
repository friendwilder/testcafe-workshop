import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'
import InventoryPage from '../pages/InventoryPage'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test('Users can login using valid credentials', async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USER_NAME)
        .typeText(LoginPage.userPasswordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton),

    await t.expect(InventoryPage.title.exists).ok()
})

test('Invalid user unable to login', async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.INVALID_USER.USER_NAME)
        .typeText(LoginPage.userPasswordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.exists).ok()
})