import { Page, expect } from '@playwright/test';
import { BasePage } from './basePage'
import { baseURL } from '../constants/urls';


export class HomePage extends BasePage {
    readonly page: Page;
    public urlPage: string = `${baseURL}/index.htm`;
    private titleRegExp: RegExp;


    constructor(page: Page) {
        super(page); 
        this.page = page;
        this.titleRegExp = /ParaBank/;
    }

    async checkTitleHomePage() {
        await expect(this.page).toHaveTitle(this.titleRegExp);
    }
}