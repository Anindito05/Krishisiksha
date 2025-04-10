import React from "react";
import "./ModernFarming.css";
import { useNavigate } from "react-router-dom";

const crops = [
  { name: "Wheat / गेहूं / গম", emoji: "🌾", route: "Wheat" },
  { name: "Paddy / धान / ধান", emoji: "🌾", route: "Paddy" },
  { name: "Soya / सोया / সয়া", emoji: "🌱", route: "Soya" },
  { name: "Tomato / टमाटर / টমেটো", emoji: "🍅", route: "Tomato" },
  { name: "Maize / मक्का / ভুট্টা", emoji: "🌽", route: "Maize" },
  { name: "Sugarcane / गन्ना / আখ", emoji: "🥤", route: "Sugarcane" },
  { name: "Potato / आलू / আলু", emoji: "🥔", route: "Potato" },
  { name: "Onion / प्याज / পেঁয়াজ", emoji: "🧅", route: "Onion" },
  { name: "Cotton / कपास / তুলা", emoji: "🧵", route: "Cotton" },
  { name: "Mustard / सरसों / সরিষা", emoji: "🌼", route: "Mustard" },
  { name: "Barley / जौ / যব", emoji: "🌾", route: "Barley" },
  { name: "Millet / बाजरा / বাজরা", emoji: "🌾", route: "Millet" },
];

function ModernFarming() {
  const navigate = useNavigate();

  const handleCropClick = (crop) => {
    navigate(`/details/${crop.route}`);
  };

  return (
    <div className="modern-farming-container">
      <div className="crops-grid">
        {crops.map((crop, index) => (
          <div
            key={index}
            className="crop-card"
            onClick={() => handleCropClick(crop)}
          >
            <span role="img" aria-label={crop.name}>
              {crop.emoji}
            </span>{" "}
            {crop.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModernFarming;
