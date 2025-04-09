import React from "react";
import "./ModernFarming.css";
import { useNavigate } from "react-router-dom";

const crops = [
  { emoji: "🌾", eng: "Wheat", hin: "गेहूं", ben: "গম" },
  { emoji: "🌾", eng: "Barley", hin: "जौ", ben: "যব" },
  { emoji: "🌱", eng: "Paddy", hin: "धान", ben: "ধান" },
  { emoji: "🌿", eng: "Soya", hin: "सोया", ben: "সয়াবিন" },
  { emoji: "🍅", eng: "Tomato", hin: "टमाटर", ben: "টমেটো" },
  { emoji: "🌽", eng: "Maize", hin: "मक्का", ben: "ভুট্টা" },
  { emoji: "🍬", eng: "Sugarcane", hin: "गन्ना", ben: "আখ" },
  { emoji: "🥔", eng: "Potato", hin: "आलू", ben: "আলু" },
  { emoji: "🧅", eng: "Onion", hin: "प्याज", ben: "পেঁয়াজ" },
  { emoji: "🧵", eng: "Cotton", hin: "कपास", ben: "তুলা" },
  { emoji: "🌻", eng: "Mustard", hin: "सरसों", ben: "সরিষা" },
  { emoji: "🥜", eng: "Groundnut", hin: "मूंगफली", ben: "চিনা বাদাম" },
];

function ModernFarming() {
  const navigate = useNavigate();

  const handleCropClick = (cropEngName) => {
    navigate(`/crop/${cropEngName.toLowerCase()}`);
  };

  return (
    <div className="modern-farming-container">
      <h2>Choose a Crop to Learn More</h2>
      <div className="crops-grid">
        {crops.map((crop, index) => (
          <div
            key={index}
            className="crop-card"
            onClick={() => handleCropClick(crop.eng)}
          >
            <span className="emoji">{crop.emoji}</span>
            <span className="crop-name">
              {crop.eng} / {crop.hin} / {crop.ben}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModernFarming;
