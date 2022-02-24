const CatsModel = require('../models/catModel');

const getAllCats = async (req, res) => {
  const cats = await CatsModel.getAll();

  if (cats.length === 0) return res.render('catList', { message: 'Não existem gatitos :(' })

  return res.render('catList', { cats, message: '' }); // Vou renderizar a pagina catList, e passar o atributo cats. aqui vai direto pra views
}

const createCats = async (req, res) => {
  const { name, age } = req.body;

  await CatsModel.create(name, age);

  res.render('success'); // Vou renderizar a pagina success
}

const getCatsById = async (req, res) => {
  const { id } = req.params;
  console.log(id, 'id');

  const [cat] = await CatsModel.getCatById(id);

  if (!cat) return res.render('notFound', { id });

  return res.render('catDetails', { cat }); // Vou renderizar a pagina success
}

module.exports = { getAllCats, createCats, getCatsById };