// import logo from './logo.svg';
// import './App.css';
// import LoginScreen from './components/LoginScreen';

// function App() {
//   return (
//    <LoginScreen/>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from './components/CartPage';
import Plan from './components/PlanScreen';
import SelectPlans from './components/selectPlan';
import LoginScreen from './components/LoginScreen';
import ManageScreen from './components/ManageScreen';

export default function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/SelectPlans" element={<SelectPlans />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/Plan" element={<Plan />} />
           <Route path="/ManageScreen" element={<ManageScreen />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}
