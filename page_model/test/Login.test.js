import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'
import InventoryPage from '../pages/InventoryPage'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test('Users can login using valid credentials', async t => {
    await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.userPasswordField, 'secret_sauce')
        .click(LoginPage.loginButton)

    await t.expect(InventoryPage.title.exists).ok()
})