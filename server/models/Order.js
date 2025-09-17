const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  items: [{ menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }, qty: Number }],
  status: { type: String, enum: ['placed','preparing','delivered'], default: 'placed' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
