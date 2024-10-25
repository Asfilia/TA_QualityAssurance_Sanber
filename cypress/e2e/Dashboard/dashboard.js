import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
dashboardPage
import loginPage from "../../pom/login";
import dashboardPage from "../../pom/dashboard";
loginPage

Given('I Visit LoginPage', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});

When('I Input Username', () => {
    loginPage.inputUsername().type('Admin');
});

When('I Input Password', () => {
    loginPage.inputPassword().type('admin123');
});

When('I Search Username', () => {
    dashboardPage.inputUsernameSearch().type('Admin');
});

When('I Select User Role Admin', () => {
    dashboardPage.inputUserRoleAdmin();
});

When('I Select User Role ESS', () => {
    dashboardPage.inputUserRoleESS();
});

When('I Select Status Enabled', () => {
    dashboardPage.selectStatusEnabled();
});
When('I Select Status Disabled', () => {
    dashboardPage.selectStatusDisabled();
});

Then('I Verify Admin Page', () => {
    dashboardPage.AdminPage().should('have.text','System Users');
});

Then ('I see Tabel Data', () => {
    dashboardPage.dataAdmin().should('be.visible')
})

Then('I Click Button LoginPage', () => {
    cy.intercept('GET','**/action-summary').as('action');
    loginPage.buttonSubmit().click();
    cy.wait('@action');
});

Then('I Verify Login Success', () => {
    loginPage.dashboardPage().should('have.text','Dashboard');
});

Then('I Click Admin Page', () => {
    cy.intercept('GET','**/messages').as('messages');
    dashboardPage.linkAdmin().click();
    cy.wait('@messages');
});

Then('I Click Button Search', () => {
    dashboardPage.buttonSearch().click();

});

// Given('I Visit AdminMenu', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
//     cy.wait(10000);
// });

// Given('I Visit DashboardPage', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//     cy.wait(10000);
// });




