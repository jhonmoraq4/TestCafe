import { t, Selector } from "testcafe";

class LoginPage {
    constructor() {
        this.usernameInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('#login-button');
    }

    async login(username, password) {
            await t
            .typeText(this.usernameInput, username)
            //.debug()
            .typeText(this.passwordInput, password)
            //.debug()
            .click(this.loginButton);
        }
        
}

export default new LoginPage();