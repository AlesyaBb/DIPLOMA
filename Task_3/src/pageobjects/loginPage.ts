import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { baseURL } from '../constants/urls';


export class LoginPage extends BasePage {
    readonly page: Page;
    public urlPage: string = `${baseURL}/login.htm`;
    private usernameInputField: Locator;
    private passwordInputField: Locator;
    private buttonLogIn: Locator;
    private errorMessageLogin: Locator;

    constructor(page: Page) {
        super(page); 
        this.page = page;
        this.usernameInputField = page.locator('input[name="username"]');
        this.passwordInputField = page.locator('input[name="password"]');
        this.buttonLogIn = page.locator('input[type="submit"][value="Log In"]');
        this.errorMessageLogin = page.locator('p.error');
    }

    async login(username: string, password: string) {
        await this.usernameInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.buttonLogIn.click();
    }

    async checkErrorMessageLogin(expectedErrorMessageLogin: string) {
        const actualTextErrorMessageLogin = await this.errorMessageLogin.innerText();
        expect(actualTextErrorMessageLogin).toBe(expectedErrorMessageLogin);
    }
}