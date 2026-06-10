require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: "Smart Watch", price: 199, oldPrice: 249,
    category: "Watches", image: "/images/products/smartwatch.png",
    rating: 5, reviews: 324, badge: "hot", stock: 50,
    colors: ["#1C1C1E", "#A2AAAD"], sizes: ["One Size"],
    description: "Advanced health monitoring smartwatch."
  },
  {
    name: "Laptop", price: 999, oldPrice: 1299,
    category: "Laptops", image: "/images/products/laptop.png",
    rating: 5, reviews: 218, badge: "sale", stock: 30,
    colors: ["#1C1C1E", "#E8E8E8"], sizes: ["8GB", "16GB"],
    description: "High performance laptop."
  },
  {
    name: "Canon Camera", price: 679, oldPrice: 799,
    category: "Cameras", image: "/images/products/camera.png",
    rating: 4, reviews: 89, badge: "new", stock: 20,
    colors: ["#1C1C1E"], sizes: ["Body Only", "Kit"],
    description: "Professional DSLR camera."
  },
  {
    name: "Gaming Headphones", price: 89, oldPrice: 120,
    category: "Headphones", image: "/images/products/gaming-headphones.png",
    rating: 4, reviews: 532, badge: "hot", stock: 100,
    colors: ["#1C1C1E", "#0071E3"], sizes: ["One Size"],
    description: "Immersive gaming headphones."
  },
  {
    name: "iPhone", price: 999, oldPrice: 1199,
    category: "Phones", image: "/images/products/iphone.png",
    rating: 5, reviews: 401, badge: "sale", stock: 40,
    colors: ["#E8003D", "#1C1C1E"], sizes: ["128GB", "256GB"],
    description: "Latest iPhone."
  },
  {
    name: "Xiaomi Phone", price: 399, oldPrice: 499,
    category: "Phones", image: "/images/products/phone.png",
    rating: 4, reviews: 293, badge: "", stock: 60,
    colors: ["#1C1C1E", "#E8E8E8"], sizes: ["64GB", "128GB"],
    description: "Feature-packed smartphone."
  },
  {
    name: "Tablet", price: 449, oldPrice: 549,
    category: "Phones", image: "/images/products/tablet.png",
    rating: 4, reviews: 167, badge: "", stock: 35,
    colors: ["#1C1C1E", "#E8E8E8"], sizes: ["64GB", "128GB"],
    description: "Powerful tablet."
  },
  {
    name: "White Headphones", price: 199, oldPrice: 259,
    category: "Headphones", image: "/images/products/headphones.png",
    rating: 5, reviews: 444, badge: "sale", stock: 80,
    colors: ["#F7F7F7", "#1C1C1E"], sizes: ["One Size"],
    description: "Premium wireless headphones."
  },
  {
    name: "Smart Watch 2", price: 249, oldPrice: 299,
    category: "Watches", image: "/images/products/smartwatch.png",
    rating: 4, reviews: 201, badge: "new", stock: 45,
    colors: ["#1C1C1E", "#A2AAAD"], sizes: ["One Size"],
    description: "Next generation smartwatch."
  },
  {
    name: "Sofa Chair", price: 299, oldPrice: 399,
    category: "Home", image: "/images/products/chair.png",
    rating: 4, reviews: 112, badge: "", stock: 15,
    colors: ["#F5E6C8"], sizes: ["Standard"],
    description: "Comfortable modern sofa chair."
  },
  {
    name: "Table Lamp", price: 49, oldPrice: 69,
    category: "Home", image: "/images/products/lamp.png",
    rating: 4, reviews: 876, badge: "new", stock: 200,
    colors: ["#888"], sizes: ["Standard"],
    description: "Modern decorative table lamp."
  },
  {
    name: "Coffee Machine", price: 129, oldPrice: 169,
    category: "Home", image: "/images/products/coffee-machine.png",
    rating: 5, reviews: 211, badge: "hot", stock: 25,
    colors: ["#F7F7F7"], sizes: ["Standard"],
    description: "Brew perfect coffee."
  },
  {
    name: "Juicer", price: 89, oldPrice: 119,
    category: "Home", image: "/images/products/juicer.png",
    rating: 4, reviews: 334, badge: "", stock: 40,
    colors: ["#E8E8E8"], sizes: ["Standard"],
    description: "Cold press juicer."
  },
  {
    name: "Electric Kettle", price: 39, oldPrice: 55,
    category: "Home", image: "/images/products/kettle.png",
    rating: 4, reviews: 198, badge: "sale", stock: 150,
    colors: ["#1C1C1E"], sizes: ["1.5L", "1.7L"],
    description: "Fast boiling electric kettle."
  },
  {
    name: "Clay Pot", price: 25, oldPrice: 35,
    category: "Home", image: "/images/products/clay-pot.png",
    rating: 4, reviews: 88, badge: "", stock: 100,
    colors: ["#B5651D"], sizes: ["Small", "Medium", "Large"],
    description: "Handmade traditional clay pot."
  },
  {
    name: "Magazine Holder", price: 35, oldPrice: 50,
    category: "Furniture", image: "/images/products/magazine-holder.png",
    rating: 4, reviews: 76, badge: "new", stock: 60,
    colors: ["#8B5E3C"], sizes: ["Standard"],
    description: "Stylish leather magazine holder."
  },
  {
    name: "Indoor Plant", price: 29, oldPrice: 40,
    category: "Home", image: "/images/products/plant.png",
    rating: 5, reviews: 156, badge: "", stock: 80,
    colors: ["#2E7D32"], sizes: ["Small", "Medium"],
    description: "Beautiful indoor plant."
  },
  {
    name: "Air Mattress", price: 79, oldPrice: 99,
    category: "Furniture", image: "/images/products/air-mattress.png",
    rating: 4, reviews: 203, badge: "sale", stock: 30,
    colors: ["#5B9BD5"], sizes: ["Single", "Double"],
    description: "Comfortable air mattress."
  },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected!');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('✅ All products seeded successfully!');
    process.exit();
  })
  .catch(err => {
    console.log('❌ Error:', err);
    process.exit(1);
  });