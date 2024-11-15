
import { LoginPage } from "./pages/loginPage";
import { faker } from '@faker-js/faker';

const loginPage = new LoginPage();
const randomName = faker.animal.bird() 
const randomColor = faker.color.human();
const randomEarning = faker.number.int();
const randomNumber = faker.number.int('#######');
const randomLocation = faker.location.city();
const details = faker.lorem.lines();
// const details = faker.word.words({ count: 5 });
describe('', () => {

    it('successfully login', () => { 
      cy.visit('https://pedigree-manager.vercel.app/login');

      loginPage.enterEmail('yusranoor02@gmail.com');
      loginPage.enterPassword('12345678');
      loginPage.clickLogin();

      //Add Bird 
      cy.contains('Add Bird').click();
      cy.get('input[name = ringNumber]').type(randomNumber);
      cy.get('input[name =name]').type(randomName);
      cy.get('select').eq(0).select(1).should('have.value', 'Stock Bird');//select status
      cy.get('input[name =earningsToDate]').type(randomEarning);
      cy.get('input[name =color]').type(randomColor);
      cy.get('input[name =strain ]').type(randomColor);
      cy.get('input[name =birthDate]').type('2002-01-01');
      cy.get('select').eq(1).select(2);//select gender
      cy.get('input[name =location]').type(randomLocation);
      cy.get('.ql-editor').type(details);
      cy.get('button').contains('Add Bird').click();
      
    })
  })

