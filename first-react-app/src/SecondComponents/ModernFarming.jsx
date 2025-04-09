import React from "react";
import "./ModernFarming.css";
import { useNavigate } from "react-router-dom";

const crops= ["Wheat", "Paddy", "Soya", "Tomato", "Maize", "Sugarcane", "Potato", "Onion", "Cotton", "Mustard", "Barley", "Millet"];
function ModernFarming() {
  const navigate = useNavigate();

  const handleCropClick = (crop) => {
    navigate(`/crop/${crop.toLowerCase()}`);
  };

  return (
    <div className="modern-farming-container">
      <h2>Choose a Crop to Learn More</h2>
      <div className="crops-grid">
        {crops.map((crop, index) => (
          <div
            key={index}
            className="crop-card"
            onClick={() => handleCropClick(crop)}
          >
            {crop}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModernFarming;
