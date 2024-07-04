import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { baseURL } from '../constants/urls';

export class ContactPage extends BasePage {
    readonly page: Page;
    public urlPage: string = `${baseURL}/contact.htm`;
    private nameField: Locator;
    private emailField: Locator;
    private phoneField: Locator;
    private messageField: Locator;
    private sendtoCustomerCareButton: Locator;
    private supportMessageSubmissionResult: Locator;

    constructor(page: Page) {
        super(page); 
        this.page = page;
        this.nameField = page.locator('input#name.input');
        this.emailField = page.locator('input#email.input');
        this.phoneField = page.locator('input#phone.input');
        this.messageField = page.locator('textarea#message.input');
        this.sendtoCustomerCareButton = page.locator("input[type='submit'].button[value='Send to Customer Care']");
        this.supportMessageSubmissionResult = page.locator('div#rightPanel > p:last-child');
    }

    async sendEmailToSupport(name: string, email: string, phone: string, message: string) {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.phoneField.fill(phone);
        await this.messageField.fill(message);
        await this.sendtoCustomerCareButton.click();
    }

    async checkSupportMessageSubmissionResult(expectedSupportMessageSubmissionResult: string) {
        const actualSupportMessageSubmissionResult = await this.supportMessageSubmissionResult.innerText();
        expect(actualSupportMessageSubmissionResult).toBe(expectedSupportMessageSubmissionResult);
    }
}