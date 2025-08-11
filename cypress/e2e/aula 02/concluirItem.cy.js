 import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';

describe('Concluir itens na lista de toDo', () => {

    // dado before - antes do primeiro teste
    // before each - antes de cada teste
    
    beforeEach(() => {
        cy.visit('/');
         var todoItens = ["Maça", "Banana", "Cenoura"];

        todoItens.forEach(function(item, indice, array) {
            telaInicial.inputText(item)
        })
    });

    it('Concluir um item na lista de toDo', () => {
        telaInicial.concluirItem()
    });

});
