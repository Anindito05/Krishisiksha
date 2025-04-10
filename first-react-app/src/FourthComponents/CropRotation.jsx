import React from "react";
import { useNavigate } from "react-router-dom";
import './FarmingTechniques.css';  // Shared CSS

const CropRotation = () => {
  const navigate = useNavigate();

  return (
    <div className="technique-container">
      <header className="technique-header">
        <h1>Crop Rotation</h1>
        <p>Maintain soil health with diverse cropping systems</p>
      </header>

      <section className="technique-description">
        <p>
          Crop rotation involves planting different crops in the same field over successive seasons. This helps reduce soil depletion, control pests, and increase crop diversity, leading to healthier soil and higher yields.
        </p>
      </section>

      <section className="technique-benefits">
        <h3>Benefits of Crop Rotation</h3>
        <ul>
          <li>Improved soil health and fertility</li>
          <li>Reduced risk of pest and disease buildup</li>
          <li>Better nutrient cycling</li>
          <li>Higher overall crop yield</li>
        </ul>
      </section>

      <section className="technique-guides">
        <h3>Resources and Guides</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">
              Crop Rotation: Video Guide
            </a>
          </li>
          <li>
            <a href="https://www.example.com/guide" target="_blank" rel="noopener noreferrer">
              Crop Rotation Best Practices
            </a>
          </li>
        </ul>
      </section>

      <footer className="technique-footer">
        <button onClick={() => navigate("/modern-farming")}>Back to Farming Techniques</button>
      </footer>
    </div>
  );
};

export default CropRotation;
