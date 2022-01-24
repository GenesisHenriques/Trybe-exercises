const connection = require('../connection');

module.exports = async (artist) => {
  const { _id, ...artistWithoutId } = artist;
  await (await connection()).collection('artist').updateOne(
    { _id: _id },
    { $set: artistWithoutId },
  );

  return artist;
};
