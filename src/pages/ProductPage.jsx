// import React, { useState } from 'react';
// import { useProductStore } from '../store/productStore'; 
// import ProductNavbar from './ProductPageNavbar'; 
// import './ProductPage.css'; 

// const ProductPage = () => {
//   const { products } = useProductStore(); // Get products from context
//   const [searchQuery, setSearchQuery] = useState(''); // Add state for search query

//   // Filter products based on the search query
//   const filteredProducts = products.filter(product =>
//     product.productName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className='product-page'>
//       <ProductNavbar />

//       {/* Search Bar */}
//       <div className='search-bar'>
//         <input
//           type='text'
//           placeholder='Search for products...'
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)} // Update search query
//           className='search-input'
//         />
//       </div>

//       {/* Welcome Message */}
//       <div className='flex-1 flex items-center justify-center'>
//         <h1 className='text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text'>
//           Welcome to Product Page
//         </h1>
//       </div>

//       {/* Product Cards */}
//       <div className="product-grid">
//         {filteredProducts.length === 0 ? (
//           <p>No products found</p> // Show this message if no product matches search query
//         ) : (
//           filteredProducts.map((product) => (
//             <div key={product._id} className="product-card"> {/* Use _id for unique keys */}
//               <img
//                 src={product.image} // Assuming the image URL is stored correctly
//                 alt={product.productName}
//                 className="product-image"
//               />
//               <h2>{product.productName}</h2>
//               <p>{product.companyName}</p>
//               <p>Price: ${product.sellingPrice}</p> {/* Adjust to show selling price */}

//               {/* Buy Now Button */}
//               <button className="buy-button">Buy Now</button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
// import React, { useState } from 'react';
// import { useProductStore } from '../store/productStore';
// import ProductPageNavbar from './ProductPageNavbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as faHeartFilled, faHeartBroken } from '@fortawesome/free-solid-svg-icons'; // Import heart icons

// const ProductPage = () => {
//   const { products } = useProductStore();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [likedProducts, setLikedProducts] = useState(new Set()); // To store liked product IDs

//   // Filter products based on search query
//   const filteredProducts = products.filter((product) =>
//     product.productName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Toggle like status of the product
//   const toggleLike = (productId) => {
//     setLikedProducts((prevLikedProducts) => {
//       const updatedLikedProducts = new Set(prevLikedProducts);
//       if (updatedLikedProducts.has(productId)) {
//         updatedLikedProducts.delete(productId);
//       } else {
//         updatedLikedProducts.add(productId);
//       }
//       return updatedLikedProducts;
//     });
//   };

//   return (
//     <div className="product-page">
//       {/* Navbar */}
//       <ProductPageNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

//       {/* Main Content Area */}
//       <div className="mt-[80px] px-8">
//         {/* Check if no products are available */}
//         {products.length === 0 ? (
//           <div className="flex items-center justify-center min-h-screen text-3xl text-black">
//             <span role="img" aria-label="sad emoji" className="mr-4">😞</span>
//             <span>No products available</span>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//             {/* Check if no products match the search query */}
//             {filteredProducts.length === 0 ? (
//               <div className="flex items-center justify-center min-h-screen text-3xl text-black">
//                 <span role="img" aria-label="sad emoji" className="mr-4">😞</span>
//                 <span>No products found</span>
//               </div>
//             ) : (
//               filteredProducts.map((product) => (
//                 <div
//                   key={product._id}
//                   className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow relative"
//                 >
//                   {/* Heart Icon for Like Button */}
//                   <button
//                     className="absolute top-4 right-4 text-gray-600"
//                     onClick={() => toggleLike(product._id)}
//                   >
//                     <FontAwesomeIcon
//                       icon={likedProducts.has(product._id) ? faHeartFilled : faHeartBroken} // Filled heart when liked
//                       size="lg"
//                       className={`transition-all duration-300 ${likedProducts.has(product._id) ? 'text-red-500' : 'text-gray-500'}`}
//                     />
//                   </button>

//                   {/* Product Image */}
//                   <img
//                     src={product.image}
//                     alt={product.productName}
//                     className="w-full h-48 object-cover rounded-md mb-4"
//                   />
//                   <h2 className="font-semibold text-lg">{product.productName}</h2>
//                   <p className="line-through text-gray-500">MRP: ₹{product.originalPrice}</p>
//                   <p className="text-green-500">
//                     ₹{product.sellingPrice}
//                     <span className="text-red-500 ml-2">
//                       ({Math.round((product.originalPrice - product.sellingPrice) / product.originalPrice * 100)}% off)
//                     </span>
//                   </p>
//                   <p className="text-gray-600 text-sm mt-1">{product.description}</p>
//                   <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
//                     Buy Now
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


// lll

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
// import { useProductStore } from '../store/productStore';
// import ProductPageNavbar from './ProductPageNavbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as faHeartFilled, faHeartBroken } from '@fortawesome/free-solid-svg-icons'; // Import heart icons

// const ProductPage = () => {
//   const { products } = useProductStore();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [likedProducts, setLikedProducts] = useState(new Set());
//   const navigate = useNavigate(); // Initialize navigate function

