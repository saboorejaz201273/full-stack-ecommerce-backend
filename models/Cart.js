const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required: false,
        default: null
      },
      name: String,
      image: String,
      price: Number,
      qty: Number,
      size: String,
      key: String,
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Cart', CartSchema);