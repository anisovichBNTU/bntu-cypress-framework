import { Button, Input } from '../elements';
import BasePage from './basePage';

class LoginPage extends BasePage {
    private usernameInput: Input;
    private passwordInput: Input;
    private submitButton: Button;

    constructor() {
        super(/login/);

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
        this.passwordInput.setValue(password);
        this.submitButton.click();
    }
}

export default new LoginPage();