const express = require('express');

const shopController = require('../controllers/shop')

const router = express.Router();
     
//GET
router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts)
router.get('/cart', shopController.getCart)
router.get('/checkout', shopController.getCheckout)
router.get('/orders', shopController.getOrders)

//POST

//PUT

module.exports = router;