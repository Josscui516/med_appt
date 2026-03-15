// Import necessary modules from React library
import React from 'react';

// Import routing components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Sign_up from "./Components/Sign_Up/Sign_up";
import Login from "./Components/Login/Login";

// Main App component
function App() {

  return (
    <div className="App">

      <BrowserRouter>

        {/* Navbar will appear on all pages */}
        <Navbar/>

        <Routes>

          {/* Landing page */}
          <Route path="/" element={<Landing_Page />} />

          {/* Signup page */}
          <Route path="/signup" element={<Sign_up />} />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;