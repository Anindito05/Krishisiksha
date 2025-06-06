import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Core Pages
import LandingPage from "./LandingPage";
import Login from "./FirstComponents/Login";
import Register from "./FirstComponents/RegisterFile";
import Dashboard from "./FirstComponents/Dashboard";

// Section Pages
import Farming from "./SecondComponents/Farming";
import DigitalLiteracy from "./SecondComponents/DigitalLiteracy";
import ModernFarming from "./SecondComponents/ModernFarming";
import Ent from "./SecondComponents/Ent"; 

// Crop Detail Pages (Details)
import Wheat from "./Details/Wheat";
import Paddy from "./Details/Paddy";
import Soya from "./Details/Soya";
import Tomato from "./Details/Tomato";
import Maize from "./Details/Maize";
import Sugarcane from "./Details/Sugarcane";
import Potato from "./Details/Potato";
import Onion from "./Details/Onion";
import Cotton from "./Details/Cotton";
import Mustard from "./Details/Mustard";
import Barley from "./Details/Barley";
import Millet from "./Details/Millet";

// Digital Literacy Subpages (ThirdComponents)
import Govt from "./ThirdComponents/Govt";
import Pvt from "./ThirdComponents/Pvt";
import Ven from "./ThirdComponents/Ven";
import Oth from "./ThirdComponents/Oth";
import Price from "./ThirdComponents/Price";

// Modern Farming Technique Details (FourthComponents)
import SmartIrrigation from "./FourthComponents/SmartIrrigation";
import CropRotation from "./FourthComponents/CropRotation";
import SoilHealth from "./FourthComponents/SoilHealthManagement";
import PrecisionFarming from "./FourthComponents/PrecisionFarming";

// Floating Chat Popup (Tawk.to)
import ChatPopup from './SecondComponents/ChatPopup';

function AppWrapper() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (username) => {
    setUser(username);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const handleGetStarted = () => navigate("/farming");
  const handleLoginClick = () => navigate("/login");
  const handleRegisterClick = () => navigate("/register");
  const handleBack = () => navigate("/");

  return (
    <>
      {/* Floating Tawk.to Chat Widget (globally available) */}
      <ChatPopup />

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <LandingPage
              onGetStarted={handleGetStarted}
              onLoginClick={handleLoginClick}
              onRegisterClick={handleRegisterClick}
            />
          }
        />

        {/* Authentication */}
        <Route path="/login" element={<Login onLogin={handleLogin} onBack={handleBack} />} />
        <Route path="/register" element={<Register onBack={handleBack} />} />
        <Route path="/dashboard" element={<Dashboard user={user} onLogout={handleLogout} />} />

        {/* Main Sections */}
        <Route path="/farming" element={<Farming />} />
        <Route path="/digital-literacy" element={<DigitalLiteracy />} />
        <Route path="/modern-farming" element={<ModernFarming />} />  
        <Route path="/ent" element={<Ent />} />
        {/* Crop Detail Pages */}
        <Route path="/details/Wheat" element={<Wheat />} />
        <Route path="/details/Paddy" element={<Paddy />} />
        <Route path="/details/Soya" element={<Soya />} />
        <Route path="/details/Tomato" element={<Tomato />} />
        <Route path="/details/Maize" element={<Maize />} />
        <Route path="/details/Sugarcane" element={<Sugarcane />} />
        <Route path="/details/Potato" element={<Potato />} />
        <Route path="/details/Onion" element={<Onion />} />
        <Route path="/details/Cotton" element={<Cotton />} />
        <Route path="/details/Mustard" element={<Mustard />} />
        <Route path="/details/Barley" element={<Barley />} />
        <Route path="/details/Millet" element={<Millet />} />

        {/* Digital Literacy Subpages */}
        <Route path="/govt" element={<Govt />} />
        <Route path="/pvt" element={<Pvt />} />
        <Route path="/ven" element={<Ven />} />
        <Route path="/oth" element={<Oth />} />
        <Route path="/price" element={<Price />} />

        {/* Modern Farming Technique Pages */}
        <Route path="/technique/smart-irrigation" element={<SmartIrrigation />} />
        <Route path="/technique/crop-rotation" element={<CropRotation />} />
        <Route path="/technique/soil-health" element={<SoilHealth />} />
        <Route path="/technique/precision-farming" element={<PrecisionFarming />} />
      </Routes>
    </>
  );
}

export default AppWrapper;
