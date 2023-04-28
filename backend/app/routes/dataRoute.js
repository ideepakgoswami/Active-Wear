const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController.js');

// Categories Data route
router.get('/categories', dataController.getCategories);

// All Products route
router.get('/Products/:category', dataController.getProducts);

module.exports = router;