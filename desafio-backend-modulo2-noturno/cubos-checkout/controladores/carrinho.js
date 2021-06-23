const { escreverNoArquivo, lerArquivo } = require('../bibliotecaFS');
const data = require('../banco/data.json');
const { addBusinessDays } = require('date-fns')

// Acabei apagando as logicas,elas estavam muito quebradas. Sei como deve vim o feedback dessa atividade, mas vou esperar sair os videos dela feita para que eu possa aprender como se faz, e em seguida, rever o modulo na parte de back.

const produtosCarrinho = (req, res) =>{
    res.json(carrinho);
}

async function adicionarProduto(req, res) {
  
}


module.exports = {
    produtosCarrinho,
    adicionarProduto
}

// Uma lista (array) contendo os produtos que estão no carrinho, com todas as suas informações:

// O subtotal, ou seja, o total a pagar em produtos selecionados no carrinho
// A dataDeEntrega que é fixada em 15 dias úteis para qualquer entrega;
// O valorDoFrete, que segue a seguinte lógica:
    // Para compras até R200,00 o valor do frete é R200,00ovalordofrete 
// é R 50,00 e para compras acima de R$ 200,00 o frete é GRÁTIS;
// O totalAPagar que é a soma do subtotal com o frete.