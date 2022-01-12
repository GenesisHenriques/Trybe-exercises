const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017'; // string de conexão
const DB_name = 'model_example'; // Nome do banco

let connection = null;

module.exports = async () => {
  try {
    return connection ?
    connection :
    connection = (await MongoClient.connect(
      URL,
      {
        useNewUrlParser: true, // Para o mongo entender a URL
        useUnifiedTopology: true // Para organizar as suas replicas
      }
    )).db(DB_name) // Escolho qual BD eu quero usar
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};