const Restaurant = require('../models/Restaurant');

exports.getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
};
