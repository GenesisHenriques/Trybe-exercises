const mysql = require('mysql2/promise');

var connection = null;

module.exports = () => {
  return connection ? connection : connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Genesis022305*',
    database: 'series',
  })
};

