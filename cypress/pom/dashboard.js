export default class dashboardPage{
    static verifyDashboard() {
        return cy.get('h6').contains('Dashboard');
    }

    static AdminPage() {
        return cy.get('h5').contains('System Users');
    }

    static linkAdmin() {
        return cy.get('[href="/web/index.php/admin/viewAdminModule"]');
    }
    static inputUsernameSearch() {
        return cy.get('.oxd-input.oxd-input--active').eq(1);
    }

    static dataAdmin() {
        return cy.get('[role="table"]');
    }

    static buttonSearch() {
        return cy.get('[type="submit"]');
    }
    static inputUserRoleAdmin() {
        cy.get('[class="oxd-select-text-input"]').eq(0).click();
        cy.get(".oxd-select-dropdown").children().eq(1).click();
    }

    static inputUserRoleESS() {
        cy.get('[class="oxd-select-text-input"]').eq(0).click();
        cy.get(".oxd-select-dropdown").children().eq(2).click();
    }

    static selectStatusEnabled() {
        cy.get('[class="oxd-select-text-input"]').eq(1).click();
        cy.get(".oxd-select-dropdown").children().eq(1).click();
    }
    
    static selectStatusDisabled() {
        cy.get('[class="oxd-select-text-input"]').eq(1).click();
        cy.get(".oxd-select-dropdown").children().eq(1).click();
    }
}