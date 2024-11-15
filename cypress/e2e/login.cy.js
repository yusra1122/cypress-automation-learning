//My Pigeon records Login Page
//call class functions here from page folder "login-page.js"
//dynamically enter data

import { LoginPage } from "./pages/loginPage";

const loginPage = new LoginPage();

describe('login', () => {

    it('successfully login', () => {
      
      cy.visit('https://pedigree-manager.vercel.app/login');

      loginPage.enterEmail('yusranoor02@gmail.com');
      loginPage.enterPassword('12345678');
      loginPage.clickLogin();

      
//for static data entry
      // cy.get('input[name=email]').type('yusranoor02@gmail.com')
      // cy.get('input[name=password]').type('12345678')
      // cy.get('button').contains('Log In').click();
    })
  })