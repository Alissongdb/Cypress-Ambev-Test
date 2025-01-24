describe('Usuários - API', () => {

    let token;

    before(() => {
        cy.request('POST', 'https://serverest.dev/login', {
            email: 'fulano@qa.com',
            password: 'teste'
        }).its('body.authorization').then(authorization => {
            token = authorization.split(' ')[1];
            console.log('Token capturado:', token);
        });
    });


    it('Deve criar um novo usuário', () => {
        const novoUsuario = {
            nome: 'Fulano da Silva',
            email: 'beltranooooooooooo@qa.com.br',
            password: 'teste',
            administrador: "true"
        };

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: novoUsuario,
            failOnStatusCode: false
        }).then(response => {
            console.log('Resposta da criação do usuário:', response.body);
            if (response.status === 400) {
                console.error('Erro 400:', response.body);
            }
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
            expect(response.body).to.have.property('_id');
        });
    });


    it('Deve atualizar um usuário', () => {
        const usuarioAtualizado = {
            nome: 'Fulano da Silva',
            email: 'beltraninhociclaninho@qa.com.br',
            administrador: "true"
        };

        cy.request({
            method: 'PUT',
            url: 'https://serverest.dev/usuarios/0uxuPY0cbmQhpEz1',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: usuarioAtualizado,
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Registro alterado com sucesso');
        });
    });


    it('Deve listar todos os usuários', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios',
            headers: {
                Authorization: `Bearer ${token}`
            },
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('quantidade');
            expect(response.body.usuarios).to.be.an('array').that.is.not.empty;
        });
    });


    it('Deve buscar um usuário pelo ID', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios/0uxuPY0cbmQhpEz1',
            headers: {
                Authorization: `Bearer ${token}`
            },
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('nome');
            expect(response.body).to.have.property('email');
        });
    });


    it('Deve deletar um usuário', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://serverest.dev/usuarios/0uxuPY0cbmQhpEz1',
            headers: {
                Authorization: `Bearer ${token}`
            },
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Registro excluído com sucesso');
        });
    });

});
