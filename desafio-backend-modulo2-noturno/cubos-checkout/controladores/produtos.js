const {produtos} = require("../banco/data.json"); 

const listarProdutos =  (req, res) =>{ //listar produtos por categorias e/ou preço
    const { categoria, precoInicial, precoFinal } = req.query;
    let produto = produtos;
        if(categoria){
            produto = produto.filter(
                (produto) => produto.categoria.toLowerCase() === categoria.toLowerCase() && produto.estoque > 0  
            );
        }
        if(precoInicial && precoFinal){
            produto = produto.filter(
                (produto) => (produto.preco * 100) >= Number(precoInicial) && (produto.preco * 100) <= Number(precoFinal) && produto.estoque > 0
            );
        } 
        return res.json(produto);
    }


module.exports = {
    listarProdutos,
}

// Listar todos os produtos e devolver no formato de array de produtos;
// Listar apenas produtos que possuem estoque;
// Filtrar produtos por categoria;
// Filtrar produtos por faixa de preço;
// Filtrar produtos por categoria e por faixa de preço ao mesmo tempo.
// Okay