import React from "react";
import "./CropDetails.css";

function Cotton() {
  return (
    <div className="crop-details-container">
      <h1>🌱 Cotton</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Season:</strong> Kharif (Monsoon) – June to July</li>
          <li><strong>Harvesting Time:</strong> October to December</li>
          <li><strong>Best Climate:</strong> Warm, sunny climate (25–35°C), sensitive to frost</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Well-drained, deep, loamy or sandy loam soil</li>
          <li><strong>pH Range:</strong> 6.0 – 7.5</li>
          <li><strong>Soil Prep:</strong> Deep ploughing, followed by harrowing, and leveling the soil</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Seed Rate:</strong> 5–6 kg/acre (depending on row spacing and variety)</li>
          <li><strong>Spacing:</strong> 75 cm between rows and 30–45 cm between plants</li>
          <li><strong>Drip Irrigation:</strong> Helps conserve water and ensure proper growth during dry periods</li>
          <li><strong>Intercropping:</strong> Often grown with legumes like soybean for soil enrichment</li>
          <li><strong>Crop Rotation:</strong> Rotate with pulses, wheat, or maize to maintain soil fertility and reduce pest cycles</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> Apply 10 tons/acre of FYM or compost before sowing</li>
          <li><strong>Chemical Fertilizers (per acre):</strong></li>
          <ul>
            <li><strong>Nitrogen (N):</strong> 60–80 kg/ha (split into 2–3 applications)</li>
            <li><strong>Phosphorus (P):</strong> 40–50 kg/ha</li>
            <li><strong>Potassium (K):</strong> 50–60 kg/ha</li>
          </ul>
          <li><strong>Micronutrients:</strong> Zinc, Boron, and Magnesium for healthy growth and boll formation</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Common Pests:</strong> Cotton bollworm, aphids, whitefly, and thrips</li>
          <li><strong>Diseases:</strong> Cotton leaf curl virus, Alternaria leaf spot, Fusarium wilt</li>
          <li><strong>Control Measures:</strong></li>
          <ul>
            <li><strong>Cotton Bollworm:</strong> Use Bacillus thuringiensis or Cypermethrin for control</li>
            <li><strong>Aphids/Whitefly:</strong> Imidacloprid or Thiamethoxam can help manage these pests</li>
            <li><strong>Cotton Leaf Curl Virus:</strong> Use resistant varieties and maintain proper sanitation</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Tractor Attachments:</strong> Plough, harrow, and seed drill</li>
          <li><strong>Sprayers:</strong> Power sprayer or knapsack sprayer for pesticide application</li>
          <li><strong>Other:</strong> Drip irrigation system, cotton picker or manual harvesting tools</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost (per acre):</strong> ₹30,000–₹40,000 (including seeds, fertilizers, labor, irrigation)</li>
          <li><strong>Yield:</strong> 500–700 kg/acre (depending on care and variety)</li>
          <li><strong>Market Price:</strong> ₹40,000–₹70,000 per ton (depending on the quality and market conditions)</li>
          <li><strong>Gross Income:</strong> ₹20,000–₹50,000 per acre</li>
          <li><strong>Net Profit (avg):</strong> ₹15,000–₹30,000 per acre (depending on yield and market price)</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/eN-TqqBQOAk"
          title="Cotton Farming Guide"
          frameBorder="0"
          style="border-radius: 12px; border: none;"
          allowFullScreen
        ></iframe>

        </div>
      </section>
    </div>
  );
}

export default Cotton;
