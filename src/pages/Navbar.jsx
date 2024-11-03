import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import logo from './logo1.jpeg';  // Ensure you have the logo in your project folder

const fullText = "Welcome to the IIITA Campus Bazaar";  // Text to animate

function Navbar() {
  const [displayedText, setDisplayedText] = useState("");  // State for typing effect
  const [isTyping, setIsTyping] = useState(true);  // Track typing or deleting
  const [textIndex, setTextIndex] = useState(0);  // Index of text being displayed

  useEffect(() => {
    const typingSpeed = 75;  // Speed for typing characters
    const deletingSpeed = 100;  // Speed for deleting characters
    const delayBetweenCycles = 1500;  // Delay between typing and deleting

    if (isTyping) {
      if (textIndex < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, textIndex + 1));  // Incrementally show text
          setTextIndex(textIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setIsTyping(false), delayBetweenCycles);  // Start deleting after typing
      }
    } else {
      if (textIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, textIndex - 1));  // Incrementally remove text
          setTextIndex(textIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setIsTyping(true), delayBetweenCycles);  // Restart typing after deleting
      }
    }
  }, [textIndex, isTyping]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 px-4 py-3 flex justify-between items-center shadow-md z-50">
      {/* Logo and animated text section */}
      <div className="flex items-center">
        {/* Updated logo size */}
        <img src={logo} alt="Website Logo" className="h-16 w-16 object-cover rounded-full mr-4" />  {/* Increased size */}
        <span className="text-green-500 text-xl font-semibold overflow-hidden whitespace-nowrap border-r-2 border-yellow-500 pr-2 animate-typing">
          {displayedText}  {/* Text with typing effect in green */}
        </span>
      </div>
      {/* Navigation links */}
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <Link 
            to="/" 
            className="nav-link text-gray-300 hover:text-green-500 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="nav-link text-gray-300 hover:text-green-500 transition-colors duration-200">
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/login" 
            className="nav-link text-gray-300 hover:text-green-500 transition-colors duration-200">
            Login
          </Link>
        </li>
        <li>
          <Link 
            to="/signup" 
            className="nav-link text-gray-300 hover:text-green-500 transition-colors duration-200">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
