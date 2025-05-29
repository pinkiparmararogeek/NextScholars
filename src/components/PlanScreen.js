

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const plans = [
//   { class: '9th Standard', subject: 'Biology', exam: 'JEE', students: '250 / 300', questions: '3100 / 5000', tests: '72 / 72' },
//   { class: '8th Standard', subject: 'Mathematics', exam: 'JEE', students: '50 / 100', questions: '750 / 1000', tests: '30 / 36' },
//   { class: '10th Standard', subject: 'Chemistry', exam: 'NEET', students: '200 / 300', questions: '2500 / 5000', tests: '72 / 72' },
//   { class: '8th Standard', subject: 'Mathematics', exam: 'JEE', students: '750 / 1000', questions: '11000 / 15000', tests: '—' },
//   { class: '9th Standard', subject: 'Biology', exam: 'NEET', students: '75 / 100', questions: '800 / 1000', tests: '36 / 36' },
//   { class: '9th Standard', subject: 'Mathematics', exam: 'NEET', students: '250 / 1000', questions: '7500 / 15000', tests: '—' },
// ];
// export default function PlansTable() {
//   const navigate = useNavigate();

//   const handleNavigateToCart = () => {
//     navigate('/ManageScreen');
//   };
//   return (
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

//      <div className="absolute inset-0 bg-white bg-opacity-90 rounded-3xl pointer-events-none"></div>
 
//     <div className="relative ">
//       <div className="flex items-center mb-">
//         <img src="/logoimage.jpg" alt="NexScholars" className="h-10 mr-3" />
//       </div>
//       <h2 className="text-center text-2xl font-bold mb-4">My Plans</h2>
//       <table
//   className="w-full text-sm text-left border rounded-lg overflow-hidden  bg-opacity-70 backdrop-blur-sm"
// >

//         <thead className="bg-[#f8a825] text-white">
//           <tr>
//             <th className="px-4 py-2">Class</th>
//             <th className="px-4 py-2">Subject</th>
//             <th className="px-4 py-2">Exam</th>
//             <th className="px-4 py-2">Students</th>
//             <th className="px-4 py-2">Questions</th>
//             <th className="px-4 py-2">Tests</th>
//             <th className="px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {plans.map((plan, index) => (
//             <tr key={index} className="">
//               <td className="px-4 py-2">{plan.class}</td>
//               <td className="px-4 py-2">{plan.subject}</td>
//               <td className="px-4 py-2">{plan.exam}</td>
//               <td className="px-4 py-2">{plan.students}</td>
//               <td className="px-4 py-2">
//                 <span className={parseInt(plan.questions.split("/")[0]) < parseInt(plan.questions.split("/")[1]) ? 'text-orange-500 font-semibold' : ''}>
//                   {plan.questions}
//                 </span>
//               </td>
//               <td className="px-4 py-2">
//                 <span className={plan.tests !== '—' && plan.tests.split("/")[0] === plan.tests.split("/")[1] ? 'text-red-500 font-semibold' : ''}>
//                   {plan.tests}
//                 </span>
//               </td>
//               <td className="px-4 py-2">
//                 <button className="bg-[#f8a825] text-white px-3 py-1 rounded hover:bg-orange-500 text-xs" onClick={handleNavigateToCart}>Manage</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

 
//       <div className="flex justify-between items-center mt-6">
//         <button className="text-lg">«</button>
//         <button className="text-lg">»</button>
//       </div>
//        <div className="flex justify-end">
//   <img src="login_screen_image.webp" alt="illustration" className="h-24" />
// </div>

//     </div>


//   </div>
// </div>

//   );
// }



import React from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
  { class: '9th Standard', subject: 'Biology', exam: 'JEE', students: '250 / 300', questions: '3100 / 5000', tests: '72 / 72' },
  { class: '8th Standard', subject: 'Mathematics', exam: 'JEE', students: '50 / 100', questions: '750 / 1000', tests: '30 / 36' },
  { class: '10th Standard', subject: 'Chemistry', exam: 'NEET', students: '200 / 300', questions: '2500 / 5000', tests: '72 / 72' },
  { class: '8th Standard', subject: 'Mathematics', exam: 'JEE', students: '750 / 1000', questions: '11000 / 15000', tests: '—' },
  { class: '9th Standard', subject: 'Biology', exam: 'NEET', students: '75 / 100', questions: '800 / 1000', tests: '36 / 36' },
  { class: '9th Standard', subject: 'Mathematics', exam: 'NEET', students: '250 / 1000', questions: '7500 / 15000', tests: '—' },
];

export default function PlansTable() {
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate('/ManageScreen');
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4 min-h-screen">
      <div
        className="bg-white rounded-3xl shadow-lg w-full p-6 h-screen relative overflow-hidden"
        style={{
          backgroundImage: "url('/bgimage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90 rounded-3xl pointer-events-none"></div>

        <div className="relative">
          <div className="flex items-center mb-4">
            <img src="/logoimage.jpg" alt="NexScholars" className="h-10 mr-3" />
          </div>
          <h2 className="text-center text-2xl font-bold mb-4">My Plans</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border rounded-lg overflow-hidden bg-opacity-70 backdrop-blur-sm">
              <thead className="bg-[#f8a825] text-white">
                <tr>
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Exam</th>
                  <th className="px-4 py-2">Students</th>
                  <th className="px-4 py-2">Questions</th>
                  <th className="px-4 py-2">Tests</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{plan.class}</td>
                    <td className="px-4 py-2">{plan.subject}</td>
                    <td className="px-4 py-2">{plan.exam}</td>
                    <td className="px-4 py-2">{plan.students}</td>
                    <td className="px-4 py-2">
                      <span className={parseInt(plan.questions.split("/")[0]) < parseInt(plan.questions.split("/")[1]) ? 'text-orange-500 font-semibold' : ''}>
                        {plan.questions}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className={plan.tests !== '—' && plan.tests.split("/")[0] === plan.tests.split("/")[1] ? 'text-red-500 font-semibold' : ''}>
                        {plan.tests}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <button className="bg-[#f8a825] text-white px-3 py-1 rounded hover:bg-orange-500 text-xs" onClick={handleNavigateToCart}>
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-lg">«</button>
            <button className="text-lg">»</button>
          </div>

          <div className="flex justify-end mt-4">
            <img src="/login_screen_image.webp" alt="illustration" className="h-24" />
          </div>
        </div>
      </div>
    </div>
  );
}
