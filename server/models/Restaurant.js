const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: [String],
  rating: { type: Number, default: 0 },
  deliveryTimeMin: Number
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);
