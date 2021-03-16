import { Selector, t } from 'testcafe';

class LoginPage {
    constructor() {
        this.usernameField = Selector('input[id="user-name"]')
        this.userPasswordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        // this.loginButton = Selector('.btn-lg.btn-primary').withExactText('Login') Alternate method for TestCafe
        this.errorMessage = Selector('.error-button')
    }

    async submitLoginForm(username, password) {
        await t
        .typeText(this.usernameField, username)
        .typeText(this.userPasswordField, password)
        .click(this.loginButton)
    }
}

export default new LoginPage()