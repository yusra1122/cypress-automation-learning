import { LoginPage } from "./pages/loginPage";
import { faker } from "@faker-js/faker";
const randomLocation = faker.location.city();
const randomNumber = faker.number.int('#######');
const details = faker.lorem.lines();
const title = faker.book.title();
const loginPage = new LoginPage();

it('successfully login', () => {
    cy.visit('https://pedigree-manager.vercel.app/login');

    loginPage.enterEmail('yusranoor02@gmail.com');
    loginPage.enterPassword('12345678');
    loginPage.clickLogin();
    // just testing

    cy.contains('RACE').click();
    cy.contains('Add a Race').click();
    cy.get('input[name = raceTitle]').type(title);
    cy.get('input[name = raceDate]').type('2023-01-01');
    cy.get('input[name = totalEntries]').type(randomNumber);
    cy.get('input[name = prizeMoney]').type(randomNumber);
    // cy.get('input[name = startTime]').type('05:24/P{enter}');
    cy.get('input[type= time]').invoke('val', '5:23 PM').trigger('change');
    cy.get('input[name = costPerEntry]').type(randomNumber);
    cy.get('input[name = location]').type(randomLocation);
    cy.get('textarea').type(details);
})