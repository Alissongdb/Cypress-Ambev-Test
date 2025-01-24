import LoginPage from "../../pages/LoginPage";

describe('Testes de Login - E2E', () => {

    beforeEach(() => {
        LoginPage.navigate();
    });

    it('Deve realizar login com credenciais válidas', () => {
        LoginPage.fillEmail('Jerrod31@hotmail.com');
        LoginPage.fillPassword('YAV4kMoixVN1CPf');
        LoginPage.submit();
        LoginPage.verifyLoginSuccess();
    });

    it('Deve exibir erro ao tentar logar com credenciais inválidas', () => {
        LoginPage.fillEmail('usuario@teste.com');
        LoginPage.fillPassword('senhaInvalida');
        LoginPage.submit();
        LoginPage.verifyErrorMessage('Email e/ou senha inválidos');
    });

    it('Deve exibir erro ao tentar logar com campos vazios', () => {
        LoginPage.submit();
        LoginPage.verifyErrorMessage('Email é obrigatório');
        LoginPage.verifyErrorMessage('Password é obrigatório')
    });

    it.only('Deve realizar login ignorando espaços extras no email', () => {
        LoginPage.fillEmail(' usuario@teste.com ');
        LoginPage.fillPassword('123456');
        LoginPage.submit();
        LoginPage.verifyLoginSuccess();
    });
});
