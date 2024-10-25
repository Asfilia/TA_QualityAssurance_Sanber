import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pom/login";




Given('I Visit URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});

When('I should see Homepage', () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});

When('I Submit Username', () => {
    loginPage.inputUsername().type('Admin');
});

When('I Submit Username Invalid', () => {
    loginPage.inputUsername().type('adm');
});

When('I Submit Username Symbol', () => {
    loginPage.inputUsername().type('@dmin_&*');
});

When('I Submit Username Sensitif Case', () => {
    loginPage.inputUsername().type('admin');
});

When('I Submit Username Empty', () => {
    loginPage.inputUsername().should('be.empty');
});

When('I Submit Username Enter', () => {
    loginPage.inputUsername('[name="username"]').type('Admin{enter}');
});

When('I Submit Password', () => {
    loginPage.inputPassword().type('admin123');
});

When('I Submit Password Invalid', () => {
    loginPage.inputPassword().type('adm123');
});

When('I Submit Password Symbol', () => {
    loginPage.inputPassword().type('@dmin_123');
});

When('I Submit Password Sensitif Case', () => {
    loginPage.inputPassword().type('Admin123');
});

When('I Submit Password Empty', () => {
    loginPage.inputPassword().should('be.empty');
});

When('I Submit Password Enter', () => {
    loginPage.inputPassword('[name="password"]').type('admin123{enter}');
});

Then('I Click Button Login', () => {
    cy.intercept('GET','**/action-summary').as('action');
    loginPage.buttonSubmit().click();
    cy.wait('@action');
});

Then('I Click the Third Button Login', () => {
    cy.intercept('GET','**/action-summary').as('action');
    cy.wait('@action');
});

Then('I Click the Second Button Login', () => {
    loginPage.buttonSubmit().click();
});

Then('I Verify Invalid Credentials', () => {
    loginPage.invalidCredentials().should('have.text','Invalid credentials');
});

Then('I Verify Required Message', () => {
    loginPage.required().should('contain','Required');
});

Then('I Verify Login Success', () => {
    loginPage.dashboardPage().should('have.text','Dashboard');
});

When('I Should See Forgot Password', () => {
    loginPage.forgotPassword().should('be.visible');
});

Then('I Click Forgot Password', () => {
    loginPage.forgotPassword().click();
});

Then('I Verify Dashboard Reset Password', () => {
    cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    loginPage.dashboardForgotPassword().should('have.text','Reset Password');
});