 import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';

describe('Validar os filstros da aplicação após edição de itens', () => {

    // dado before - antes do primeiro teste
    // before each - antes de cada teste
    
    beforeEach(() => {
        cy.visit('/');
         var todoItens = ["Maça", "Banana", "Cenoura"];

        todoItens.forEach(function(item, indice, array) {
            telaInicial.inputText(item)
        })

        telaInicial.concluirItem()
    });

    // clicar no filtro
    // o item ser exibido
    // e o contador deve bater a informação
    // 

    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem("Active")
    });

    it.skip('Filtrar itens concluidos', () => {
        
    });

});
