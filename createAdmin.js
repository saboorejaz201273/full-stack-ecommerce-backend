require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await User.deleteMany({ role: 'admin' });
    await User.create({
      name: 'Admin',
      email: 'admin@shop.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('✅ Admin created!');
    console.log('Email: admin@shop.com');
    console.log('Password: admin123');
    process.exit();
  })
  .catch(err => console.log(err));