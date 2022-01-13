const Song = require('../../model/song');
const Artist = require('../../model/artist');

module.exports = async (song) => {
  const foundArtist = await Artist.findById(song.artistId);

  if(!foundArtist) return null;

  return Song.create(song);
};