import React from "react";
import logoSupport from './free_Support.png'; // Logo for Free Support
import logoTransactions from './student_2.png'; // Logo for Student to Student Transactions
import logoSafety from './stay_safe.png'; // Logo for Stay Safe

const AmazingFeaturePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      {/* Updated Heading with inline styles */}
      <h1 style={{ marginTop: "50px", fontSize: "2.5rem", color: "#38a169" }} className="font-bold mb-2">Amazing Features</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Free Support */}
        <div
          className="bg-gradient-to-br from-green-300 to-green-400 text-white shadow-lg rounded-lg text-center border border-gray-200 p-8 transition-transform duration-300 transform hover:scale-105"
          style={{
            lineHeight: "1.42857143",
            color: "#ffffff",
            fontSize: "100%",
            fontFamily: "'Poppins', sans-serif",
            maxWidth: "19.75rem",
            cursor: "pointer",
            animationDuration: "1s",
            animationName: "fadeInDown",
            padding: "30px",
            position: "relative",
            zIndex: 10,
            marginBottom: "3.125rem",
            height: "350px", // Increased height
          }}
        >
          <img src={logoSupport} alt="Free Support Logo" className="w-24 h-24 mx-auto mb-4" />
          <h5 className="text-xl font-semibold mb-2">Free Support</h5>
          <p>
            Our app is easy to use, but if you’re having trouble send us an email or watch our YouTube tutorial on how to buy and sell.
          </p>
        </div>

        {/* Card 2: Student to Student Transactions */}
        <div
          className="bg-gradient-to-br from-green-300 to-green-400 text-white shadow-lg rounded-lg text-center border border-gray-200 p-8 transition-transform duration-300 transform hover:scale-105"
          style={{
            lineHeight: "1.42857143",
            color: "#ffffff",
            fontSize: "100%",
            fontFamily: "'Poppins', sans-serif",
            maxWidth: "19.75rem",
            cursor: "pointer",
            animationDuration: "1s",
            animationName: "fadeInDown",
            padding: "30px",
            position: "relative",
            zIndex: 10,
            marginBottom: "3.125rem",
            height: "350px", // Increased height
          }}
        >
          <img src={logoTransactions} alt="Student to Student Transactions Logo" className="w-24 h-24 mx-auto mb-4" />
          <h5 className="text-xl font-semibold mb-2">Student to Student Transactions</h5>
          <p>
            Transactions are student to student, direct and by the payment method of your choice as agreed between the two parties.
          </p>
        </div>

        {/* Card 3: Stay Safe */}
        <div
          className="bg-gradient-to-br from-green-300 to-green-400 text-white shadow-lg rounded-lg text-center border border-gray-200 p-8 transition-transform duration-300 transform hover:scale-105"
          style={{
            lineHeight: "1.42857143",
            color: "#ffffff",
            fontSize: "100%",
            fontFamily: "'Poppins', sans-serif",
            maxWidth: "19.75rem",
            cursor: "pointer",
            animationDuration: "1s",
            animationName: "fadeInDown",
            padding: "30px",
            position: "relative",
            zIndex: 10,
            marginBottom: "3.125rem",
            height: "350px", // Increased height
          }}
        >
          <img src={logoSafety} alt="Stay Safe Logo" className="w-24 h-24 mx-auto mb-4" />
          <h5 className="text-xl font-semibold mb-2">Stay Safe</h5>
          <p>
            For the safety and well-being of all students, be sure you meet in a public place to transact sales, and confirm that you have a cell phone number and email address before meeting!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmazingFeaturePage;
