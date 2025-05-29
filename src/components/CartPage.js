
// import React from 'react';

// const Cart = () => {
//     return (
//         <div className=" bg-gray-100 flex items-center justify-center p-4 h-auto ">
//             <div
//                 className="bg-white rounded-3xl shadow-lg w-full max-w-full h-screen p-6 relative overflow-hidden"
//                 style={{
//                     backgroundImage: "url('/bgimage.jpg')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     backgroundRepeat: "no-repeat",
//                 }}
//             >


//                 <div className="absolute inset-0 bg-white bg-opacity-90 rounded-3xl z-0"></div>
//                 <div className="relative z-10">
//                     <div className="flex items-center mb-4">
//                         <img src="/logoimage.jpg" alt="NexScholars" className="h-10 mr-3" />
//                     </div>
//                     <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">My Cart</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
//                         <div className="col-span-3 h-full border border-text-gray-800 rounded-lg ">
//                             <table className="w-full text-sm  rounded-lg overflow-hidden border   h-full min-h-[300px]">
//                                 <thead>
//                                     <tr className="bg-[#f8a825] text-white ">
//                                         <th className="p-3 border ">Subject</th>
//                                         <th className="p-3 border ">Class</th>
//                                         <th className="p-3 border ">Plan</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr className="  text-gray-800  ">
//                                         <td className="p-3 border ">Mathematics</td>
//                                         <td className="p-3 border ">9th Standard</td>
//                                         <td className="p-3 border ">300 Students, 5000 Questions & monthly 72 tests.</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>

//                         {/* Summary Table - spans 1 column */}
//                         <div className="col-span-1  border border-text-gray-800  rounded-lg ">
//                             <table className="w-full text-sm  rounded-lg overflow-hidden border border-orange-300 ">
//                                 <thead >
//                                     <tr className="bg-[#f8a825] text-white ">
//                                         <th className="p-3 border " colSpan={2}>Summary</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td className="p-2 border ">Price</td>
//                                         <td className="p-2 border  text-right">₹999/-</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="p-2 border ">Sub Total</td>
//                                         <td className="p-2 border  text-right">₹999/-</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="p-2 border ">Taxes</td>
//                                         <td className="p-2 border  text-right">₹90/-</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="p-2 border ">Coupon</td>
//                                         <td className="p-2 border  text-right">₹0/-</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="p-2 border ">Discount</td>
//                                         <td className="p-2 border  text-right">₹0/-</td>
//                                     </tr>
//                                     <tr className="font-bold">
//                                         <td className="p-2 border ">Total</td>
//                                         <td className="p-2 border  text-right">₹1089/-</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>



//                     {/* Payment & Checkout Section */}
//                     <div className="grid md:grid-cols-3 mt-6 gap-6 items-center">
//                         {/* Payment Methods */}
//                         <div>
//                             <h3 className="font-semibold mb-2">Payment Method</h3>
//                             <div className="flex gap-2">
//                                 <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
//                                 <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" className="h-6" />
//                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kzUiVCWLePrNZUFz_brP2GAhAZK_Hklh-S5Y8Xs86xCF9g80FQKsrzoeRQCKQJIZABU&usqp=CAU" alt="NetBanking" className="h-6" />
//                                 <img src="https://www.citypng.com/public/uploads/preview/hd-maestro-card-payment-logo-png-701751694777716wcwggm4tqe.png" alt="maestra " className="h-6" />

//                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dhBZE7nT5mncfOMynupq4104jqpdqIHN1w&s" alt="PhonePe" className="h-6" />
//                             </div>
//                         </div>

//                         {/* Checkout Button */}
//                         <div className="flex justify-center">
//                             <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-full shadow-md mt-4 md:mt-0">
//                                 Checkout
//                             </button>
//                         </div>

//                         {/* Illustration Image */}
//                         <div className="flex justify-center">
//                             <img src="/login_screen_image.webp" alt="Illustration" className="w-28" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;


import React from 'react';

const Cart = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4  min-h-screen">
      <div
        className="bg-white rounded-3xl shadow-lg w-full  h-screen p-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/bgimage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90 rounded-3xl z-0"></div>

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <img src="/logoimage.jpg" alt="NexScholars" className="h-10 mr-3" />
          </div>

          {/* Title */}
          <h2 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-6">
            My Cart
          </h2>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Cart Table */}
            <div className="col-span-3 border  rounded-lg overflow-x-auto">
              <table className="w-full text-sm min-w-[600px] border">
                <thead>
                  <tr className="bg-[#f8a825] text-white">
                    <th className="p-3 border">Subject</th>
                    <th className="p-3 border">Class</th>
                    <th className="p-3 border">Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-800">
                    <td className="p-3 border">Mathematics</td>
                    <td className="p-3 border">9th Standard</td>
                    <td className="p-3 border">
                      300 Students, 5000 Questions & monthly 72 tests.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary Table */}
            <div className="col-span-1 border  rounded-lg overflow-x-auto">
              <table className="w-full text-sm min-w-[280px] border">
                <thead>
                  <tr className="bg-[#f8a825] text-white">
                    <th className="p-3 border" colSpan={2}>
                      Summary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Price</td>
                    <td className="p-2 border text-right">₹999/-</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Sub Total</td>
                    <td className="p-2 border text-right">₹999/-</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Taxes</td>
                    <td className="p-2 border text-right">₹90/-</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Coupon</td>
                    <td className="p-2 border text-right">₹0/-</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Discount</td>
                    <td className="p-2 border text-right">₹0/-</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="p-2 border">Total</td>
                    <td className="p-2 border text-right">₹1089/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment & Checkout */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-4 items-center">
            {/* Payment Icons */}
            <div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">
                Payment Method
              </h3>
              <div className="flex flex-wrap gap-2">
                <img
                  src="https://img.icons8.com/color/48/000000/visa.png"
                  alt="Visa"
                  className="h-6"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  alt="Mastercard"
                  className="h-6"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kzUiVCWLePrNZUFz_brP2GAhAZK_Hklh-S5Y8Xs86xCF9g80FQKsrzoeRQCKQJIZABU&usqp=CAU"
                  alt="NetBanking"
                  className="h-6"
                />
                <img
                  src="https://www.citypng.com/public/uploads/preview/hd-maestro-card-payment-logo-png-701751694777716wcwggm4tqe.png"
                  alt="Maestro"
                  className="h-6"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dhBZE7nT5mncfOMynupq4104jqpdqIHN1w&s"
                  alt="PhonePe"
                  className="h-6"
                />
              </div>
            </div>

            {/* Checkout Button */}
            <div className="flex justify-center">
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-full shadow-md">
                Checkout
              </button>
            </div>

            {/* Illustration Image */}
            <div className="flex justify-center">
              <img
                src="/login_screen_image.webp"
                alt="Illustration"
                className="w-24 md:w-28"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
