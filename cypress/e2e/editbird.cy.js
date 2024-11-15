import { LoginPage } from "./pages/loginPage";
import { faker } from "@faker-js/faker";


const loginPage = new LoginPage();
const randomNumber = faker.number.int({ min: 10, max: 10000 });

it('successfully login', () => {
    cy.visit('https://pedigree-manager.vercel.app/login');

    //login
    loginPage.enterEmail('yusranoor02@gmail.com');
    loginPage.enterPassword('12345678');
    loginPage.clickLogin();

    //Birds Page
cy.contains('BIRDS').click();

    //Edit Birds
    
    cy.get('.w-full.max-w-full.overflow-hidden.rounded-2xl.bg-white.shadow-lg')
    .first()
    .find('.lucide-square-pen')
    .click();

    // cy.get('input[name="ringNumber"]').type('{selectall}{backspace}').type(randomNumber);
    // cy.get('input[name = ringNumber]').clear({ force: true }).type(randomNumber);
    cy.get(':nth-child(3) >.mt-2 >.block')
    .clear({ force: true })
    .type(randomNumber);
    cy.get('button').contains('Update Bird').click();

});