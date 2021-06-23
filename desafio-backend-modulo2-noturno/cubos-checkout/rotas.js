const express = require ('express');
const produtos = require ('./controladores/produtos');
const carrinho = require ('./controladores/carrinho');

const rotas = express();

rotas.get('/produtos', produtos.listarProdutos);
rotas.get('/carrinho', carrinho.produtosCarrinho);
//rotas.post('carrinho/produtos', carrinho.adicionarProduto);
// rotas.patch('carrinho/produtos:idProduto', carrinho.alterarQtdProduto);
// rotas.delete('carrinho/produtos:idProduto', carrinho.);
// rotas.delete('carrinho', carrinho.);
// rotas.post('carrinho/finalizar-compra', carrinho.);

module.exports = rotas;