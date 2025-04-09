import React from "react";
import { useNavigate } from "react-router-dom";
import "../ThirdComponents/Third.css"; 
const DigitalLiteracy = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="geo-card" onClick={() => navigate("/govt")}>
        <h2>Government Digital Literacy Schemes</h2>
        <p>Explore government-backed initiatives for rural digital awareness</p>
      </div>

      <div className="geo-card" onClick={() => navigate("/pvt")}>
        <h2>Private Initiatives</h2>
        <p>See how private companies are contributing to digital literacy</p>
      </div>

      <div className="geo-card" onClick={() => navigate("/ven")}>
        <h2>Farmer-Vendor Connection</h2>
        <p>Learn how to connect digitally with agri-product vendors</p>
      </div>

      <div className="geo-card" onClick={() => navigate("/oth")}>
        <h2>Digital Safety, Delivery & Payment Guide for Rural Farmers</h2>
        <p>Digital safety, strong password practices, and payment awareness</p>
      </div>

      <div className="geo-card" onClick={() => navigate("/price")}>
        <h2>Current Crop Prices & Markets</h2>
        <p>Track latest mandi prices and tips to sell smartly</p>
      </div>
    </div>
  );
};

export default DigitalLiteracy;
