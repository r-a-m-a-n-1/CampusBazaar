
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthStore } from '../store/authStore';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTags, faThList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo1.jpeg';
// import defaultProfileImage from './profilePic.png'; // Default image

// // Function to generate a random color based on the first letter of the user's name
// const getColorFromName = (name) => {
//     const colors = [
//         'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500',
//         'bg-pink-500', 'bg-teal-500', 'bg-indigo-500', 'bg-gray-500', 'bg-orange-500'
//     ];
//     const firstLetter = name.charAt(0).toUpperCase();
//     const index = firstLetter.charCodeAt(0) % colors.length;
//     return colors[index];
// };

// const ProductNavbar = () => {
//     const { logout, user } = useAuthStore();
//     const navigate = useNavigate();
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const handleLogout = () => {
//         logout();
//         navigate('/login');
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const closeDropdown = () => {
//         setDropdownOpen(false);
//     };

//     return (
//         <nav className="fixed top-0 left-0 w-full bg-gray-900 py-3 px-4 flex justify-between items-center z-50">
//             <div className="flex items-center">
//                 <img src={logo} alt="Website Logo" className="h-10 mr-3" />
//             </div>
//             <ul className="flex space-x-6 text-white text-lg items-center">
//                 <li>
//                     <button onClick={() => navigate('/sell')} className="hover:text-green-400 flex items-center space-x-2">
//                         <FontAwesomeIcon icon={faTags} />
//                         <span>Sell</span>
//                     </button>
//                 </li>
//                 <li>
//                     <button onClick={() => console.log('Categories clicked')} className="hover:text-green-400 flex items-center space-x-2">
//                         <FontAwesomeIcon icon={faThList} />
//                         <span>Categories</span>
//                     </button>
//                 </li>
//                 <li>
//                     <button onClick={handleLogout} className="hover:text-green-400 flex items-center space-x-2">
//                         <FontAwesomeIcon icon={faSignOutAlt} />
//                         <span>Logout</span>
//                     </button>
//                 </li>
//                 <li className="relative">
//                     {/* Profile circle with image or initials */}
//                     <button
//                         onClick={toggleDropdown}
//                         className="flex flex-col items-center cursor-pointer"
//                     >
//                         <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold text-lg ${user.profileImage ? '' : getColorFromName(user.name)}`}>
//                             {/* Render profile image if available, otherwise show the first letter of the name */}
//                             {user.profileImage ? (
//                                 <img
//                                     src={user.profileImage || defaultProfileImage}
//                                     alt="Profile"
//                                     className="w-12 h-12 rounded-full object-cover"
//                                 />
//                             ) : (
//                                 <span>{user.name.charAt(0).toUpperCase()}</span> // Show first letter of name
//                             )}
//                         </div>
//                         {/* User Name Below Profile Circle */}
//                         {user.name && <span className="text-sm text-white mt-2">{user.name}</span>}
//                     </button>
//                     {/* Dropdown menu */}
//                     {dropdownOpen && (
//                         <div
//                             className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg py-2"
//                             onMouseLeave={closeDropdown} // Close dropdown on mouse leave
//                         >
//                             <button
//                                 onClick={() => {
//                                     closeDropdown();
//                                     navigate('/viewprofile');
//                                 }}
//                                 className="block px-4 py-2 w-full text-left hover:bg-gray-200"
//                             >
//                                 View Profile
//                             </button>
//                             <button
//                                 onClick={() => {
//                                     closeDropdown();
//                                     navigate('/profile');
//                                 }}
//                                 className="block px-4 py-2 w-full text-left hover:bg-gray-200"
//                             >
//                                 Edit Profile
//                             </button>
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default ProductNavbar;


// chag

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthStore } from '../store/authStore';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTags, faThList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo1.jpeg';
// import defaultProfileImage from './profilePic.png';

// const getColorFromName = (name) => {
//     const colors = [
//         'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500',
//         'bg-pink-500', 'bg-teal-500', 'bg-indigo-500', 'bg-gray-500', 'bg-orange-500'
//     ];
//     const firstLetter = name.charAt(0).toUpperCase();
//     const index = firstLetter.charCodeAt(0) % colors.length;
//     return colors[index];
// };

// const ProductPageNavbar = ({ searchQuery, setSearchQuery }) => {
//     const { logout, user } = useAuthStore();
//     const navigate = useNavigate();
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const handleLogout = () => {
//         logout();
//         navigate('/login');
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const closeDropdown = () => {
//         setDropdownOpen(false);
//     };

//     return (
//         <nav className="fixed top-0 left-0 w-full bg-gray-900 py-3 px-6 flex justify-between items-center z-50">
//             <div className="flex items-center">
//                 <img src={logo} alt="Website Logo" className="h-10 mr-3" />
//             </div>
//             {/* Search Bar in Navbar */}
//             <div className="flex-1 mx-4 flex justify-center">
//                 <input
//                     type="text"
//                     placeholder="Search for products..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-80 md:w-[22rem] lg:w-[24rem] px-4 py-2 rounded-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 ml-6"
//                 />
//             </div>
//             <ul className="flex space-x-6 text-white text-lg items-center">
//                 <li>
//                     <button onClick={() => navigate('/sell')} className="hover:text-green-400 flex items-center space-x-2">
//                         <FontAwesomeIcon icon={faTags} />
//                         <span>Sell</span>
//                     </button>
//                 </li>
//                 <li>
//                     <button onClick={() => console.log('Categories clicked')} className="hover:text-green-400 flex items-center space-x-2">
//                         <FontAwesomeIcon icon={faThList} />
//                         <span>Categories</span>
//                     </button>
//                 </li>
//                 <li>
//                     <button onClick={handleLogout} className="hover:text-green-400 flex items-center space-x-2">
//                         <FontAwesomeIcon icon={faSignOutAlt} />
//                         <span>Logout</span>
//                     </button>
//                 </li>
//                 <li className="relative">
//                     <button onClick={toggleDropdown} className="flex flex-col items-center cursor-pointer">
//                         <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold text-lg ${user.profileImage ? '' : getColorFromName(user.name)}`}>
//                             {user.profileImage ? (
//                                 <img src={user.profileImage || defaultProfileImage} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
//                             ) : (
//                                 <span>{user.name.charAt(0).toUpperCase()}</span>
//                             )}
//                         </div>
//                         {user.name && <span className="text-sm text-white mt-2">{user.name}</span>}
//                     </button>
//                     {dropdownOpen && (
//                         <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg py-2" onMouseLeave={closeDropdown}>
//                             <button onClick={() => { closeDropdown(); navigate('/viewprofile'); }} className="block px-4 py-2 w-full text-left hover:bg-gray-200">View Profile</button>
//                             <button onClick={() => { closeDropdown(); navigate('/profile'); }} className="block px-4 py-2 w-full text-left hover:bg-gray-200">Edit Profile</button>
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default ProductPageNavbar;


// lll

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faThList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './logo1.jpeg';
import defaultProfileImage from './profilePic.png';

const getColorFromName = (name) => {
    const colors = [
        'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500',
        'bg-pink-500', 'bg-teal-500', 'bg-indigo-500', 'bg-gray-500', 'bg-orange-500'
    ];
    const firstLetter = name.charAt(0).toUpperCase();
    const index = firstLetter.charCodeAt(0) % colors.length;
    return colors[index];
};

const ProductPageNavbar = ({ searchQuery, setSearchQuery, setSelectedCategory }) => {
    const { logout, user } = useAuthStore();
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

    const categories = [
        "Bucket", "Mattress", "SmartPhone", "Books", "Notes", "Bottle", "Coller", "Data Cable", 
        "Chair", "Table", "Electrical appliances", "Stove", "Laptop", "Mouse", "Keyboard", "Other"
    ];

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleCategoryDropdown = () => {
        setCategoryDropdownOpen(!categoryDropdownOpen);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // This function should be passed down from the parent component to filter products by category
        setCategoryDropdownOpen(false); // Close the dropdown after selecting a category
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 py-3 px-6 flex justify-between items-center z-50">
            <div className="flex items-center">
                <img src={logo} alt="Website Logo" className="h-10 mr-3" />
            </div>
            {/* Search Bar in Navbar */}
            <div className="flex-1 mx-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-80 md:w-[22rem] lg:w-[24rem] px-4 py-2 rounded-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 ml-6"
                />
            </div>
            <ul className="flex space-x-6 text-white text-lg items-center">
                <li>
                    <button onClick={() => navigate('/sell')} className="hover:text-green-400 flex items-center space-x-2">
                        <FontAwesomeIcon icon={faTags} />
                        <span>Sell</span>
                    </button>
                </li>
                <li className="relative">
                    <button onClick={toggleCategoryDropdown} className="hover:text-green-400 flex items-center space-x-2">
                        <FontAwesomeIcon icon={faThList} />
                        <span>Categories</span>
                    </button>
                    {categoryDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg py-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategorySelect(category)}
                                    className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}
                </li>
                <li>
                    <button onClick={handleLogout} className="hover:text-green-400 flex items-center space-x-2">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span>Logout</span>
                    </button>
                </li>
                <li className="relative">
                    <button onClick={toggleDropdown} className="flex flex-col items-center cursor-pointer">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold text-lg ${user.profileImage ? '' : getColorFromName(user.name)}`}>
                            {user.profileImage ? (
                                <img src={user.profileImage || defaultProfileImage} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                            ) : (
                                <span>{user.name.charAt(0).toUpperCase()}</span>
                            )}
                        </div>
                        {user.name && <span className="text-sm text-white mt-2">{user.name}</span>}
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg py-2" onMouseLeave={closeDropdown}>
                            <button onClick={() => { closeDropdown(); navigate('/viewprofile'); }} className="block px-4 py-2 w-full text-left hover:bg-gray-200">View Profile</button>
                            <button onClick={() => { closeDropdown(); navigate('/profile'); }} className="block px-4 py-2 w-full text-left hover:bg-gray-200">Edit Profile</button>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default ProductPageNavbar;
