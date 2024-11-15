//Add Objects and functions in class

export class LoginPage {
  
    email_inputfield = "input[name = email]";
    password_inputfield = "input[name = password]";
    login_button = ".inline-flex";
  
    enterEmail(email) {
      cy.get(this.email_inputfield).type(email);
    }
    enterPassword(password) {
      cy.get(this.password_inputfield).type(password);
    }
    clickLogin() {
      cy.get(this.login_button).click();
    }
  }