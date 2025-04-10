import React from "react";
import { useNavigate } from "react-router-dom";
import './FarmingTechniques.css';  // Shared CSS

const SmartIrrigation = () => {
  const navigate = useNavigate();

  return (
    <div className="technique-container">
      <header className="technique-header">
        <h1>Smart Irrigation</h1>
        <p>Efficient water usage for sustainable farming</p>
      </header>

      <section className="technique-description">
        <p>
          Smart irrigation systems, such as drip irrigation and automated sprinkler systems, help conserve water by delivering water directly to the plant's root zone.
          These systems can be automated to work based on weather conditions, soil moisture levels, and crop requirements, leading to better water management and higher crop yields.
        </p>
      </section>

      <section className="technique-benefits">
        <h3>Benefits of Smart Irrigation</h3>
        <ul>
          <li>Water conservation and reduced wastage</li>
          <li>Increased crop yield with precise water delivery</li>
          <li>Reduction in water and energy costs</li>
          <li>Improved soil health</li>
          <li>Environmentally sustainable</li>
        </ul>
      </section>

      <section className="technique-guides">
        <h3>Resources and Guides</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">
              Smart Irrigation Techniques: Video Guide
            </a>
          </li>
          <li>
            <a href="https://www.example.com/guide" target="_blank" rel="noopener noreferrer">
              Smart Irrigation Setup Guide
            </a>
          </li>
          <li>
            <a href="https://www.example.com/products" target="_blank" rel="noopener noreferrer">
              Smart Irrigation Systems: Product Recommendations
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

export default SmartIrrigation;
