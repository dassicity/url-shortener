const express = require('express');
const urlController = require('../controllers/urlController');
const router = express.Router();

router.get('/', urlController.getShortId);

module.exports = router;