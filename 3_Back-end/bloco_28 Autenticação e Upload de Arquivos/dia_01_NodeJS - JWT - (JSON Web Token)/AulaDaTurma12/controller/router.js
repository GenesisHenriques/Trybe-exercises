const express = require('express');
const artist = require('./artist/router');
const song = require('./song/router');
const login = require('./artist/login');

const root = express.Router({ mergeParams: true });

root.use('/artist', artist);
root.use('/song', song);
root.use('/login', login);

module.exports = root;