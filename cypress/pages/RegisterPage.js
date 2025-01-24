
class RegisterPage {

    navigate() {
        cy.visit('/cadastrarusuarios');
    }

    fillName(name) {
        cy.get('[data-testid="nome"]')
            .type(name);
    }

    fillEmail(email) {
        cy.get('[data-testid="email"]')
            .type(email);
    }

    fillPassword(password) {
        cy.get('[data-testid="password"]')
            .type(password);
    }

    submit() {
        cy.get('[data-testid="cadastrar"]')
            .click();
    }

    verifySuccessMessage() {
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    }

    verifyErrorMessage(message) {
        cy.contains(message).should('be.visible');
    }

}

export default new RegisterPage();
