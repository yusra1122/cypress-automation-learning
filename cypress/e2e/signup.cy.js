//Dynamically enter data
//done from page signupPage.js

import { SignupPage } from "./pages/signupPage";
import { faker } from '@faker-js/faker';

const UserName = faker.person.fullName(); 
const Email = faker.internet.email();
let Password = faker.internet.password();
let Address1 = faker.location.secondaryAddress() 
let Address2 = faker.location.street();
let city = faker.location.city();
let state = faker.location.state();
let postCode = faker.location.zipCode('#####');
const signupPage = new SignupPage();

it('signups succesfully', () => {
    cy.visit('https://pedigree-manager.vercel.app/signUp');

    signupPage.enterUserName(UserName);
    signupPage.enterEmail(Email);
    signupPage.enterPassword(Password);
    signupPage.enterConfirmPassword(Password);
    signupPage.enterAddress1(Address1);
    signupPage.enterAddress2(Address2);
    signupPage.enterCity(city);
    signupPage.enterState(state);
    signupPage.enterPostcode(postCode);
    signupPage.selectRandomCountry(); 
    signupPage.clickSignup();
});