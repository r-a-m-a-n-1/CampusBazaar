// src/pages/SellPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/productStore'; 
import SellNavbar from './SellNavbar'; 

const SellPage = () => {
  const { fetchProducts } = useProductStore();
  const [product, setProduct] = useState({
    productName: '',
    companyName: '',
    originalPrice: '',
    sellingPrice: '',
    image: null,
  });
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct({ 
      ...product, 
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (product.originalPrice <= 0 || product.sellingPrice <= 0) {
      alert('Price values must be greater than zero.');
      return;
    }

    setLoading(true); // Set loading state to true

    const formData = new FormData();
    formData.append('productName', product.productName);
    formData.append('companyName', product.companyName);
    formData.append('originalPrice', product.originalPrice);
    formData.append('sellingPrice', product.sellingPrice);
    formData.append('image', product.image);

    try {
      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('Product added successfully!');
        fetchProducts(); // Refresh product list after adding new product
        setProduct({ productName: '', companyName: '', originalPrice: '', sellingPrice: '', image: null }); // Reset form
        navigate('/ProductPage'); // Redirect to ProductPage
      } else {
        const errorData = await res.json();
        alert(`Failed to add product: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the product.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <SellNavbar />
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Add a New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
              Product Name
            </label>
            <input 
              type="text" 
              name="productName" 
              value={product.productName} 
              onChange={handleChange} 
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
              Company Name
            </label>
            <input 
              type="text" 
              name="companyName" 
              value={product.companyName} 
              onChange={handleChange} 
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter company name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="originalPrice">
              Original Price
            </label>
            <input 
              type="number" 
              name="originalPrice" 
              value={product.originalPrice} 
              onChange={handleChange} 
              required
              min="0"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter original price"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellingPrice">
              Selling Price
            </label>
            <input 
              type="number" 
              name="sellingPrice" 
              value={product.sellingPrice} 
              onChange={handleChange} 
              required
              min="0"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter selling price"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Upload Image
            </label>
            <input 
              type="file" 
              name="image" 
              onChange={handleChange} 
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
              type="submit" 
              disabled={loading} // Disable button while loading
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? 'Adding...' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellPage;
