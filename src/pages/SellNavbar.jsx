// src/components/SellNavbar.jsx

import React, { useState, useEffect } from 'react';
import { useAuthStore } from "../store/authStore";
import { useNavigate } from 'react-router-dom';
import logo from './logo1.jpeg';

const fullText = "Upload your product and sell easily";

const SellNavbar = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const typingSpeed = 75;
    const deletingSpeed = 100;
    const delayBetweenCycles = 1500;

    if (isTyping) {
      if (textIndex < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, textIndex + 1));
          setTextIndex(textIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setIsTyping(false), delayBetweenCycles);
      }
    } else {
      if (textIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, textIndex - 1));
          setTextIndex(textIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setIsTyping(true), delayBetweenCycles);
      }
    }
  }, [textIndex, isTyping]);

  const handleLogout = () => {
    logout();
    console.log("User logged out");
  };

  const handleProductPageClick = () => {
    navigate('/ProductPage');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 flex justify-between items-center shadow-lg z-50">
      <div className="flex items-center">
        <img src={logo} alt="Website Logo" className="h-10 mr-3" />
        <span className="text-green-400 text-xl font-bold overflow-hidden whitespace-nowrap border-r-2 border-orange-500 pr-2">
          {displayedText}
        </span>
      </div>

      <ul className="flex space-x-6 text-white text-lg">
        <li>
          <button className="hover:text-green-400" onClick={handleProductPageClick}>
            Product Page
          </button>
        </li>
        <li>
          <button className="hover:text-green-400" onClick={handleProfileClick}>
            Profile
          </button>
        </li>
        <li>
          <button className="hover:text-green-400" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SellNavbar;
