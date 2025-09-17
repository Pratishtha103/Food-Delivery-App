const express = require('express');
const { placeOrder, getOrders } = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, placeOrder);
router.get('/', auth, getOrders);

module.exports = router;
