const { Router } = require('express');
const { route } = require('express/lib/application');

const Language = require('../models/languageModel');

const router = Router();

router.get('/', async (req, res) => {
  const languages = await Language.getAll();

  return res.status(200).json(languages);
});

module.exports = router;