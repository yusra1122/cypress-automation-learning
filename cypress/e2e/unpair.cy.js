
import { LoginPage } from "./pages/loginPage";

const loginPage = new LoginPage();
it('unpair', () => {
    cy.visit('https://pedigree-manager.vercel.app/login');

    //login
    loginPage.enterEmail('yusranoor02@gmail.com');
    loginPage.enterPassword('12345678');
    loginPage.clickLogin();

    //Visit pairing page
    cy.contains('PAIRING').click();

    //click on unpair button 
cy.get('.col-span-2.rounded-\\[20px\\].bg-white.p-4.shadow-sm.md\\:col-span-1')
  .contains('button', 'Unpair')
  .click()

  // Add assertions for confirmation dialog
    cy.contains('Are you sure you want to unpair?').should('be.visible')

    cy.contains('Yes, Unpair').click() //for unpairing
    
    // cy.contains('No, Cancel').click()  //for cancelling
});