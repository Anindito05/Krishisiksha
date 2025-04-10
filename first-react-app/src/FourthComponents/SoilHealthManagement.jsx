import React from "react";
import { useNavigate } from "react-router-dom";
import './FarmingTechniques.css';  // Shared CSS

const SoilHealthManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="technique-container">
      <header className="technique-header">
        <h1>Soil Health Management</h1>
        <p>Enhance soil fertility for sustainable farming</p>
      </header>

      <section className="technique-description">
        <p>
          Soil health management involves practices such as adding organic matter, composting, and maintaining proper soil pH. Healthy soil promotes strong plant growth and increases overall farm productivity.
        </p>
      </section>

      <section className="technique-benefits">
        <h3>Benefits of Soil Health Management</h3>
        <ul>
          <li>Improved soil fertility and nutrient availability</li>
          <li>Enhanced water retention in soil</li>
          <li>Stronger plant growth and better yields</li>
          <li>Reduced dependence on chemical fertilizers</li>
        </ul>
      </section>

      <section className="technique-guides">
        <h3>Resources and Guides</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">
              Soil Health Management: Video Guide
            </a>
          </li>
          <li>
            <a href="https://www.example.com/guide" target="_blank" rel="noopener noreferrer">
              Soil Fertility and Organic Matter Guide
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

export default SoilHealthManagement;
