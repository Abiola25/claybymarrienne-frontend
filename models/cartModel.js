const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
});

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: [cartItemSchema], default: [] }
});

module.exports = mongoose.model('Cart', cartSchema);