const Language = require('../models/languageModel');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('increaseVotes', async ({ id }) => {
    console.log(`Ouve um voto na linguagem id ${id}`);

    await Language.increaseVotes(id);
    const languages = await Language.getById(id);

    io.emit('refreshCurrentVotes', Language);
  });
});