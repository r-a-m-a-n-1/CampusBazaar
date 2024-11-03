import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from "../store/authStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faThList, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import icons
import logo from './logo1.jpeg';

const ProductNavbar = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        console.log("User logged out");
    };

    const handleSellClick = () => {
        navigate('/sell');
    };

    const handleProfileClick = () => {
        navigate('/profile'); // Navigate to profile page on profile icon click
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 flex justify-between items-center shadow-lg z-50">
            <div className="flex items-center">
                <img src={logo} alt="Website Logo" className="h-10 mr-3" />
            </div>

            <ul className="flex space-x-6 text-white text-lg">
                <li>
                    <button className="hover:text-green-400 flex items-center space-x-2" onClick={handleSellClick}>
                        <FontAwesomeIcon icon={faTags} />
                        <span>Sell</span>
                    </button>
                </li>
                <li>
                    <button className="hover:text-green-400 flex items-center space-x-2" onClick={() => console.log('Categories clicked')}>
                        <FontAwesomeIcon icon={faThList} />
                        <span>Categories</span>
                    </button>
                </li>
                <li>
                    <button className="hover:text-green-400 flex items-center space-x-2" onClick={handleProfileClick}>
                        <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
                        <span>Profile</span>
                    </button>
                </li>
                <li>
                    <button className="hover:text-green-400 flex items-center space-x-2" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span>Logout</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default ProductNavbar;
