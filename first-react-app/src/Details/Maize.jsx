import React from "react";
import "./CropDetails.css";

function Maize() {
  return (
    <div className="crop-details-container">
      <h1>🌽 Maize (Corn)</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Seasons:</strong></li>
          <ul>
            <li><strong>Kharif (Monsoon):</strong> June   July</li>
            <li><strong>Rabi (Winter):</strong> October   November</li>
          </ul>
          <li><strong>Best Climate:</strong> Warm (20–30°C), frost-sensitive</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Well-drained, sandy loam or loamy soil</li>
          <li><strong>pH Range:</strong> 5.8 – 7.0</li>
          <li><strong>Soil Prep:</strong> Deep ploughing, followed by harrowing and leveling for seedbed preparation</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Seed Treatment:</strong> Treat with fungicides (e.g., Thiram) to control seedling diseases</li>
          <li><strong>Sowing Method:</strong> Direct seeding with a seed drill, spacing of 60–75 cm between rows, and 20–25 cm between plants</li>
          <li><strong>Weed Control:</strong> Use herbicides like Atrazine or Pendimethalin</li>
          <li><strong>Irrigation:</strong> Drip or sprinkler irrigation, especially during dry spells</li>
          <li><strong>Crop Rotation:</strong> Rotate with pulses, oilseeds, or other cereals for soil health</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> FYM – 10–15 tons/acre</li>
          <li><strong>Chemical Fertilizers (recommended per acre):</strong></li>
          <ul>
            <li><strong>Nitrogen (N):</strong> 100–150 kg/ha</li>
            <li><strong>Phosphorus (P):</strong> 60–80 kg/ha</li>
            <li><strong>Potassium (K):</strong> 40–60 kg/ha</li>
          </ul>
          <li><strong>Micronutrients:</strong> Zinc, Boron, and Iron if deficiencies are noticed</li>
          <li><strong>Application:</strong> Apply nitrogen in 3 split doses: basal, knee-high stage, and at tasseling stage</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Common Pests:</strong> Armyworm, cutworm, rootworm, corn borer</li>
          <li><strong>Diseases:</strong> Leaf blight, rust, gray mold</li>
          <li><strong>Control Measures:</strong></li>
          <ul>
            <li><strong>Armyworm:</strong> Spray Chlorpyrifos @ 2–3 liters/ha</li>
            <li><strong>Corn Borer:</strong> Spray Lambda-cyhalothrin @ 1.5–2.0 liters/ha</li>
            <li><strong>Leaf Blight:</strong> Use Mancozeb or Copper Oxychloride spray every 10–15 days</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Tractor Attachments:</strong> Seed drill, cultivator, rotavator</li>
          <li><strong>Sprayers:</strong> Power sprayer or knapsack sprayer</li>
          <li><strong>Other:</strong> Drip irrigation system, harvesting tools (combine harvester, sickle)</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost (per acre):</strong> ₹25,000–35,000 (including labor, seeds, fertilizers, irrigation)</li>
          <li><strong>Yield:</strong> 40–60 quintals/acre</li>
          <li><strong>Market Price:</strong> ₹1,800–₹3,500/quintal</li>
          <li><strong>Gross Income:</strong> ₹72,000–₹2,10,000</li>
          <li><strong>Net Profit (avg):</strong> ₹40,000–₹1,00,000/acre</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/nfMLKP1nXK0"
          title="Maize Farming Guide"
          frameBorder="0"
          style="border-radius: 12px; border: none;"
          allowFullScreen
        ></iframe>

        </div>
      </section>
    </div>
  );
}

export default Maize;
