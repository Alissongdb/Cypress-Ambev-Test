class LoginPage {

    navigate() {
        cy.visit('/login');
    }

    fillEmail(email) {
        cy.get('[data-testid="email"]')
            .type(email);
    }

    fillPassword(password) {
        cy.get('[data-testid="senha"]')
            .type(password);
    }

    submit() {
        cy.get('[data-testid="entrar"]')
            .click();
    }

    verifyLoginSuccess() {
        cy.contains('Serverest Store').should('be.visible');
    }

    verifyErrorMessage(message) {
        cy.contains(message).should('be.visible');
    }
}

export default new LoginPage();