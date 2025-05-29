import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { PlusIcon } from '@heroicons/react/24/outline';
import TuneIcon from '@mui/icons-material/Tune';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
export default function ManageScreen() {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      {/* Background Image with Reduced Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/images/background_image.jpg')` }}
      ></div>


      {/* Logo top left */}
      <img
        src="/images/logo.jpg"
        alt="Logo"
        className="absolute top-8 left-64 w-32 md:w-48 z-10 "
      />

      {/* Manage text centered horizontally */}
      <p className="absolute top-8 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-gray-700 z-10">
        Manage
      </p>

      {/* Bottom Right Image */}
      <img
        src="/images/login_screen_image.webp"
        alt="Bottom Right"
        className="absolute bottom-6 right-6 w-24 md:w-64 z-10"
      />

      {/* Table Container */}



   <div className="xl:mx-40 lg:mx-32 md:mx-24 mx-8 flex justify-center items-center relative z-10 pt-32 px-4 sm:px-6 lg:px-8">
  <div className="bg-opacity-30  w-full ">

    {/* Info Row Styled Like a Table Row */}
    <div className="w-full border border-black border-b-0 rounded-t-lg overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 items-center text-sm sm:text-base font-semibold text-black px-3 sm:px-4 py-3">
        <span className="col-span-1">Biology</span>
        <span className="col-span-1">9th Standard JEE</span>
        <span className="col-span-1">250/3000 Students</span>
        <span className="col-span-1">2000/5000 Questions</span>
        <span className="col-span-1">75/100 Tests</span>
        <span className="col-span-1 flex justify-end">
          <button className="bg-[#f8a825] text-white px-3 py-1 rounded text-xs sm:text-sm hover:brightness-105 whitespace-nowrap">
            Upgrade
          </button>
        </span>
      </div>

      <div className="border border-t border-black grid grid-cols-1 sm:grid-cols-6 gap-4 items-center text-sm sm:text-base font-semibold text-black px-3 sm:px-4 py-3">

        {/* Filter Section */}
        <div className="flex items-center col-span-1 space-x-2 cursor-pointer select-none">
          <TuneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black hover:text-black" />
          <span>Filter</span>
        </div>

        {/* Add Question Section */}
        <div className="flex items-center col-span-1 space-x-2 cursor-pointer select-none">
          <PlusIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black hover:text-black" />
          <span>Add Question</span>
        </div>

        {/* Spacer */}
        <div className="col-span-2 hidden sm:block"></div>

        {/* Show Answer Toggle and Search Input */}
        <div className="flex items-center justify-start sm:justify-end col-span-2 space-x-4 sm:space-x-6">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[#f8a825] relative transition duration-200">
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-full"></div>
              </div>
            </label>
            <span>Show Answer</span>
          </div>

          <div className="relative max-w-xs w-full">
       <input
  type="text"
  placeholder="Search"
  className="w-full pr-10 px-3 py-1 border border-black rounded-full focus:outline-none focus:ring focus:ring-blue-200 text-sm sm:text-base bg-transparent"
/>

            <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>

    {/* Actual Table */}
    <table className="w-full text-center border-collapse border border-black ">
      <tbody>
        <tr className="block sm:table-row">
          {/* Question Section - 70% on md and above, full width on small */}
          <td className="block sm:table-cell w-full sm:w-[70%] p-3 border border-black text-left align-top">
            <p className="text-base sm:text-lg text-black-semibold">1. What is the powerhouse of the cell?</p>
            <div className="text-base sm:text-lg text-black-semibold mt-2 px-2 sm:px-4 space-y-1 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
              <p>A) Mitochondria</p>
              <p>B) Nucleus</p>
              <p>C) Chloroplast</p>
              <p>D) Ribosome</p>
            </div>
          </td>

          {/* Topic Section - 24% on md and above, full width on small */}
          <td className="block sm:table-cell w-full sm:w-[24%] p-3 border border-black left align-top space-y-3 mt-6 sm:mt-0">

            {/* Chapter */}
            <div className="px-4 py-1 text-black rounded-full border border-black cursor-pointer font-semibold hover:bg-blue-100 transition mx-auto block w-max">
              Chapter
            </div>

            {/* Topic Name */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-black mt-2 justify-center">
              {["Topic Name"].map((concept) => (
                <div
                  key={concept}
                  className="px-4 py-1 text-black rounded-full border border-black cursor-pointer font-medium hover:bg-blue-100 transition"
                >
                  {concept}
                </div>
              ))}
            </div>

            {/* Concepts */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-black mt-2 justify-center">
              {["concept-1", "concept-2", "concept-3"].map((concept) => (
                <div
                  key={concept}
                  className="px-4 py-1 text-black rounded-full border border-black cursor-pointer font-medium hover:bg-blue-100 transition"
                >
                  {concept}
                </div>
              ))}
            </div>
          </td>

          {/* Edit Icon - 6% on md and above, hidden and below question on small */}
          <td className="block sm:table-cell w-full sm:w-[6%] p-3 border border-black text-center mt-6 sm:mt-0">
            <PencilSquareIcon className="h-6 w-6 text-black cursor-pointer hover:text-black mx-auto" />
          </td>
        </tr>

            <tr className="block sm:table-row">
          {/* Question Section - 70% on md and above, full width on small */}
          <td className="block sm:table-cell w-full sm:w-[70%] p-3 border border-black text-left align-top">
            <p className="text-base sm:text-lg text-black font-semibold">2. What is the powerhouse of the cell?</p>
            <div className="text-base sm:text-lg text-black font-semibold mt-2 px-2 sm:px-4 space-y-1 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
              <p>A) Mitochondria</p>
              <p>B) Nucleus</p>
              <p>C) Chloroplast</p>
              <p>D) Ribosome</p>
            </div>
          </td>

          {/* Topic Section - 24% on md and above, full width on small */}
          <td className="block sm:table-cell w-full sm:w-[24%] p-3 border border-black text-left align-top space-y-3 mt-6 sm:mt-0">

            {/* Chapter */}
            <div className="px-4 py-1 text-black rounded-full border border-black cursor-pointer font-semibold hover:bg-blue-100 transition mx-auto block w-max">
              Chapter
            </div>

            {/* Topic Name */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-black mt-2 justify-center">
              {["Topic Name"].map((concept) => (
                <div
                  key={concept}
                  className="px-4 py-1 text-black rounded-full border border-black cursor-pointer font-medium hover:bg-blue-100 transition"
                >
                  {concept}
                </div>
              ))}
            </div>

            {/* Concepts */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-black mt-2 justify-center">
              {["concept-1", "concept-2", "concept-3"].map((concept) => (
                <div
                  key={concept}
                  className="px-4 py-1 text-black rounded-full border border-black cursor-pointer font-medium hover:bg-blue-100 transition"
                >
                  {concept}
                </div>
              ))}
            </div>
          </td>

          {/* Edit Icon - 6% on md and above, hidden and below question on small */}
          <td className="block sm:table-cell w-full sm:w-[6%] p-3 border border-black text-center mt-6 sm:mt-0">
            <PencilSquareIcon className="h-6 w-6 text-black cursor-pointer hover:text-black mx-auto" />
          </td>
        </tr>


            <tr className="block sm:table-row">
          {/* Question Section - 70% on md and above, full width on small */}
          <td className="block sm:table-cell w-full sm:w-[70%] p-3 border border-black text-left align-top">
            <p className="text-base sm:text-lg text-black font-semibold">3. What is the powerhouse of the cell?</p>
            <div className="text-base sm:text-lg text-black font-semibold mt-2 px-2 sm:px-4 space-y-1 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
              <p>A) Mitochondria</p>
              <p>B) Nucleus</p>
              <p>C) Chloroplast</p>
              <p>D) Ribosome</p>
            </div>
          </td>

          {/* Topic Section - 24% on md and above, full width on small */}
          <td className="block sm:table-cell w-full sm:w-[24%] p-3 border border-black text-left align-top space-y-3 mt-6 sm:mt-0">

            {/* Chapter */}
            <div className="px-4 py-1 text-black rounded-full border border-black cursor-pointer font-semibold hover:bg-blue-100 transition mx-auto block w-max">
              Chapter
            </div>

            {/* Topic Name */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-black mt-2 justify-center">
              {["Topic Name"].map((concept) => (
                <div
                  key={concept}
                  className="px-4 py-1 text-black rounded-full border border-black cursor-pointer font-medium hover:bg-blue-100 transition"
                >
                  {concept}
                </div>
              ))}
            </div>

            {/* Concepts */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-black mt-2 justify-center">
              {["concept-1", "concept-2", "concept-3"].map((concept) => (
                <div
                  key={concept}
                  className="px-4 py-1 text-black rounded-full border border-black cursor-pointer font-medium hover:bg-blue-100 transition"
                >
                  {concept}
                </div>
              ))}
            </div>
          </td>

          {/* Edit Icon - 6% on md and above, hidden and below question on small */}
          <td className="block sm:table-cell w-full sm:w-[6%] p-3 border border-black text-center mt-6 sm:mt-0">
            <PencilSquareIcon className="h-6 w-6 text-black cursor-pointer hover:text-black mx-auto" />
          </td>
        </tr>
      </tbody>
    </table>

  </div>
  
</div>

<div className="flex justify-between xl:mx-60 lg:mx-32 md:mx-24 mx-8 my-4">
<KeyboardDoubleArrowLeftIcon/>
<KeyboardDoubleArrowRightIcon/>
</div>


    </div>
  );
}
