import React from "react";
import { useNavigate } from "react-router-dom";
import './FarmingTechniques.css';  // Shared CSS

const PrecisionFarming = () => {
  const navigate = useNavigate();

  return (
    <div className="technique-container">
      <header className="technique-header">
        <h1>Precision Farming</h1>
        <p>Optimize resources for maximum crop productivity</p>
      </header>

      <section className="technique-description">
        <p>
          Precision farming uses modern technologies such as GPS, drones, and sensors to optimize the use of resources like water, fertilizers, and pesticides. This results in higher efficiency, cost savings, and increased sustainability.
        </p>
      </section>

      <section className="technique-benefits">
        <h3>Benefits of Precision Farming</h3>
        <ul>
          <li>Optimized use of water, fertilizers, and pesticides</li>
          <li>Reduced operational costs</li>
          <li>Higher yields and reduced waste</li>
          <li>Environmental sustainability</li>
        </ul>
      </section>

      <section className="technique-guides">
        <h3>Resources and Guides</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">
              Precision Farming: Video Guide
            </a>
          </li>
          <li>
            <a href="https://www.example.com/guide" target="_blank" rel="noopener noreferrer">
              Precision Farming Equipment Recommendations
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

export default PrecisionFarming;
