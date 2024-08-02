const express = require('express');
const router = express.Router();
const { handlePost, handleGet } = require('./controller.js');

router.post('/bfhl', handlePost);
router.get('/bfhl', handleGet);

module.exports = router;
