const express = require('express');
const router = express.Namespace ? express.Namespace() : express.Router();
const contactController = require('../controllers/contactController');

router.post('/submit', contactController.submitForm);

module.exports = router;
