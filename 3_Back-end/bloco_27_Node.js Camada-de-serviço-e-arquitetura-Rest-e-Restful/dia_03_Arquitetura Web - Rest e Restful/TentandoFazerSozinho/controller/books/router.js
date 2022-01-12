const express = require('express');

const list = require('./list');
const find = require('./find');

const router = express.Router({ mergeParams: true });

router.get('/', list);
router.get('/:id', find);

module.exports = router;