// models/Author.js

const connection = require('./connection');

// Busca todos os autores do banco.
const getAll = async () => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    return authors;
};

module.exports = {
    getAll,
};