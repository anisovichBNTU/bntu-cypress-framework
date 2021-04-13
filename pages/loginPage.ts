import { Button, Input } from '../elements';
import BasePage from './basePage';

class LoginPage extends BasePage {
    usernameInputErr: Input;
    usernameInput: Input;
    passwordInput: Input;
    submitButton: Button;

    constructor() {
        super(/login/);

        this.usernameInputErr = new Input('.fields [formcontrolname="userName1111"]', 'Username111');
        this.usernameInput = new Input('.fields [formcontrolname="userName"]', 'Username');
        this.passwordInput = new Input('.fields [formcontrolname="password"]', 'Password');
        this.submitButton = new Button('.loginbtn button[type="submit"]', 'Log In button');
    }

    /**
     * Login with password
     * @param username
     * @param password
     * @returns {Promise<void>}
     */
    loginWithPassword(username: string, password: string) {
        this.usernameInput.setValue(username);
        this.usernameInput.clearValue();
        this.usernameInput.setValue(username);
        this.usernameInput.waitForExist();
        this.usernameInput.waitForDisplayed();
        this.usernameInputErr.waitForExist({ reverse: true });
        this.usernameInputErr.waitForDisplayed({ reverse: true });
        this.passwordInput.setValue(password);
        this.passwordInput.waitUntilClassMatches('mat-input-element');
        this.passwordInput.waitUntilClassNotMatches('qweqweqwe');
        this.submitButton.click();
    }
}

export default new LoginPage();