import React from 'react';
import './Home.css';  // Custom styles for animation
import backgroundImage from './home_wal.jpeg';  // Background image for the home page

function HomePage() {
  return (
    <div className="home">  {/* Use the .home class to apply styles */}
      <div className="welcome-text text-6xl font-bold z-10">
        Welcome to Campus Bazaar
      </div>
      <div className="arrow-container absolute bottom-10 flex flex-col items-center z-20">
        <div className="arrow arrow-big"></div>
        <div className="arrow arrow-medium"></div>
        <div className="arrow arrow-small"></div>
      </div>
      {/* Scroll to AmazingFeaturesPage */}
      <a href="#amazing-feature" className="scroll-down-text"></a>
    </div>
  );
}

export default HomePage;
