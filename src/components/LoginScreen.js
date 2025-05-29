
import React from 'react';
export default function LoginScreen() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('/images/background_image.jpg')` }}
    >
      {/* Logo Top Left */}
      <img
        src="/images/logo.jpg"
        alt="Logo"
        className="absolute top-6 left-6 w-32 md:w-48"
      />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-4 md:px-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <img
            src="/images/login_screen_image.webp"
            alt="Login visual"
            className="w-72 md:w-96 h-auto mt-16"
          />
        </div>

        {/* Right Form Section */}
        <div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-cover bg-center py-10 px-4 md:px-8"
          style={{ backgroundImage: "url('/images/background.jpg')" }}
        >
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-300">
            <h2 className="text-4xl md:text-5xl text-center mb-6 font-caveat text-[#f8a825]">
              Welcome
            </h2>

            <button className="w-full text-gray-400 py-2 rounded-md mb-6 transition border border-gray-300">
              Login with Google
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-grow h-px bg-gray-400" />
              <p className="text-sm text-gray-400 text-center whitespace-nowrap">
                OR LOG IN WITH USERNAME
              </p>
              <div className="flex-grow h-px bg-gray-400" />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Username/Email
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f8a825]"
                placeholder="Enter your password"
              />
            </div>

            {/* Options */}
            <div className="flex justify-between items-center mt-2 mb-6">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-[#f8a825]" />
                Keep me logged in
              </label>
              <p className="text-sm text-gray-600 hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>

            {/* Login Button */}
            <div className="flex justify-center">
              <button className="bg-[#f8a825] text-white text-base font-medium py-2 px-10 rounded-full hover:brightness-110 transition">
                Login
              </button>
            </div>
          </div>

         {/* Help & Register Section */}
<div className="mt-6 w-full max-w-md">
  <div className="text-white text-base font-medium ">
    <p>Need Help?</p>
    <p>
      <span className="text-gray-800">You are not a member?</span>
      <span className="text-white ml-1 cursor-pointer hover:underline">Register</span>
    </p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
