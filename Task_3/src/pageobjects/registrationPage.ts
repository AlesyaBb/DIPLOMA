import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { baseURL } from '../constants/urls';


export class RegistrationPage extends BasePage {
    readonly page: Page;
    public urlPage: string = `${baseURL}/register.htm`;
    private firstnameInputField: Locator;
    private lastnameInputField: Locator;
    private addressInputField: Locator;
    private cityInputField: Locator;
    private stateInputField: Locator;
    private zipcodeInputField: Locator;
    private phoneInputField: Locator;
    private ssnInputField: Locator;
    private usernameInputField: Locator;
    private passwordInputField: Locator;
    private confirmInputField: Locator;
    private buttonRegister: Locator;
    private successMessage: Locator;
    private logoLocator: Locator;

    constructor(page: Page) {
        super(page); 
        this.page = page;
        this.firstnameInputField = page.locator("//input[@id='customer.firstName']");
        this.lastnameInputField = page.locator("//input[@id='customer.lastName']");
        this.addressInputField = page.locator("//input[@id='customer.address.street']");
        this.cityInputField = page.locator("//input[@id='customer.address.city']");
        this.stateInputField = page.locator("//input[@id='customer.address.state']");
        this.zipcodeInputField = page.locator("//input[@id='customer.address.zipCode']");
        this.phoneInputField = page.locator("//input[@id='customer.phoneNumber']");
        this.ssnInputField = page.locator("//input[@id='customer.ssn']");
        this.usernameInputField = page.locator("//input[@id='customer.username']");
        this.passwordInputField = page.locator("//input[@id='customer.password']");
        this.confirmInputField = page.locator("//input[@id='repeatedPassword']");
        this.buttonRegister = page.locator("//input[@type='submit' and @class='button' and @value='Register']");
        this.successMessage = page.locator("//p[contains(text(), 'Your account was created successfully.')]");
        this.logoLocator = page.locator('img.logo[alt="ParaBank"][title="ParaBank"]');
        
    }

    async registration(firstname: string, lastname: string, address: string, city: string, state: string, zipcode: string, phone: string, SSN: string, username: string, password: string, confirm: string) {
        const fields = [
            { field: this.firstnameInputField, value: firstname },
            { field: this.lastnameInputField, value: lastname },
            { field: this.addressInputField, value: address },
            { field: this.cityInputField, value: city },
            { field: this.stateInputField, value: state },
            { field: this.zipcodeInputField, value: zipcode },
            { field: this.phoneInputField, value: phone },
            { field: this.ssnInputField, value: SSN },
            { field: this.usernameInputField, value: username },
            { field: this.passwordInputField, value: password },
            { field: this.confirmInputField, value: confirm }
        ];
    
        for (const { field, value } of fields) {
            await field.fill(value);
        }
    
        await this.buttonRegister.click();
    }

    async verifyRegistrationSuccess(expectedRegistrationSuccessMessage: string) {
        const actualRegistrationSuccessMessage = await this.successMessage.innerText();
        expect(actualRegistrationSuccessMessage).toBe(expectedRegistrationSuccessMessage);
    }

    async clickOnLogo() {
        await this.logoLocator.click();
    }
}