/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })

    

import homeLogin from './PageObjects/homeLogin'

const Home = new homeLogin()

describe('Teste De Portal De Vagas', () => {
    it('Teste De Login', () => {
        
        Home.visita()
        Home.verifyTitle()
        Home.usuario()
        Home.senha()
        Home.entrar()
     });

     it.only('teste Pesquisar Curriculos Recebidos', () => {

        Home.visita()
        Home.usuario()
        Home.senha()
        Home.entrar()
        Home.verifyTitle2()
        Home.mostrandoSelect()
        Home.pesquisarNome()
        Home.verCurriculo()
    
    });


    it.only('teste Cadastrar Vagas', () => {

        Home.visita()
        Home.usuario()
        Home.senha()
        Home.entrar()
        Home.verifyTitle2()
        Home.newVaga()
        Home.verifyTitle3()
        Home.nomevaga()
        Home.requisitoVaga()
        Home.adicionarRequisito2()
        Home.requisitoVaga2()
        Home.adicionarRequisito3()
        Home.requisitoVaga3()
        Home.habilidade()
        Home.adicionarHabilidade2()
        Home.habilidade2()
        Home.areaVaga()
        Home.nivelVaga()
        Home.contrato()
        Home.horario()
        Home.beneficios()
        Home.salario()
        Home.nivelEscolar()
        Home.curso()
        Home.espec()
        Home.cadastrarVaga()
    });


    it.only('Teste de Pesquisa de Vagas', () => {
    
        Home.visit2()
        Home.filtrar()
        Home.pesquisaVagas2()
        Home.verifica()
        Home.canditatar()
        
    });

    it.only('teste Candidatar-se para vaga', () => {

        Home.visit2()
        Home.filtrar()
        Home.pesquisaVagas2()
        Home.verifica()
        Home.canditatar()
        Home.verifica2()
        Home.timeout()
        Home.confirma()
        Home.verifica3()
        Home.nomeCompleto()
        Home.cpf()
        Home.email()
        Home.phone()
        Home.vaga()
        Home.msg()
        Home.verificaCv()
        Home.anexarCv()
        Home.confir()
        
    });
    

    
});