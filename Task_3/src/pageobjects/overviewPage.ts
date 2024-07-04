import { Page } from '@playwright/test';
import { BasePage } from './basePage'
import { baseURL } from '../constants/urls';


export class OverviewPage extends BasePage {
    readonly page: Page;
    public urlPage: string = `${baseURL}/overview.htm`;

    constructor(page: Page) {
        super(page); 
        this.page = page;
    }
}