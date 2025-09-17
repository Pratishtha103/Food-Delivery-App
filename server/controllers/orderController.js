const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  const order = await Order.create({ ...req.body, customer: req.user.id });
  res.json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ customer: req.user.id }).populate('items.menuItem');
  res.json(orders);
};
