const express = require('express');
const books = require('./books/router');

const root = express.Router({ mergeParams: true });

root.use('/books', books);

module.exports = root;