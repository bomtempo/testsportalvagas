class testLogin {

    visita() {
        cy.visit('https://servertester1.websiteseguro.com/admin/index.php')
    }

    verifyTitle() {
        cy.get('.text-center').should('contain', 'PORTAL DE VAGAS')
    }

    usuario() {
        cy.get('#login').type('admin').should('have.value', 'admin')
    }

    senha() {
        cy.get('#senha').type('1234').should('have.value', '1234')
    }

    entrar() {
        cy.get('.btn').click()
    }

    verifyTitle2(){
        cy.get('.mt-4').should('contain', 'Currículos recebidos')
    }

    mostrandoSelect() {
        cy.get('.custom-select').select('100', {force: true})
    }
    pesquisarNome() {
        cy.get('#curriculos_filter > label > .form-control').type('Rafael').should('have.value', 'Rafael')
    }

    verCurriculo() {
        cy.get('.odd > :nth-child(8) > .btn').click()
    }

    newVaga() {
        cy.get('[href="restrito_cadastro.php"]').click()
    }

    verifyTitle3() {
        cy.get('.mt-4').should('contain', 'Cadastrar vagas')
    }

    nomevaga() {
        cy.get('#nomeVaga').type('Analista de Teste').should('have.value', 'Analista de Teste')
    }

    requisitoVaga() {
        cy.get('#requisitosVaga').type('Conhecimento em selenium.').should('have.value', 'Conhecimento em selenium.')
    }

    adicionarRequisito2() {
        cy.get('#btnAdicionaRequisito').should('contain', 'Adicionar mais um(a)').click()
    }

    requisitoVaga2() {
        cy.get('#formExtra1 > #Requisito').type('Conhecimento em cypress.io')
    }
    
    adicionarRequisito3() {
        cy.get('#btnAdicionaRequisito').should('contain', 'Adicionar mais um(a)').click()
    }

    requisitoVaga3() {
        cy.get('#formExtra2 > #Requisito').type('1 ano ou mais de experiência.')
    }

    habilidade() {
        cy.get('#habilidadesVaga').type('Desejável certificação CTFL')
     }

     adicionarHabilidade2() {
         cy.get('#btnAdicionaHabilidade').click()
     }

     habilidade2() {
        cy.get('#Habilidade').type('Certificação Scrum Master').should('have.value', 'Certificação Scrum Master')
     }

     areaVaga() {
        cy.get('#areaVaga').type('Brasilia-DF').should('have.value', 'Brasilia-DF')
     }

     nivelVaga() {
        cy.get('#nivelVaga').type('Junior').should('have.value', 'Junior')
     }

     contrato() {
        cy.get('#contratoVaga').type('CLT').should('have.value', 'CLT')
     }

     horario() {
        cy.get('#horarioVaga').type('Comercial').should('have.value', 'Comercial')
     }
     
     beneficios() {
        cy.get('#beneficiosVaga').type('VA + VT').should('have.value', 'VA + VT')
     }

     salario() {
        cy.get('#salarioVaga').type('A Combinar').should('have.value', 'A Combinar')
     }

     nivelEscolar() {
        cy.get('#nivelEscolaridade').type('Superior').should('have.value', 'Superior')
     }

     curso() {
        cy.get('#cursoEscolaridade').type('Sistemas de Informação').should('have.value', 'Sistemas de Informação')
     }

     espec() {
        cy.get('#especializacaoEscolaridade').type('Banco de Dados').should('have.value', 'Banco de Dados')
     }

     cadastrarVaga() {
        cy.get(':nth-child(8) > .btn').click()
     }

     visit2() {
         cy.visit('https://servertester1.websiteseguro.com/')
     }

     filtrar() {
        cy.get('select').select('100', {force:true})
     }

     pesquisaVagas2() {
        cy.get('input').type('Polidor', {force: true}).should('have.value', 'Polidor')
     }

     verifica() {
        cy.get('.sorting_1').should('contain', 'Polidor')
     }

     canditatar() {
        cy.get('.btn').click()
     }

     verifica2() {
        cy.get('h3').should('contain', 'Polidor')
     }

     confirma() {
        cy.get('a > button').click({force: true})
     }

     verifica3() {
        cy.get('h3').should('contain', 'Candidatar-se para a vaga')
     }

     nomeCompleto() {
        cy.get('#inputNome').type('Alex dos Santos Bomtempo', {force: true}).should('have.value', 'Alex dos Santos Bomtempo')
     }

     cpf() {
        cy.get('#inputCpf').type('03903166104', {force: true}).should('have.value', "039.031.661-04")
     }

     email() {
        cy.get('#inputEmail').type('alexbomtempo@hotmail.com', {force: true}).should('have.value', 'alexbomtempo@hotmail.com')
     }

     phone() {
        cy.get('#inputTelefone').type('61991468574', {force: true}).should('have.value', '(61)99146-8574')
     }

     vaga() {
        cy.get('#inputVaga').select('Polidor', {force: true})
     }

     msg() {
        cy.get('#inputObs').type('Profissional com experiência de 5 anos', {force: true}).should('have.value', 'Profissional com experiência de 5 anos')
     }

     verificaCv() {
        cy.get(':nth-child(4) > .fonti').should('contain', 'Anexar Currículo (até 5mb)*')
     }

     anexarCv() {
        cy.get('#my_file').click({force: true})
     }

     confir() {
        cy.get('button').should('contain', 'Candidatar-se').click({force: true})
     }

     timeout(){
      cy.wait(2000)
     }



}






export default testLogin;
