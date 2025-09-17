const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  name: String,
  price: Number,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);
