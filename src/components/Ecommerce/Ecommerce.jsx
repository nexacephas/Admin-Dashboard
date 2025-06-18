// src/pages/EcommercePage.jsx
import React, { useState, useEffect } from 'react';
import './Ecommerce.css';
import ProductCard from '../Ecommerce/ProductCard';  

const sampleProducts = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, image: '/images/headphones.jpg' },
  { id: 2, name: 'Smart Watch', price: 149.99, image: '/images/smartwatch.jpg' },
  { id: 3, name: 'Bluetooth Speaker', price: 49.99, image: '/images/speaker.jpg' },
  { id: 4, name: 'DSLR Camera', price: 699.99, image: '/images/camera.jpg' },
  { id: 5, name: 'VR Headset', price: 299.99, image: '/images/vr.jpg' },
  { id: 6, name: 'Gaming Mouse', price: 39.99, image: '/images/mouse.jpg' },
  { id: 7, name: 'Mechanical Keyboard', price: 89.99, image: '/images/keyboard.jpg' },
  { id: 8, name: '4K Monitor', price: 399.99, image: '/images/monitor.jpg' },
];

const Ecommerce = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="ecom-page">
      <div className="hero-banner">
        <div className="hero-text">
          <h1>Top Tech Deals</h1>
          <p>Get the best gadgets at the lowest prices!</p>
        </div>
      </div>

      <div className="ecom-header">
        <h2>All Products</h2>
        <div className="ecom-controls">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {sorted.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="promo-section">
        <h3>🔥 Flash Sales</h3>
        <p>Limited time offers you can’t resist! Shop now before it’s too late.</p>
      </div>
    </div>
  );
};

export default Ecommerce;
