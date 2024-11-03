import React, { useState } from 'react';
import { useProductStore } from '../store/productStore'; 
import ProductNavbar from './ProductPageNavbar'; 
import './ProductPage.css'; 

const ProductPage = () => {
  const { products } = useProductStore(); // Get products from context
  const [searchQuery, setSearchQuery] = useState(''); // Add state for search query

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='product-page'>
      <ProductNavbar />

      {/* Search Bar */}
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search for products...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          className='search-input'
        />
      </div>

      {/* Welcome Message */}
      <div className='flex-1 flex items-center justify-center'>
        <h1 className='text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text'>
          Welcome to Product Page
        </h1>
      </div>

      {/* Product Cards */}
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found</p> // Show this message if no product matches search query
        ) : (
          filteredProducts.map((product) => (
            <div key={product._id} className="product-card"> {/* Use _id for unique keys */}
              <img
                src={product.image} // Assuming the image URL is stored correctly
                alt={product.productName}
                className="product-image"
              />
              <h2>{product.productName}</h2>
              <p>{product.companyName}</p>
              <p>Price: ${product.sellingPrice}</p> {/* Adjust to show selling price */}

              {/* Buy Now Button */}
              <button className="buy-button">Buy Now</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
