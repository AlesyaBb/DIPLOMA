import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage'


export class HeaderPanel extends BasePage {
    readonly page: Page;
    private homeButton: Locator;
    private aboutusButton: Locator;
    private contactButton: Locator;

    constructor(page: Page) {
        super(page); 
        this.page = page;
        this.homeButton = page.locator("ul.button > li.home > a");
        this.aboutusButton = page.locator("ul.button > li.aboutus > a");
        this.contactButton = page.locator("ul.button > li.contact > a");
    }

    async checkHeaderPanelLinks() {
        const buttonsAndUrls = [
            { button: this.homeButton, expectedUrl: 'https://parabank.parasoft.com/parabank/index.htm' },
            { button: this.aboutusButton, expectedUrl: 'https://parabank.parasoft.com/parabank/about.htm' },
            { button: this.contactButton, expectedUrl: 'https://parabank.parasoft.com/parabank/contact.htm' }
        ];

        for (const { button, expectedUrl } of buttonsAndUrls) {
            await button.click();
            const currentUrl = this.page.url();
            await expect(currentUrl).toContain(expectedUrl);
        }
    }
}