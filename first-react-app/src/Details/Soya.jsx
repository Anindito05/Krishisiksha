import React from "react";
import "./CropDetails.css";

function Soya() {
  return (
    <div className="crop-details-container">
      <h1>🌱 Soya (Soybean)</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Seasons:</strong></li>
          <ul>
            <li><strong>Kharif (Monsoon):</strong> June – July</li>
            <li><strong>Rabi (Winter):</strong> October – November</li>
          </ul>
          <li><strong>Best Climate:</strong> Warm (25–30°C), frost-sensitive</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Well-drained, sandy loam or loamy soil</li>
          <li><strong>pH Range:</strong> 6.0 – 7.5</li>
          <li><strong>Soil Prep:</strong> Deep ploughing, followed by harrowing and leveling for seedbed preparation</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Seed Treatment:</strong> Use Rhizobium inoculation to improve nitrogen fixation</li>
          <li><strong>Sowing Method:</strong> Direct seeding or transplanting with spacing of 45 cm between rows, 15–20 cm between plants</li>
          <li><strong>Weed Control:</strong> Use herbicides such as Pendimethalin or Fluchloralin</li>
          <li><strong>Irrigation:</strong> Drip or sprinkler irrigation (especially during dry periods)</li>
          <li><strong>Crop Rotation:</strong> Rotate with cereals or pulses to maintain soil fertility</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> FYM – 5–8 tons/acre</li>
          <li><strong>Chemical Fertilizers (recommended per acre):</strong></li>
          <ul>
            <li><strong>Nitrogen (N):</strong> 30–40 kg/ha</li>
            <li><strong>Phosphorus (P):</strong> 40–50 kg/ha</li>
            <li><strong>Potassium (K):</strong> 30–40 kg/ha</li>
          </ul>
          <li><strong>Micronutrients:</strong> Zinc and Boron if deficiencies are noticed</li>
          <li><strong>Application:</strong> Apply basal dose at sowing, followed by top dressing during flowering stage</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Common Pests:</strong> Pod borer, stem fly, aphids</li>
          <li><strong>Diseases:</strong> Root rot, yellow mosaic, and rust</li>
          <li><strong>Control Measures:</strong></li>
          <ul>
            <li><strong>Pod Borer:</strong> Spray Endosulfan @ 1000 ml/ha</li>
            <li><strong>Yellow Mosaic:</strong> Use resistant varieties or spray Imidacloprid 17.8 SL @ 200 ml/ha</li>
            <li><strong>Rust:</strong> Spray Tebuconazole @ 1000 ml/ha</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Tractor Attachments:</strong> Seed drill, cultivator</li>
          <li><strong>Seeding Tools:</strong> Direct seeding machine</li>
          <li><strong>Sprayers:</strong> Power sprayer or knapsack sprayer</li>
          <li><strong>Other:</strong> Drip irrigation system, harvesting tools (combine harvester or sickle)</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost (per acre):</strong> ₹20,000–30,000 (including labor, seeds, fertilizers, irrigation)</li>
          <li><strong>Yield:</strong> 15–25 quintals/acre</li>
          <li><strong>Market Price:</strong> ₹35–₹50/kg</li>
          <li><strong>Gross Income:</strong> ₹52,500–₹1,25,000</li>
          <li><strong>Net Profit (avg):</strong> ₹30,000–₹60,000/acre</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dhTTXwFiH1A"
          title="Soyabean Farming Guide"
          frameBorder="0"
          style="border-radius: 12px; border: none;"
          allowFullScreen
        ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Soya;
