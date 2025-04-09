import React from "react";
import "./CropDetails.css";

function Sugarcane() {
  return (
    <div className="crop-details-container">
      <h1>🍬 Sugarcane</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Seasons:</strong></li>
          <ul>
            <li><strong>Kharif (Monsoon):</strong> June – September</li>
            <li><strong>Rabi (Winter):</strong> October – December</li>
          </ul>
          <li><strong>Best Climate:</strong> Warm and humid (22–32°C), frost-sensitive</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Deep, well-drained, fertile soils, preferably sandy loam</li>
          <li><strong>pH Range:</strong> 6.0 – 7.5</li>
          <li><strong>Soil Prep:</strong> Deep ploughing, followed by leveling and furrow formation</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Seed Selection:</strong> Use disease-resistant varieties, such as Co 86032, CoJ 64</li>
          <li><strong>Planting:</strong> Plant 2–3 buds from healthy sugarcane stalks, spaced 75 cm apart in rows</li>
          <li><strong>Soil and Water Conservation:</strong> Mulching with organic material or plastic to retain soil moisture</li>
          <li><strong>Irrigation:</strong> Drip or sprinkler irrigation; ensure 4–5 irrigations in a month depending on rainfall</li>
          <li><strong>Intercropping:</strong> Intercrop with legumes or oilseeds to improve soil fertility</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> FYM – 20–25 tons/acre</li>
          <li><strong>Chemical Fertilizers (recommended per acre):</strong></li>
          <ul>
            <li><strong>Nitrogen (N):</strong> 100–150 kg/ha</li>
            <li><strong>Phosphorus (P):</strong> 50–60 kg/ha</li>
            <li><strong>Potassium (K):</strong> 100–150 kg/ha</li>
          </ul>
          <li><strong>Micronutrients:</strong> Zinc, Boron, Iron if deficiencies appear</li>
          <li><strong>Application:</strong> Apply nitrogen in 2–3 splits, phosphorus, and potassium at planting and tillering stages</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Common Pests:</strong> Shoot borer, root borer, whitefly</li>
          <li><strong>Diseases:</strong> Red rot, top shoot borer, smut</li>
          <li><strong>Control Measures:</strong></li>
          <ul>
            <li><strong>Shoot Borer:</strong> Spray Chlorpyrifos @ 2–3 liters/ha</li>
            <li><strong>Top Shoot Borer:</strong> Use Endosulfan or Lambda-cyhalothrin @ 1.5 liters/ha</li>
            <li><strong>Red Rot:</strong> Use Trichoderma or Carbendazim spray for disease control</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Tractor Attachments:</strong> Ridger, disc harrow, plough</li>
          <li><strong>Other:</strong> Power sprayer, drip irrigation system, cane harvester</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost (per acre):</strong> ₹40,000–60,000 (including seeds, labor, fertilizers, irrigation)</li>
          <li><strong>Yield:</strong> 50–100 tons/acre (varies with soil and irrigation conditions)</li>
          <li><strong>Market Price:</strong> ₹3,000–₹4,500/ton (price fluctuates based on market and region)</li>
          <li><strong>Gross Income:</strong> ₹1,50,000–₹4,50,000</li>
          <li><strong>Net Profit (avg):</strong> ₹1,00,000–₹2,50,000/acre</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/kNt11njEsgc"
          title="Sugarcane Farming Guide"
          frameBorder="0"
          style="border-radius: 12px; border: none;"
          allowFullScreen
        ></iframe>

        </div>
      </section>
    </div>
  );
}

export default Sugarcane;
