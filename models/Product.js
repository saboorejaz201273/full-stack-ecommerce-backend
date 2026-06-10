const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, default: 4 },
  reviews: { type: Number, default: 0 },
  badge: { type: String, default: '' },
  stock: { type: Number, default: 100 },
  colors: [String],
  sizes: [String]
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);