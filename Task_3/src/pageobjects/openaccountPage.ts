import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage'
import { baseURL } from '../constants/urls';


export class OpenaccountPage extends BasePage {
    readonly page: Page;
    public urlPage: string = `${baseURL}/openaccount.htm`;
    private accountTypeDropdown: Locator;
    private accountsDropdown: Locator;
    private openNewAccountButton: Locator;
    private successMessageOpenNewAccount: Locator;

    constructor(page: Page) {
        super(page); 
        this.page = page;
        this.accountTypeDropdown = page.locator('select#type.input');
        this.accountsDropdown = page.locator("select#fromAccountId.input");
        this.openNewAccountButton = page.locator('input[type="button"].button[value="Open New Account"]');
        this.successMessageOpenNewAccount = page.locator("//p[contains(text(), 'Congratulations, your account is now open.')]");
    }

    async openNewAccount() {
        await this.accountTypeDropdown.selectOption({ index: 1 });
        await this.accountsDropdown.selectOption({ index: 0 });
        await this.openNewAccountButton.click();
    }

    async verifyOpenNewAccountSuccess(expectedMessageOpenNewAccount: string) {
        const actualMessageOpenNewAccount = await this.successMessageOpenNewAccount.innerText();
        expect(actualMessageOpenNewAccount).toBe(expectedMessageOpenNewAccount);
    } 
}