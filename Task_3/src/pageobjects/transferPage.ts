import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage'
import { baseURL } from '../constants/urls';


export class TransferPage extends BasePage {
    readonly page: Page;
    public urlPage: string = `${baseURL}/transfer.htm`;
    private transferAmountField: any;
    private fromAccountField: Locator;
    private toAccountField: Locator;
    private transferButton: Locator;
    private successMessageForTransfer: Locator;

    constructor(page: Page) {
        super(page); 
        this.page = page;
        this.transferAmountField = page.locator('#amount');
        this.fromAccountField = page.locator('select#fromAccountId.input');
        this.toAccountField = page.locator('select#toAccountId.input');
        this.transferButton = page.locator('input[type="submit"].button');
        this.successMessageForTransfer = page.locator("//h1[@class='title' and text()='Transfer Complete!']");
    }

    async transferFunds(amount: string) {
        await this.transferAmountField.fill(amount);
        await this.fromAccountField.selectOption({ index: 0 });
        await this.toAccountField.selectOption({ index: 0 });
        await this.transferButton.click();
    }

    async verifyTransferFundsSuccess(expectedSuccessMessageForTransfer: string) {
        const actualSuccessMessageForTransfer = await this.successMessageForTransfer.innerText();
        expect(actualSuccessMessageForTransfer).toBe(expectedSuccessMessageForTransfer);
    } 
}