import React from "react";
import "./CropDetails.css";

function Millet() {
  return (
    <div className="crop-details-container">
      <h1>🌾 Millet</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Seasons:</strong> Kharif (June–July), Rabi (October–November), Summer (February–March in some areas)</li>
          <li><strong>Best Climate:</strong> Warm and dry; tolerant to drought and high temperature (20–35°C)</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Light to medium loamy soil or sandy loam</li>
          <li><strong>pH Range:</strong> 5.5 – 7.5</li>
          <li><strong>Soil Prep:</strong> 1–2 ploughings with harrowing; apply FYM for better yield</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Seed Rate:</strong> 4–5 kg/acre (varies by millet type)</li>
          <li><strong>Spacing:</strong> 30 cm between rows, 10–12 cm between plants</li>
          <li><strong>Line Sowing:</strong> With seed drill or manually for proper plant population</li>
          <li><strong>Intercropping:</strong> With pulses, groundnut, or legumes</li>
          <li><strong>Irrigation:</strong> Usually rainfed, 1–2 irrigations in dry spells</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> FYM – 6–8 tons/acre during field prep</li>
          <li><strong>Chemical Fertilizers (per hectare):</strong></li>
          <ul>
            <li><strong>Nitrogen (N):</strong> 40–60 kg</li>
            <li><strong>Phosphorus (P):</strong> 20–30 kg</li>
            <li><strong>Potassium (K):</strong> 20–25 kg</li>
          </ul>
          <li><strong>Application:</strong> Half of N and full P & K as basal; rest N after 25–30 days</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Common Pests:</strong> Shoot fly, stem borer</li>
          <li><strong>Diseases:</strong> Downy mildew, smut, blast</li>
          <li><strong>Control Measures:</strong></li>
          <ul>
            <li><strong>Shoot Fly:</strong> Spray Chlorpyrifos @ 400 ml/acre</li>
            <li><strong>Downy Mildew:</strong> Mancozeb spray every 10–12 days</li>
            <li><strong>Seed Treatment:</strong> Use Carbendazim @ 2 g/kg of seed before sowing</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Basic:</strong> Tractor, cultivator, seed drill</li>
          <li><strong>Sprayers:</strong> Knapsack sprayer for pesticide/fungicide application</li>
          <li><strong>Harvesting:</strong> Manual with sickles or small harvesters</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost (per acre):</strong> ₹6,000 – ₹10,000</li>
          <li><strong>Yield:</strong> 8–15 quintals/acre (depending on variety & management)</li>
          <li><strong>Market Price:</strong> ₹2,000 – ₹3,000/quintal</li>
          <li><strong>Gross Income:</strong> ₹20,000 – ₹45,000</li>
          <li><strong>Net Profit (avg):</strong> ₹10,000 – ₹30,000/acre</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/I8Z5LVfZEGU" // Replace with relevant video
            title="Millet Farming Guide"
            style={{ border: "none", borderRadius: "12px" }}
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Millet;
