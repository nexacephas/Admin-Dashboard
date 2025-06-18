// src/pages/Ecommerce/ProductCard.jsx
import React from 'react';
import './Ecommerce.css';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-meta">
        <span className="price">${product.price}</span>
        <span className="stock">{product.stock} in stock</span>
      </div>
      <div className="product-actions">
        <button onClick={() => onEdit(product)}>Edit</button>
        <button className="danger" onClick={() => onDelete(product.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
