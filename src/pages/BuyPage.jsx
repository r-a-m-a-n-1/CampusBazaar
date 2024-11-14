// // src/pages/BuyPage.jsx
// import React from 'react';
// import { useLocation } from 'react-router-dom'; // For accessing the passed product
// import { useAuthStore } from '../store/authStore'; // Assuming this store has user details

// const BuyPage = () => {
//   const location = useLocation(); // Get the state passed from ProductPage
//   const { product } = location.state || {}; // Extract product data
//   const { user } = useAuthStore(); // Get the logged-in user details

//   return (
//     <div className="buy-page mt-[80px] px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Product Image */}
//         <div className="text-center mb-6">
//           <img
//             src={product?.image}
//             alt={product?.productName}
//             className="w-full h-96 object-cover rounded-lg shadow-md"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-2xl font-semibold">{product?.productName}</h2>
//           <p className="text-lg text-gray-600">Company: {product?.companyName}</p>
//           <p className="text-lg line-through text-gray-500">MRP: ₹{product?.originalPrice}</p>
//           <p className="text-green-500 text-xl">₹{product?.sellingPrice}</p>
//         </div>

//         {/* Product Description */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h3 className="text-xl font-semibold">Product Description</h3>
//           <p className="text-gray-700 mt-4">{product?.description}</p>
//         </div>

//         {/* User Details */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold">Your Details</h3>
//           <p>Name: {user?.name}</p>
//           <p>Email: {user?.email}</p>
//           <div className="mt-4">
//             <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyPage;


// src/pages/BuyPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom'; // For accessing the passed product
import { useAuthStore } from '../store/authStore'; // Assuming this store has user details

const BuyPage = () => {
  const location = useLocation(); // Get the state passed from ProductPage
  const { product } = location.state || {}; // Extract product data
  const { user } = useAuthStore(); // Get the logged-in user details

  if (!product) {
    return <div className="text-center mt-10">Product not found.</div>; // If no product is passed, show a message
  }

  return (
    <div className="buy-page mt-[80px] px-8">
      <div className="max-w-4xl mx-auto">
        {/* Product Image */}
        <div className="text-center mb-6">
          <img
            src={product?.image}
            alt={product?.productName}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold">{product?.productName}</h2>
          <p className="text-lg text-gray-600">Company: {product?.companyName}</p>
          <p className="text-lg line-through text-gray-500">MRP: ₹{product?.originalPrice}</p>
          <p className="text-green-500 text-xl">₹{product?.sellingPrice}</p>
        </div>

        {/* Product Description */}
        {product?.description && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold">Product Description</h3>
            <p className="text-gray-700 mt-4">{product?.description}</p>
          </div>
        )}

        {/* User Details */}
        {user && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Your Details</h3>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <div className="mt-4">
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyPage;
