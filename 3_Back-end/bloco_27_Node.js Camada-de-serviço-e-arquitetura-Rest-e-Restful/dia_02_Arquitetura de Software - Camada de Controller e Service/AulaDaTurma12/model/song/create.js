const connection = require('../connection');

module.exports = async (song) => {
  return (await connection()).collection('song').insertOne(artist);
};