const bookController = require('../controllers/book.controller');
const express = require('express');
const router = express.Router();

router.get('/get', bookController.getBook);
router.post('/create', bookController.createBook);
router.post('/update', bookController.updateBook);
router.post('/delete', bookController.deleteBook);

module.exports = router;