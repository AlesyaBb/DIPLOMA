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

    test.describe(`Неавторизованная зона`, () => {

        test('Проверка заголовка  главной страницы', async ({ page }) => {
            await homePage.checkTitleHomePage();
        });

        test('Переход на главную страницу по клику на логотип', async ({ page }) => {
            const registrationPage = await PageFactory.getPage(page, "RegistrationPage") as RegistrationPage;
        
            await registrationPage.clickOnLogo();
            await registrationPage.checkCurrentUrl(homePage.urlPage);
        });

        test('Проверка ссылок по клику на кнопки в headerPanel', async ({ page }) => {
            const headerPanel = await PageFactory.getPage(page, "HeaderPanel") as HeaderPanel;
            
            await headerPanel.checkHeaderPanelLinks();
        });

        test('Отправка email в техподдержку', async ({ page }) => {
            const сontactPage = await PageFactory.getPage(page, "ContactPage") as ContactPage;
        
            await сontactPage.openPage();
            await сontactPage.sendEmailToSupport('Alesya', 'Bb@gmail.by', '+375291001010', 'Help!');
            await сontactPage.checkSupportMessageSubmissionResult(validationMessages.successfulSupportMessageSubmission);
        });

        test('Авторизация валидным пользователем', async ({ page }) => {
            const loginPage = await PageFactory.getPage(page, "LoginPage") as LoginPage;
            const overviewPage = await PageFactory.getPage(page, "OverviewPage") as OverviewPage;
        
            await loginPage.login(registeredUser.username, registeredUser.password);
            await overviewPage.checkCurrentUrl(overviewPage.urlPage);
        });

        test('Авторизация невалидным пользователем', async ({ page }) => {
            const loginPage = await PageFactory.getPage(page, "LoginPage") as LoginPage;

            await loginPage.login('123TestTMS', '123');
            await loginPage.checkErrorMessageLogin(validationMessages.errorMessageLogin);
        });
    });
    
    test.describe(`Авторизованная зона`, () => {
        let loginPage: LoginPage;

        test.beforeEach(async ({ page }) => {
            loginPage = await PageFactory.getPage(page, "LoginPage") as LoginPage;
            await loginPage.login(registeredUser.username, registeredUser.password);
        });

        test('Открытие нового счета', async ({ page }) => {
            const openaccountPage = await PageFactory.getPage(page, "OpenaccountPage") as OpenaccountPage;
          
            await openaccountPage.openPage();
            await openaccountPage.openNewAccount();
            await openaccountPage.verifyOpenNewAccountSuccess('Congratulations, your account is now open.')
        });

        test('Перевод средств между счетами', async ({ page }) => {
            const transferPage = await PageFactory.getPage(page, "TransferPage") as TransferPage;
          
            await transferPage.openPage();
            await transferPage.transferFunds('10.00');
            await transferPage.verifyTransferFundsSuccess('Transfer Complete!')
        });

        test.describe(`Запрос кредита`, () => {

            test('Запросить кредит', async ({ page }) => {
                const requestloanPage = await PageFactory.getPage(page, "RequestloanPage") as RequestloanPage;
            
                await requestloanPage.openPage();
                await requestloanPage.requestLoan('100.00', '100.00');
                await requestloanPage.getLoanApplicationResult('Approved')
                await requestloanPage.checkLoanApplicationSuccessMessage(validationMessages.loanApplicationSuccessMessage);
            });

            test('Запросить кредит c суммой больше допустимой', async ({ page }) => {
                const requestloanPage = await PageFactory.getPage(page, "RequestloanPage") as RequestloanPage;
            
                await requestloanPage.openPage();
                await requestloanPage.requestLoan('1000000.00', '1000000.00');
                await requestloanPage.getLoanApplicationResult('Denied')
                await requestloanPage.checkLoanApplicationNegativeResultMessage(validationMessages.loanApplicationNegativeResultMessage);
            });
        });
    });
});
