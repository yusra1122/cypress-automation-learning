import { LoginPage } from "./pages/loginPage";
import { faker } from '@faker-js/faker';
const loginPage = new LoginPage();

const randomLocation = faker.location.city();

//select random cock from dropdown
function selectRandomCock() {
  cy.get('.css-t3ipsp-control ').click();
  cy.get('#react-select-2-listbox [id^="react-select-2-option-"]').then($options => {
    const optionCount = $options.length; 
    const randomIndex = Math.floor(Math.random() * optionCount);
    const randomOptionId = `#react-select-2-option-${randomIndex}`;
    cy.get(randomOptionId).click();
  });
}
//select random hen from dropdown
function selectRandomHen() {
  cy.get('.css-13cymwt-control').click({multiple : true});
  cy.get('#react-select-3-listbox [id^="react-select-3-option-"]').then($options => {
    const optionCount = $options.length; 
    const randomIndex = Math.floor(Math.random() * optionCount);
    const randomOptionId = `#react-select-3-option-${randomIndex}`;
    cy.get(randomOptionId).click();
  });
}

describe('pairing page', () => {
    it('successfully pair birds', () => {

        //login

        cy.visit('https://pedigree-manager.vercel.app/login');
        loginPage.enterEmail('yusranoor02@gmail.com');
        loginPage.enterPassword('12345678');
        loginPage.clickLogin();

        //Birds pairing

        cy.contains('PAIRING').click();
      cy.get('button').contains('Create a Pair').click()
      selectRandomCock();
      selectRandomHen();
      cy.get('input[name = location]').type(randomLocation);
      cy.get('input[name = pairedFrom]').type('2023-01-01');
      cy.get('button').contains('Create Pair').click();


    });
}); 