import React from 'react';
import './Farming.css'; 
import { useNavigate } from 'react-router-dom';

const Farming = () => {
  const navigate = useNavigate();

  return (
    <div className="farming-container">
      <header className="header">
        <h1 className="logo">Modern Farming Techniques</h1>
      </header>

      <section className="farming-techniques">
        <h2>Techniques for High Yield, Sustainability, and Profitability</h2>
        <p>
          Modern farming techniques are designed to maximize crop production while being mindful of the environment. These techniques aim to increase yield, reduce waste, and ensure sustainability for future generations.
        </p>

        <div className="technique-card" onClick={() => navigate('/technique/smart-irrigation')}>
          <h3>Smart Irrigation</h3>
          <p>
            Efficient water use is crucial for modern farming. Smart irrigation systems, such as drip irrigation and automated sprinkler systems, help conserve water and ensure crops receive the right amount of moisture.
          </p>
        </div>

        <div className="technique-card" onClick={() => navigate('/technique/crop-rotation')}>
          <h3>Crop Rotation</h3>
          <p>
            Crop rotation is the practice of alternating different crops in the same field each year. This helps to maintain soil fertility, prevent pest buildup, and reduce the risk of crop diseases, resulting in better yields.
          </p>
        </div>

        <div className="technique-card" onClick={() => navigate('/technique/soil-health')}>
          <h3>Soil Health Management</h3>
          <p>
            Modern farming emphasizes the importance of maintaining soil health through the use of organic fertilizers, composting, and cover crops. This approach increases soil fertility and reduces the need for chemical fertilizers.
          </p>
        </div>

        <div className="technique-card" onClick={() => navigate('/technique/precision-farming')}>
          <h3>Precision Farming</h3>
          <p>
            Precision farming uses technology like GPS, drones, and sensors to optimize the use of resources such as water, fertilizers, and pesticides. This allows farmers to precisely monitor and manage their crops, improving efficiency and sustainability.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 AgriShiksha. Empowering Villages, One Lesson at a Time.</p>
      </footer>
    </div>
  );
};

export default Farming;
