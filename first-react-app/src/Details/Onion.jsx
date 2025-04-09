import React from "react";
import "./CropDetails.css";

function Onion() {
  return (
    <div className="crop-details-container">
      <h1>🧅 Onion</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Seasons:</strong></li>
          <ul>
            <li><strong>Kharif (Monsoon):</strong> June – September</li>
            <li><strong>Rabi (Winter):</strong> October – December</li>
            <li><strong>Summer:</strong> March – April (in southern India)</li>
          </ul>
          <li><strong>Best Climate:</strong> Cool, dry weather (13–24°C)</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Well-drained, loamy soils with good organic matter</li>
          <li><strong>pH Range:</strong> 6.0 – 7.5</li>
          <li><strong>Soil Prep:</strong> Deep ploughing and mixing with organic compost or well-rotted FYM</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Seed Selection:</strong> Use disease-free, certified seeds (e.g., Red, Yellow, or White varieties)</li>
          <li><strong>Spacing:</strong> Maintain 15-20 cm between plants and 30-40 cm between rows</li>
          <li><strong>Irrigation:</strong> Drip irrigation is ideal for water conservation, but furrow irrigation can also be used</li>
          <li><strong>Mulching:</strong> Apply organic mulch to retain moisture and control weeds</li>
          <li><strong>Pest Management:</strong> Use crop rotation and preventive sprays to control pests</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> Apply 10–12 tons/acre of well-decomposed FYM before planting</li>
          <li><strong>Chemical Fertilizers (recommended per acre):</strong></li>
          <ul>
            <li><strong>Nitrogen (N):</strong> 100–120 kg/ha (split into 2–3 applications)</li>
            <li><strong>Phosphorus (P):</strong> 50–60 kg/ha</li>
            <li><strong>Potassium (K):</strong> 80–100 kg/ha</li>
          </ul>
          <li><strong>Micronutrients:</strong> Zinc, Boron, and Iron as needed based on soil test</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Common Pests:</strong> Onion thrips, root maggots, aphids</li>
          <li><strong>Diseases:</strong> Downy mildew, neck rot, Fusarium wilt</li>
          <li><strong>Control Measures:</strong></li>
          <ul>
            <li><strong>Onion Thrips:</strong> Spray Profenofos or Spinosad @ 1.5 ml/liter of water</li>
            <li><strong>Root Maggots:</strong> Apply soil drenching with Carbofuran or use neem oil</li>
            <li><strong>Fungal Diseases:</strong> Use Mancozeb or Copper Oxychloride to prevent mildew and rot</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Tractor Attachments:</strong> Plough, harrow, and rotavator</li>
          <li><strong>Seeding Tools:</strong> Seed drill or manual planting tools</li>
          <li><strong>Other:</strong> Power sprayer, drip irrigation system, harvesting tools (e.g., sickle or harvester)</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost (per acre):</strong> ₹25,000–35,000 (including seeds, fertilizers, irrigation, labor)</li>
          <li><strong>Yield:</strong> 150–300 quintals/acre (depends on variety and care)</li>
          <li><strong>Market Price:</strong> ₹5–₹12/kg (varies by season and region)</li>
          <li><strong>Gross Income:</strong> ₹75,000–₹3,60,000 (depending on yield and market conditions)</li>
          <li><strong>Net Profit (avg):</strong> ₹50,000–₹1,50,000/acre</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/vDdY4m7SozM"
          title="Onion Farming Guide"
          frameBorder="0"
          style={{ borderRadius: "12px", border: "none" }}
          allowFullScreen
        ></iframe>

        </div>
      </section>
    </div>
  );
}

export default Onion;
