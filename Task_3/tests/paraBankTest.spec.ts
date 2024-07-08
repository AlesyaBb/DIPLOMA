//UI TESTING

import { test } from '@playwright/test';
import { PageFactory } from '../src/pageobjects/pageFactory';
import { HomePage } from '../src/pageobjects/homePage';
import { LoginPage } from '../src/pageobjects/loginPage';
import { RegistrationPage } from '../src/pageobjects/registrationPage';
import { OverviewPage } from '../src/pageobjects/overviewPage';
import { HeaderPanel } from '../src/pageobjects/headerPage';
import { OpenaccountPage } from '../src/pageobjects/openaccountPage';
import { TransferPage } from '../src/pageobjects/transferPage';
import { RequestloanPage } from '../src/pageobjects/requestloanPage';
import * as validationMessages from '../src/constants/validationMessages';
import { registeredUser } from '../src/constants/variables';
import { ContactPage } from '../src/pageobjects/contactPage';


test.describe(`Test ParaBank https://parabank.parasoft.com/}`, () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = await PageFactory.getPage(page, "HomePage") as HomePage;
        await homePage.openPage();
    });

    test.describe(`Unauthorized zone`, () => {

        test('Checking the Home Page Title', async ({ page }) => {
            await homePage.checkTitleHomePage();
        });

        test('Go to the main page by clicking on the logo', async ({ page }) => {
            const registrationPage = await PageFactory.getPage(page, "RegistrationPage") as RegistrationPage;
        
            await registrationPage.clickOnLogo();
            await registrationPage.checkCurrentUrl(homePage.urlPage);
        });

        test('Checking links by clicking buttons in headerPanel', async ({ page }) => {
            const headerPanel = await PageFactory.getPage(page, "HeaderPanel") as HeaderPanel;
            
            await headerPanel.checkHeaderPanelLinks();
        });

        test('Sending an email to technical support', async ({ page }) => {
            const сontactPage = await PageFactory.getPage(page, "ContactPage") as ContactPage;
        
            await сontactPage.openPage();
            await сontactPage.sendEmailToSupport('Alesya', 'Bb@gmail.by', '+375291001010', 'Help!');
            await сontactPage.checkSupportMessageSubmissionResult(validationMessages.successfulSupportMessageSubmission);
        });

        test('Authorization by a valid user', async ({ page }) => {
            const loginPage = await PageFactory.getPage(page, "LoginPage") as LoginPage;
            const overviewPage = await PageFactory.getPage(page, "OverviewPage") as OverviewPage;
        
            await loginPage.login(registeredUser.username, registeredUser.password);
            await overviewPage.checkCurrentUrl(overviewPage.urlPage);
        });

        test('Authorization by invalid user', async ({ page }) => {
            const loginPage = await PageFactory.getPage(page, "LoginPage") as LoginPage;

            await loginPage.login('123TestTMS', '123');
            await loginPage.checkErrorMessageLogin(validationMessages.errorMessageLogin);
        });
    });
    
    test.describe(`Authorized zone`, () => {
        let loginPage: LoginPage;

        test.beforeEach(async ({ page }) => {
            loginPage = await PageFactory.getPage(page, "LoginPage") as LoginPage;
            await loginPage.login(registeredUser.username, registeredUser.password);
        });

        test('Open new account', async ({ page }) => {
            const openaccountPage = await PageFactory.getPage(page, "OpenaccountPage") as OpenaccountPage;
          
            await openaccountPage.openPage();
            await openaccountPage.openNewAccount();
            await openaccountPage.verifyOpenNewAccountSuccess('Congratulations, your account is now open.')
        });

        test('Transfer funds', async ({ page }) => {
            const transferPage = await PageFactory.getPage(page, "TransferPage") as TransferPage;
          
            await transferPage.openPage();
            await transferPage.transferFunds('10.00');
            await transferPage.verifyTransferFundsSuccess('Transfer Complete!')
        });

        test.describe(`Request loan`, () => {

            test('Request loan', async ({ page }) => {
                const requestloanPage = await PageFactory.getPage(page, "RequestloanPage") as RequestloanPage;
            
                await requestloanPage.openPage();
                await requestloanPage.requestLoan('100.00', '100.00');
                await requestloanPage.getLoanApplicationResult('Approved')
                await requestloanPage.checkLoanApplicationSuccessMessage(validationMessages.loanApplicationSuccessMessage);
            });

            test('Request a loan with an amount greater than allowed', async ({ page }) => {
                const requestloanPage = await PageFactory.getPage(page, "RequestloanPage") as RequestloanPage;
            
                await requestloanPage.openPage();
                await requestloanPage.requestLoan('1000000.00', '1000000.00');
                await requestloanPage.getLoanApplicationResult('Denied')
                await requestloanPage.checkLoanApplicationNegativeResultMessage(validationMessages.loanApplicationNegativeResultMessage);
            });
        });
    });
});
