 import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';

describe('Deletar itens da lista', () => {

    // dado before - antes do primeiro teste
    // before each - antes de cada teste
    
    beforeEach(() => {
        cy.visit('/');
         var todoItens = ["Maça", "Banana", "Cenoura"];

        todoItens.forEach(function(item, indice, array) {
            telaInicial.inputText(item)
        })
    });

    it('Deleção de um item da lista', () => {
        telaInicial.deletarItem()
    });

});
