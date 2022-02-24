(async () => {
  const db = require('./db');
  const Produto = require('./produto');
  await db.sync(); // Compara a tabela que eu crie aqui com a tabla lá do banco

  const novoProduto = await Produto.create({
    nome: 'Monitor gammer',
    preco: 300,
    descricao: 'brabo',
  })
  console.log(novoProduto);

  const produtos = await Produto.findByPk(1);
  console.log(produtos, 'aaaaaaaaaaaaaaaaaaaa');
})();