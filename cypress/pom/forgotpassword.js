export default class forgotPasswordPage {
    static verifyForgotPasswordPage() {
        return cy.get('h6').contains('Reset Password');
    }
    static inputUsername() {
        return cy.get('[name="username"]');
    }
    static buttonCancel() {
        return cy.get('[type="button"]');
    }
    static buttonReset() {
        return cy.get('[type="submit"]');
    }
    static required() {
        return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]');
    }

    static verifyResetSuccessfully() {
        return cy.get('h6').contains('Reset Password link sent successfully');
    }
    static verifyLoginPage() {
        return cy.get('h5').contains('Login');
    }

}