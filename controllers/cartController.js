const Cart = require('../models/Cart');
const mongoose = require('mongoose');

const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) cart = { items: [] };
    res.json({ success: true, items: cart.items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    console.log('Received:', req.body);
    const { productId, name, image, price, qty, size, key } = req.body;
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    const exists = cart.items.find(i => i.key === key);
    if (exists) {
      exists.qty += qty;
    } else {
      const validProductId = mongoose.Types.ObjectId.isValid(productId) ? productId : null;
      cart.items.push({ product: validProductId, name, image, price, qty, size, key });
    }

    await cart.save();
    res.json({ success: true, items: cart.items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { productId, size } = req.body;
    const key = `${productId}-${size}`;
    const cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      cart.items = cart.items.filter(i => i.key !== key);
      await cart.save();
    }
    res.json({ success: true, items: cart ? cart.items : [] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { productId, size, qty } = req.body;
    const key = `${productId}-${size}`;
    const cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      const item = cart.items.find(i => i.key === key);
      if (item) item.qty = Math.max(1, qty);
      await cart.save();
    }
    res.json({ success: true, items: cart ? cart.items : [] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const clearCart = async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.user._id });
    res.json({ success: true, items: [] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getCart, addToCart, removeFromCart, updateCartItem, clearCart };