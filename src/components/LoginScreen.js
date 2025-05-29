import React from 'react';

export default function LoginScreen() {
  return (

    <>
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/background_image.jpg')` }}
    >
{/* left side section */}
{/* logo image top left corner */}
        <img
          src="/images/logo.jpg"
          alt="Logo"
          className="absolute top-12 left-12 w-64 h-auto"
        />



<div className='flex ml-64 '>

 <img
          src="/images/login_screen_image.webp"
          alt="Logo"
          className="w-[400] h-[400px] mt-48"
        />
{/* left img */}
 {/* right side section */}
      <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >

        <div className='-ml-64'>

        
      <div className="bg-white  p-8 rounded-2xl shadow-xl w-[400px] border border-gray-300">
      <h2 className="text-5xl  text-center mb-6 font-caveat text-[#f8a825]">
  Welcome
</h2>

        {/* Login with Google */}
        <button className="w-full  text-gray-400 py-2 rounded-md mb-6 transition border border-gray-300">
          Login with Google
        </button>

<div className="flex items-center gap-4 my-6">
  <div className="flex-grow h-px bg-gray-400"></div>
  <p className="text-base text-gray-400 whitespace-nowrap">OR LOGIN WITH USERNAME</p>
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
<div className="flex justify-between items-center mt-4">
  <div className="flex items-center gap-2">
    <input type="checkbox" className="accent-[#f8a825]" />
    <p className="text-sm font-normal text-gray-400">Keep me logged in</p>
  </div>
  <p className="text-sm font-normal text-gray-400 cursor-pointer hover:text-gray-600 transition">
    Forgot Password?
  </p>
</div>

      
<div className="flex justify-center mt-4">
  <button className="bg-[#f8a825] text-white py-2 px-20 rounded-full hover:brightness-110 transition">
    Login
  </button>
</div>

       
      </div>

      <div className="py-4">
        <p className='text-white'>Need Help?</p>
        <p><span className='text-gray-800'>You are not a member?</span><span className='text-white'> Register</span></p>
      </div>
      </div>
    </div>

</div>

   
    </div>

    </>
  );
}
