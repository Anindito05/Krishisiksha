import React from "react";
import "./CropDetails.css";

function Barley() {
  return (
    <div className="crop-details-container">
      <h1>🌾 Barley</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Season:</strong> Rabi (Winter)</li>
          <li><strong>Sowing Time:</strong> October to November</li>
          <li><strong>Harvesting Time:</strong> March to April</li>
          <li><strong>Best Climate:</strong> Cool and dry climate (12–25°C); frost-tolerant</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Well-drained loamy or sandy loam soil</li>
          <li><strong>pH Range:</strong> 6.0 – 8.0</li>
          <li><strong>Soil Prep:</strong> 2–3 deep ploughings with leveling; remove weeds and stubbles</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Seed Rate:</strong> 40–50 kg/acre</li>
          <li><strong>Spacing:</strong> 20–22 cm row-to-row</li>
          <li><strong>Zero Tillage:</strong> Barley can be grown with minimal tillage after rice harvest</li>
          <li><strong>Intercropping:</strong> With chickpea or mustard in some regions</li>
          <li><strong>Irrigation:</strong> 2–3 light irrigations; avoid waterlogging</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> FYM – 8–10 tons/acre during soil prep</li>
          <li><strong>Chemical Fertilizers (per acre):</strong></li>
          <ul>
            <li><strong>Nitrogen (N):</strong> 40–60 kg/ha</li>
            <li><strong>Phosphorus (P):</strong> 20–30 kg/ha</li>
            <li><strong>Potassium (K):</strong> 20–30 kg/ha</li>
          </ul>
          <li><strong>Application:</strong> Apply full dose at sowing time</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Common Pests:</strong> Aphids, armyworm</li>
          <li><strong>Diseases:</strong> Loose smut, rust, leaf blotch</li>
          <li><strong>Control Measures:</strong></li>
          <ul>
            <li><strong>Aphids:</strong> Spray Dimethoate 30 EC @ 300 ml/acre</li>
            <li><strong>Rust:</strong> Mancozeb or Propiconazole spray every 10–15 days if spotted</li>
            <li><strong>Smuts:</strong> Treat seeds with Carbendazim @ 2 g/kg of seed</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Basic Tools:</strong> Tractor with cultivator, seed drill</li>
          <li><strong>Sprayers:</strong> Knapsack or power sprayer for pesticide use</li>
          <li><strong>Other:</strong> Combine harvester or sickles for manual harvesting</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost (per acre):</strong> ₹8,000 – ₹12,000</li>
          <li><strong>Yield:</strong> 18–25 quintals/acre</li>
          <li><strong>Market Price:</strong> ₹1,200 – ₹1,800/quintal</li>
          <li><strong>Gross Income:</strong> ₹25,000 – ₹45,000</li>
          <li><strong>Net Profit (avg):</strong> ₹15,000 – ₹30,000/acre</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/c4VUZfgDGmY"
          title="Barley Farming Guide"
          //frameBorder="0"
          style={{ borderRadius: "12px", border: "none" }}
          allowFullScreen
        ></iframe>


        </div>
      </section>
    </div>
  );
}

export default Barley;
