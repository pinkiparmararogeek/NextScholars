import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SelectPlans() {
  const [selectedPlan, setSelectedPlan] = useState('Plan-2');
  const [subject, setSubject] = useState('');
  const [selectedClass, setSelectedClass] = useState('');


  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate('/plan');
  };

  return (

//    <div className=" bg-gray-100 flex items-center justify-center p-4 h-auto ">
//       <div
//         className="bg-white rounded-3xl shadow-lg w-full max-w-full h-screen p-6 relative overflow-hidden"
//         style={{
//           backgroundImage: "url('/bgimage.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >

//     <div className="absolute inset-0 bg-white bg-opacity-90 rounded-3xl pointer-events-none"></div>
//     <div className="relative flex w-full">
//       <div className="w-1/2 pr-6">
//         <div className="flex items-center mb-6">
//           <img src="/logoimage.jpg" alt="NexScholars" className="h-10 mr-3" />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Subject</label>
//           <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md">
//             <option value="">Select</option>
//             <option value="Mathematics">Mathematics</option>
//             <option value="Biology">Biology</option>
//           </select>
//         </div>
//         <div className="mb-6">
//           <label className="block mb-1 font-medium">Class</label>
//           <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md">
//             <option value="">Select</option>
//             <option value="8th Standard">8th Standard</option>
//             <option value="9th Standard">9th Standard</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="bg-[#f8a825] text-white px-12 py-1 rounded-full hover:bg-orange-500 block mx-auto"
//           onClick={handleNavigateToCart}
//         >
//           Submit
//         </button>
//       </div>

//       <div className="w-px bg-gray-300 mx-6"></div>

//       <div className="w-auto ">
//         <h2 className="text-xl font-bold mb-6">Select Plans</h2>
//         <div className="space-y-4">
//           <label className="flex items-start space-x-2">
//             <input type="radio" name="plan" value="Plan-1" checked={selectedPlan === 'Plan-1'} onChange={() => setSelectedPlan('Plan-1')} className="mt-1" />
//             <span>
//               <strong>Rs-499/-</strong> — 100 Students, 1000 Questions and Monthly 36 tests.
//             </span>
//           </label>
//           <label className="flex items-start space-x-2">
//             <input type="radio" name="plan" value="Plan-2" checked={selectedPlan === 'Plan-2'} onChange={() => setSelectedPlan('Plan-2')} className="mt-1" />
//             <span>
//               <strong>Rs-999/-</strong> — 300 Students, 5000 Questions and Monthly 72 tests.
//             </span>
//           </label>
//           <label className="flex items-start space-x-2">
//             <input type="radio" name="plan" value="Plan-3" checked={selectedPlan === 'Plan-3'} onChange={() => setSelectedPlan('Plan-3')} className="mt-1" />
//             <span>
//               <strong>Rs-1499/-</strong> — 1000 Students, 15000 Questions and Monthly unlimited tests.
//             </span>
//           </label>
//         </div>
//           <div className=" bottom-6 ml-72  mt-12 ">
//     <img src="/login_screen_image.webp" alt="illustration" className="h-24" />
//   </div>
//       </div>
//     </div>

//   </div>
 
// </div>


<div className="bg-gray-100 flex items-center justify-center p-4 min-h-screen">
  <div
    className="bg-white rounded-3xl shadow-lg w-full   h-screen p-6 relative overflow-hidden"
    style={{
      backgroundImage: "url('/bgimage.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0 bg-white bg-opacity-90 rounded-3xl pointer-events-none"></div>

    <div className="relative flex flex-col lg:flex-row w-full">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
        <div className="flex items-center mb-6">
          <img src="/logoimage.jpg" alt="NexScholars" className="h-10 mr-3" />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Subject</label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md">
            <option value="">Select</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Biology">Biology</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Class</label>
          <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md">
            <option value="">Select</option>
            <option value="8th Standard">8th Standard</option>
            <option value="9th Standard">9th Standard</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#f8a825] text-white px-12 py-1 rounded-full hover:bg-orange-500 block mx-auto"
          onClick={handleNavigateToCart}
        >
          Submit
        </button>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px bg-gray-300 mx-6"></div>

      {/* Right Column */}
      <div className="w-full lg:w-auto">
        <h2 className="text-xl font-bold mb-6">Select Plans</h2>
        <div className="space-y-4">
          <label className="flex items-start space-x-2">
            <input type="radio" name="plan" value="Plan-1" checked={selectedPlan === 'Plan-1'} onChange={() => setSelectedPlan('Plan-1')} className="mt-1" />
            <span>
              <strong>Rs-499/-</strong> — 100 Students, 1000 Questions and Monthly 36 tests.
            </span>
          </label>
          <label className="flex items-start space-x-2">
            <input type="radio" name="plan" value="Plan-2" checked={selectedPlan === 'Plan-2'} onChange={() => setSelectedPlan('Plan-2')} className="mt-1" />
            <span>
              <strong>Rs-999/-</strong> — 300 Students, 5000 Questions and Monthly 72 tests.
            </span>
          </label>
          <label className="flex items-start space-x-2">
            <input type="radio" name="plan" value="Plan-3" checked={selectedPlan === 'Plan-3'} onChange={() => setSelectedPlan('Plan-3')} className="mt-1" />
            <span>
              <strong>Rs-1499/-</strong> — 1000 Students, 15000 Questions and Monthly unlimited tests.
            </span>
          </label>
        </div>
        <div className="mt-12 flex justify-center lg:justify-start">
          <img src="/login_screen_image.webp" alt="illustration" className="h-24" />
        </div>
      </div>
    </div>
  </div>
</div>


  );
}