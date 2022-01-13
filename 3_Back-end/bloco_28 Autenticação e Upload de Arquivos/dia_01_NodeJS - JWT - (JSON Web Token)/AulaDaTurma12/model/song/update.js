const connection = require('../connection');

module.exports = async (artist) => {
  const { _id, ...songWithoutId } = artist;
  await (await connection()).collection('song').updateOne(
    { _id: _id },
    { $set: songWithoutId },
  );

  return artist;
};
