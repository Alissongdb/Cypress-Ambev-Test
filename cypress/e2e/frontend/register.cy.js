import RegisterPage from "../../pages/RegisterPage";
import { faker } from '@faker-js/faker';

describe('Testes de Registro - E2E', () => {

    const name = faker.name.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    beforeEach(() => {
        RegisterPage.navigate();
    });

    it('Deve realizar registro com dados válidos', () => {

        RegisterPage.fillName(name);
        RegisterPage.fillEmail(email);
        RegisterPage.fillPassword(password);
        RegisterPage.submit();
        RegisterPage.verifySuccessMessage();
    });

    it('Deve exibir erro ao tentar registrar com email já utilizado', () => {
        RegisterPage.fillName(name);
        RegisterPage.fillEmail('Liana.Ratke@gmail.com'); // E-mail já cadastrado
        RegisterPage.fillPassword(password);
        RegisterPage.submit();
        RegisterPage.verifyErrorMessage('Este email já está sendo usado');
    });

    it('Deve exibir erro ao tentar registrar com campos vazios', () => {
        RegisterPage.submit();
        RegisterPage.verifyErrorMessage('Nome é obrigatório');
        RegisterPage.verifyErrorMessage('Email é obrigatório');
        RegisterPage.verifyErrorMessage('Password é obrigatório');
    });

    it('Deve validar o formato do email ao registrar', () => {
        RegisterPage.fillName(name);
        RegisterPage.fillEmail('emailInvalido');
        RegisterPage.fillPassword(password);
        RegisterPage.submit();

    });
});
