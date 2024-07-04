import { Page } from 'playwright';
import { HomePage } from './homePage';
import { LoginPage } from './loginPage';
import { RegistrationPage } from './registrationPage';
import { OverviewPage } from './overviewPage';
import { HeaderPanel } from './headerPage';
import { OpenaccountPage } from './openaccountPage';
import { TransferPage } from './transferPage';
import { RequestloanPage } from './requestloanPage';
import { ContactPage } from './contactPage';


export class PageFactory {
    static async getPage(page: Page, pageName: string) {
        switch (pageName) {
            case "HomePage":
                return new HomePage(page);
            case "LoginPage":
                return new LoginPage(page);
            case "RegistrationPage":
                return new RegistrationPage(page);
            case "OverviewPage":
                return new OverviewPage(page);
            case "HeaderPanel":
                return new HeaderPanel(page);
            case "OpenaccountPage":
                return new OpenaccountPage(page);
            case "TransferPage":
                return new TransferPage(page);
            case "RequestloanPage":
                return new RequestloanPage(page);
            case "ContactPage":
                return new ContactPage(page);
            default:
                throw new Error('Unknown page name');
        }
    }
}