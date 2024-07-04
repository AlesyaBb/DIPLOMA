import { type Page, expect } from '@playwright/test'

export class BasePage {
    readonly page: Page;
    protected urlPage: string;

    constructor(page: Page) {
        this.page = page;
        this.urlPage = "";
    }

    async openPage() {
        await this.page.goto(this.urlPage);
    }

    async closePage() {
        await this.page.close();
    }

    async getCurrentUrl() {
        return this.page.url();
    }

    async getCurrentTitle() {
        return this.page.title();
    }

    async checkCurrentUrl(expectedUrl: string) {
        const currentUrl = await this.getCurrentUrl();
        expect(currentUrl).toContain(expectedUrl);
    }
}