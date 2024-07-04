import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage'
import { baseURL } from '../constants/urls';


export class RequestloanPage extends BasePage {
    readonly page: Page;
    public urlPage: string = `${baseURL}/requestloan.htm`;
    private loanAmountField: Locator;
    private downPaymentField: Locator;
    private fromAccountField: Locator;
    private applyNowButton: Locator;
    private loanStatus: Locator;
    private loanApplicationSuccessMessage: Locator;
    private loanApplicationNegativeResultMessage: Locator;

    constructor(page: Page) {
        super(page); 
        this.page = page;
        this.loanAmountField = page.locator('input#amount.input');
        this.downPaymentField = page.locator('input#downPayment.input');
        this.fromAccountField = page.locator('select#fromAccountId.input');
        this.applyNowButton = page.locator('input[type="button"].button');
        this.loanStatus = page.locator("#loanStatus");
        this.loanApplicationSuccessMessage = page.locator("div#loanRequestApproved > p:first-child");
        this.loanApplicationNegativeResultMessage = page.locator("div#loanRequestDenied");
        
    }

    async requestLoan(loanamount: string, downPayment: string) {
        await this.loanAmountField.fill(loanamount);
        await this.downPaymentField.fill(downPayment);
        await this.fromAccountField.selectOption({ index: 0 });
        await this.applyNowButton.click();
    }

    async getLoanApplicationResult(expectedLoanStatus: string) {
        await this.loanStatus.waitFor({ state: 'visible', timeout: 3000 });
        const actualLoanStatus = await this.loanStatus.innerText();
        expect(actualLoanStatus).toBe(expectedLoanStatus);
    } 

    async checkLoanApplicationSuccessMessage(expectedLoanApplicationSuccessMessage: string) {
        const actualLoanApplicationSuccessMessage = await this.loanApplicationSuccessMessage.innerText();
        expect(actualLoanApplicationSuccessMessage).toBe(expectedLoanApplicationSuccessMessage);
    }

    async checkLoanApplicationNegativeResultMessage(expectedLoanApplicationNegativeResultMessage: string) {
        const actualLoanApplicationNegativeResultMessage = await this.loanApplicationNegativeResultMessage.innerText();
        expect(actualLoanApplicationNegativeResultMessage).toBe(expectedLoanApplicationNegativeResultMessage);
    }
}