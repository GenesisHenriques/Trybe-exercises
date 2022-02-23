const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'Genesis',
  password: 'Genesis022305@',
  database: 'mvc_example'});

module.exports = connection;