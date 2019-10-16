
const express = require('express');
const router = express.Router();

const ebayController = require('../controllers/EbayController');

module.exports = function() {
  // GET: check ebay connect
  router.get('/ebay/find/:query', ebayController.find);
  router.get('/ebay/category/:category', ebayController.getItemsByCategory);

  return router;
};
