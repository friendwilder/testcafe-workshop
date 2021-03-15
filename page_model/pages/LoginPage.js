import { Selector } from testcafe;

class LoginPage {
    constructor() {
        this.usernameField = Selector('input[id="user-name"]')
        this.userpasswordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        // this.loginButton = Selector('.btn-lg.btn-primary').withExactText('Login') Alternate method for TestCafe
        this.errorMessage = Selector('.error-button')
    }
}

export default new LoginPage()