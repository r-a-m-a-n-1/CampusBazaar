import React from 'react';
import { motion } from 'framer-motion';
import { AiFillHeart } from 'react-icons/ai'; // Heart icon
import { FaCopyright } from 'react-icons/fa'; // Copyright icon
import { FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa'; // Instagram, WhatsApp, Telegram icons

const AboutPage = () => {
  return (
    <div
      className='min-h-screen flex flex-col justify-between'
      style={{
        backgroundImage: 'url(/path-to-your-background-image.jpg)', // Use the same background image as in LoginPage
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl p-8 rounded-xl shadow-xl mx-auto my-12"
      >
        {/* About Us Content */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text"
        >
          About Campus Bazaar
        </motion.h1>

        <div className="text-left text-lg text-white leading-relaxed">
          <p className="mb-4">
            At the beginning and end of the school year, the end of every semester, and any time you feel like you have “stuff to sell,” Campus Bazaar makes it easy to transact within a closed community.
          </p>
          <p className="mb-4">
            Many online sales sites require that you scour hundreds of pages of photos for items located across town or across the country – Campus Bazaar puts you in touch with students on your own campus, so nothing has to be shipped, and sales can take place the same day!
          </p>
          <p className="mb-4">
            It’s as easy as shooting a photo with your iPhone, naming your price, and uploading it! Check the app often to see if there’s a book, lacrosse stick, hoodie, jacket, headphones, mini-fridge, or sofa for your dorm room at a great price! Then, text the seller and make an offer. Meet somewhere safe on campus and buy using cash, Venmo, or the payment method of your choice.
          </p>
          <p className="mb-4 font-semibold">
            Be sure to CHECK THE MERCHANDISE before you agree to buy! Campus Bazaar is not responsible for any item bought or sold. All transactions are as agreed between two parties.
          </p>
          <p>
            Our goal is to put campus communities in touch. Think of it as a campus-wide group chat about what you want to buy and sell.
          </p>
        </div>
      </motion.div>

      {/* Full-Width Footer */}
      <footer className="w-screen bg-gray-900 py-6">
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center text-white space-x-2 mb-4">
            <p className="text-lg">Made with</p>
            <AiFillHeart className="text-red-600 text-2xl" /> {/* Heart icon */}
            <p className="text-lg">by TechTitanium Team</p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-600"
            >
              <FaInstagram className="text-3xl" /> {/* Instagram icon */}
            </a>
            <a
              href="https://chat.whatsapp.com/Jr8oe7VB3xe4miVsqYmcHo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500"
            >
              <FaWhatsapp className="text-3xl" /> {/* WhatsApp icon */}
            </a>
            <a
              href="https://www.telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaTelegram className="text-3xl" /> {/* Telegram icon */}
            </a>
          </div>

          {/* Copyright Info */}
          <div className="flex items-center text-white space-x-2 mt-4">
            <FaCopyright className="text-white text-md" /> {/* Copyright icon */}
            <p className="text-sm">2024 TechTitanium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