//   // Filter products based on search query
//   const filteredProducts = products.filter((product) =>
//     product.productName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Toggle like status of the product
//   const toggleLike = (productId) => {
//     setLikedProducts((prevLikedProducts) => {
//       const updatedLikedProducts = new Set(prevLikedProducts);
//       if (updatedLikedProducts.has(productId)) {
//         updatedLikedProducts.delete(productId);
//       } else {
//         updatedLikedProducts.add(productId);
//       }
//       return updatedLikedProducts;
//     });
//   };

//   const handleBuyNow = (product) => {
//     // Navigate to BuyPage and pass the selected product as state
//     navigate('/buy', { state: { product } });
//   };

//   return (
//     <div className="product-page">
//       {/* Navbar */}
//       <ProductPageNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

//       {/* Main Content Area */}
//       <div className="mt-[80px] px-8">
//         {/* Check if no products are available */}
//         {products.length === 0 ? (
//           <div className="flex items-center justify-center min-h-screen text-3xl text-black">
//             <span role="img" aria-label="sad emoji" className="mr-4">😞</span>
//             <span>No products available</span>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//             {/* Check if no products match the search query */}
//             {filteredProducts.length === 0 ? (
//               <div className="flex items-center justify-center min-h-screen text-3xl text-black">
//                 <span role="img" aria-label="sad emoji" className="mr-4">😞</span>
//                 <span>No products found</span>
//               </div>
//             ) : (
//               filteredProducts.map((product) => (
//                 <div
//                   key={product._id}
//                   className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow relative"
//                 >
//                   {/* Heart Icon for Like Button */}
//                   <button
//                     className="absolute top-4 right-4 text-gray-600"
//                     onClick={() => toggleLike(product._id)}
//                   >
//                     <FontAwesomeIcon
//                       icon={likedProducts.has(product._id) ? faHeartFilled : faHeartBroken} // Filled heart when liked
//                       size="lg"
//                       className={`transition-all duration-300 ${likedProducts.has(product._id) ? 'text-red-500' : 'text-gray-500'}`}
//                     />
//                   </button>

//                   {/* Product Image */}
//                   <img
//                     src={product.image}
//                     alt={product.productName}
//                     className="w-full h-48 object-cover rounded-md mb-4"
//                   />
//                   <h2 className="font-semibold text-lg">{product.productName}</h2>
//                   <p className="line-through text-gray-500">MRP: ₹{product.originalPrice}</p>
//                   <p className="text-green-500">
//                     ₹{product.sellingPrice}
//                     <span className="text-red-500 ml-2">
//                       ({Math.round((product.originalPrice - product.sellingPrice) / product.originalPrice * 100)}% off)
//                     </span>
//                   </p>
//                   <p className="text-gray-600 text-sm mt-1">{product.description}</p>
//                   <button 
//                     className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
//                     onClick={() => handleBuyNow(product)} // On click, navigate to BuyPage
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { useProductStore } from '../store/productStore';
import ProductPageNavbar from './ProductPageNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartFilled, faHeartBroken } from '@fortawesome/free-solid-svg-icons'; // Import heart icons

const ProductPage = () => {
  const { products } = useProductStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [likedProducts, setLikedProducts] = useState(new Set());
  const navigate = useNavigate(); // Initialize navigate function

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle like status of the product
  const toggleLike = (productId) => {
    setLikedProducts((prevLikedProducts) => {
      const updatedLikedProducts = new Set(prevLikedProducts);
      if (updatedLikedProducts.has(productId)) {
        updatedLikedProducts.delete(productId);
      } else {
        updatedLikedProducts.add(productId);
      }
      return updatedLikedProducts;
    });
  };

  const handleBuyNow = (product) => {
    console.log('Product being passed to BuyPage:', product); // Log to verify
    // Navigate to BuyPage and pass the selected product as state
    navigate('/buy', { state: { product } });
  };

  return (
    <div className="product-page">
      {/* Navbar */}
      <ProductPageNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main Content Area */}
      <div className="mt-[80px] px-8">
        {/* Check if no products are available */}
        {products.length === 0 ? (
          <div className="flex items-center justify-center min-h-screen text-3xl text-black">
            <span role="img" aria-label="sad emoji" className="mr-4">😞</span>
            <span>No products available</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Check if no products match the search query */}
            {filteredProducts.length === 0 ? (
              <div className="flex items-center justify-center min-h-screen text-3xl text-black">
                <span role="img" aria-label="sad emoji" className="mr-4">😞</span>
                <span>No products found</span>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow relative"
                >
                  {/* Heart Icon for Like Button */}
                  <button
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={() => toggleLike(product._id)}
                  >
                    <FontAwesomeIcon
                      icon={likedProducts.has(product._id) ? faHeartFilled : faHeartBroken} // Filled heart when liked
                      size="lg"
                      className={`transition-all duration-300 ${likedProducts.has(product._id) ? 'text-red-500' : 'text-gray-500'}`}
                    />
                  </button>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="font-semibold text-lg">{product.productName}</h2>
                  <p className="line-through text-gray-500">MRP: ₹{product.originalPrice}</p>
                  <p className="text-green-500">
                    ₹{product.sellingPrice}
                    <span className="text-red-500 ml-2">
                      ({Math.round((product.originalPrice - product.sellingPrice) / product.originalPrice * 100)}% off)
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                  <button 
                    className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                    onClick={() => handleBuyNow(product)} // On click, navigate to BuyPage
                  >
                    Buy Now
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
