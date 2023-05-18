const express = require('express');
const urlController = require('../controllers/urlController');
const router = express.Router();

router.post('/', urlController.postShortId);

router.get('/:shortUrl', urlController.getShortId);

module.exports = router;