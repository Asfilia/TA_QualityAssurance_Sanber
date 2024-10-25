import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import forgotPasswordPage from "../../pom/forgotpassword";
forgotPasswordPage

Given('I Visit URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    cy.wait(10000);
});

When('I should see Homepage Forgot Password', () => {
    forgotPasswordPage.verifyForgotPasswordPage().should('have.text','Reset Password');
});

When ('I Input Username', () => {
    forgotPasswordPage.inputUsername().type('name');
});

When ('I Input Username Empty', () => {
    forgotPasswordPage.inputUsername().should('be.empty');
});

When('I Input Username Enter', () => {
    forgotPasswordPage.inputUsername('[name="username"]').type('Admin{enter}');
});

Then('I Click Button Reset Password', () => {
    cy.intercept('GET','**/messages').as('messages');
    forgotPasswordPage.buttonReset().click();
    cy.wait('@messages');
});

Then('I Click the Second Button Reset Password', () => {
    forgotPasswordPage.buttonReset().click();
});

Then('I Verify Reset Password link sent successfully', () => {
    forgotPasswordPage.verifyResetSuccessfully().should('have.text','Reset Password link sent successfully');
});

Then('I Verify Required Message', () => {
    forgotPasswordPage.required().should('contain','Required');
});

Then('I Verify Login Homepage', () => {
    forgotPasswordPage.verifyLoginPage().should('have.text','Login');
});

Then('I Click Button Cancel', () => {
    forgotPasswordPage.buttonCancel().click();
});
