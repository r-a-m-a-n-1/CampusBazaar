import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ProductPage from "./pages/ProductPage";
import SellPage from "./pages/SellPage";
import AboutPage from "./pages/AboutPage";
import AmazingFeaturePage from "./pages/AmazingFeaturesPages";
import LoadingSpinner from "./components/LoadingSpinner";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { ProductProvider } from "./store/productStore";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!user.isVerified) return <Navigate to="/verify-email" replace />;
  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user.isVerified) return <Navigate to="/products" replace />;
  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex flex-col items-center relative overflow-hidden">
      {location.pathname !== '/login' &&
       location.pathname !== '/signup' &&
       location.pathname !== '/forgot-password' &&
       !location.pathname.startsWith('/reset-password/') && 
       <Navbar />}

      <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
      <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
      <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />

      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <SignUpPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <LoginPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
          <Route
            path="/forgot-password"
            element={
              <RedirectAuthenticatedUser>
                <ForgotPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <RedirectAuthenticatedUser>
                <ResetPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/ProductPage"
            element={
              <ProtectedRoute>
                <ProductPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sell"
            element={
              <ProtectedRoute>
                <SellPage />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<AboutPage />} /> {/* Add AboutPage Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Add sections for Amazing Features and About */}
        {location.pathname === '/' && (
          <>
            {/* Amazing Features Section */}
            <div id="amazing-feature" className="w-full h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative">
              <FloatingShape color="bg-green-500" size="w-64 h-64" top="-10%" left="5%" delay={0} />
              <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
              <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />
              <AmazingFeaturePage />
            </div>

            {/* About Section */}
            <div id="about" className="w-full h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative">
              <FloatingShape color="bg-green-500" size="w-64 h-64" top="-10%" left="5%" delay={0} />
              <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
              <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />
              <AboutPage />
            </div>
          </>
        )}
      </ProductProvider>
      <Toaster />
    </div>
  );
}

export default App;



// import React, { useEffect } from "react";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import FloatingShape from "./components/FloatingShape";
// import Navbar from "./pages/Navbar";
// import HomePage from "./pages/HomePage";
// import SignUpPage from "./pages/SignUpPage";
// import LoginPage from "./pages/LoginPage";
// import EmailVerificationPage from "./pages/EmailVerificationPage";
// import DashboardPage from "./pages/DashboardPage";
// import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import ResetPasswordPage from "./pages/ResetPasswordPage";
// import ProductPage from "./pages/ProductPage";
// import SellPage from "./pages/SellPage";
// import AboutPage from "./pages/AboutPage";
// import AmazingFeaturePage from "./pages/AmazingFeaturesPages";
// import LoadingSpinner from "./components/LoadingSpinner";
// import { Toaster } from "react-hot-toast";
// import { useAuthStore } from "./store/authStore";
// import { ProductProvider } from "./store/productStore";
// import ProfilePage from "./pages/ProfilePage"; // Import ProfilePage

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, user } = useAuthStore();
//   if (!isAuthenticated) return <Navigate to="/login" replace />;
//   if (!user.isVerified) return <Navigate to="/verify-email" replace />;
//   return children;
// };

// const RedirectAuthenticatedUser = ({ children }) => {
//   const { isAuthenticated, user } = useAuthStore();
//   if (isAuthenticated && user.isVerified) return <Navigate to="/products" replace />;
//   return children;
// };

// function App() {
//   const { isCheckingAuth, checkAuth } = useAuthStore();
//   const location = useLocation();

//   useEffect(() => {
//     checkAuth();
//   }, [checkAuth]);

//   if (isCheckingAuth) return <LoadingSpinner />;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex flex-col items-center relative overflow-hidden">
//       {location.pathname !== '/login' &&
//        location.pathname !== '/signup' &&
//        location.pathname !== '/forgot-password' &&
//        !location.pathname.startsWith('/reset-password/') && 
//        <Navbar />}

//       <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
//       <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
//       <Toaster position="top-right" />
//       <ProductProvider>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/signup" element={<RedirectAuthenticatedUser><SignUpPage /></RedirectAuthenticatedUser>} />
//           <Route path="/login" element={<RedirectAuthenticatedUser><LoginPage /></RedirectAuthenticatedUser>} />
//           <Route path="/verify-email" element={<EmailVerificationPage />} />
//           <Route path="/products" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
//           <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
//           <Route path="/sell" element={<ProtectedRoute><SellPage /></ProtectedRoute>} />
//           <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
//           <Route path="/amazing-features" element={<ProtectedRoute><AmazingFeaturePage /></ProtectedRoute>} />
//           <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//           <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
//           <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} /> {/* Add Profile route */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </ProductProvider>
//     </div>
//   );
// }

// export default App;
