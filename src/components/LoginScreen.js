import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate('/SelectPlans');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col md:flex-row items-center justify-center p-4"
      style={{ backgroundImage: `url('/images/background_image.jpg')` }}
    >
      {/* Logo */}
      <img
        src="/images/logo.jpg"
        alt="Logo"
        className="absolute top-6 left-6 w-40 md:w-64 h-auto"
      />

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mt-20 md:mt-0">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/images/login_screen_image.webp"
            alt="Login Illustration"
            className="w-64 md:w-96 h-auto"
          />
        </div>

        {/* Right Side Login Form */}
        <div
          className="w-full md:w-1/2 bg-cover bg-center p-4 rounded-2xl"
          style={{ backgroundImage: `url('/images/background.jpg')` }}
        >
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto border border-gray-300">
            <h2 className="text-4xl md:text-5xl text-center mb-6 font-caveat text-[#f8a825]">
              Welcome
            </h2>

            {/* Google Login */}
            <button className="w-full text-gray-400 py-2 rounded-md mb-6 transition border border-gray-300">
              Login with Google
            </button>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-grow h-px bg-gray-400"></div>
              <p className="text-sm md:text-base text-gray-400 whitespace-nowrap">OR LOGIN WITH USERNAME</p>
              <div className="flex-grow h-px bg-gray-400"></div>
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-400">Username/Email</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1 text-gray-400">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f8a825]"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#f8a825]" />
                <p className="text-sm text-gray-400">Keep me logged in</p>
              </div>
              <p className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer">
                Forgot Password?
              </p>
            </div>

            {/* Login Button */}
            <div className="flex justify-center mt-6">
              <button
                className="bg-[#f8a825] text-white py-2 px-16 rounded-full hover:brightness-110 transition"
                onClick={handleNavigateToCart}
              >
                Login
              </button>
            </div>
          </div>

          {/* Help Text */}
          <div className="text-center mt-4 text-sm text-white">
            <p>Need Help?</p>
            <p>
              <span className="text-gray-800">You are not a member?</span>{' '}
              <span className="text-white underline cursor-pointer">Register</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
