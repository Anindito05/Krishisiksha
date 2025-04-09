import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import LandingPage from "./LandingPage";
import Login from "./FirstComponents/Login";
import Register from "./FirstComponents/RegisterFile";
import Dashboard from "./FirstComponents/Dashboard";
import ModernFarming from "./SecondComponents/ModernFarming";

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

  const handleGetStarted = () => navigate("/modern-farming");
  const handleLoginClick = () => navigate("/login");
  const handleRegisterClick = () => navigate("/register");
  const handleBack = () => navigate("/");

  return (
    <Routes>
      <Route path="/" element={<LandingPage onGetStarted={handleGetStarted} onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />} />
      <Route path="/login" element={<Login onLogin={handleLogin} onBack={handleBack} />} />
      <Route path="/register" element={<Register onBack={handleBack} />} />
      <Route path="/dashboard" element={<Dashboard user={user} onLogout={handleLogout} />} />
      <Route path="/modern-farming" element={<ModernFarming />} />
    </Routes>
  );
}

export default AppWrapper;
