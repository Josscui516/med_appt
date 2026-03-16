// Import necessary modules from React library
import React from 'react';

// Import routing components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import InstantConsultation from './Components/Instant_Consultation/InstantConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileForm/ProfileForm'
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

// Main App component
function App() {

  return (
    <div className="App">

      <BrowserRouter>

        {/* Navbar will appear on all pages */}
        <Navbar/>

        {/* Notification wrapper */}
        <Notification>

          <Routes>

            {/* Landing page */}
            <Route path="/" element={<Landing_Page />} />

            {/* Signup page */}
            <Route path="/signup" element={<Sign_Up />} />

            {/* Login page */}
            <Route path="/login" element={<Login />} />

            {/* Instant consultation */}
            <Route path="/instant-consultation" element={<InstantConsultation />} />

            <Route path="/reviews" element={<ReviewForm />} />

            <Route path="/profile" element={<ProfileForm />} />

            <Route path="/reports" element={<ReportsLayout />} />

          </Routes>

        </Notification>

      </BrowserRouter>

    </div>
  );
}

export default App;