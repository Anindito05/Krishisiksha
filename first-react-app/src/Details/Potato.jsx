import React from "react";
import "./CropDetails.css";

function Potato() {
  return (
    <div className="crop-details-container">
      <h1>🥔 Potato</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Seasons:</strong></li>
          <ul>
            <li><strong>Rabi (Winter):</strong> October – December</li>
            <li><strong>Summer:</strong> February – March (Southern India)</li>
          </ul>
          <li><strong>Best Climate:</strong> Cool, dry weather (15–20°C)</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Well-drained, sandy loam or loamy soil with good organic matter</li>
          <li><strong>pH Range:</strong> 5.5 – 6.5</li>
          <li><strong>Soil Prep:</strong> Deep ploughing, followed by harrowing to create a fine seedbed</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Seed Selection:</strong> Use certified, disease-free, and healthy seed tubers</li>
          <li><strong>Spacing:</strong> Maintain 25–30 cm between plants and 60–70 cm between rows</li>
          <li><strong>Irrigation:</strong> Drip or furrow irrigation is preferred, maintain moisture during tuber development</li>
          <li><strong>Mulching:</strong> Use organic mulch or plastic mulch to retain moisture and control weeds</li>
          <li><strong>Crop Rotation:</strong> Rotate with legumes or other crops to break pest cycles</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> Apply 12–15 tons/acre of well-rotted FYM before planting</li>
          <li><strong>Chemical Fertilizers (recommended per acre):</strong></li>
          <ul>
            <li><strong>Nitrogen (N):</strong> 100–120 kg/ha (split into 2–3 applications)</li>
            <li><strong>Phosphorus (P):</strong> 50–60 kg/ha</li>
            <li><strong>Potassium (K):</strong> 100–120 kg/ha</li>
          </ul>
          <li><strong>Micronutrients:</strong> Apply Boron, Zinc, and Magnesium if needed based on soil test</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Common Pests:</strong> Aphids, cutworms, tuber moth, and leaf hoppers</li>
          <li><strong>Diseases:</strong> Early blight, late blight, black scurf, and potato scab</li>
          <li><strong>Control Measures:</strong></li>
          <ul>
            <li><strong>Late Blight:</strong> Apply Metalaxyl or Mancozeb every 10–15 days</li>
            <li><strong>Aphids:</strong> Use Imidacloprid or Thiamethoxam to control aphid population</li>
            <li><strong>Tuber Moth:</strong> Apply Chlorpyrifos or Spinosad as preventive sprays</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Tractor Attachments:</strong> Plough, harrow, and potato planter</li>
          <li><strong>Seeding Tools:</strong> Potato seed cutter or planter</li>
          <li><strong>Other:</strong> Power sprayer, tractor for digging, harvesters, and tuber washing machines</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost (per acre):</strong> ₹30,000–50,000 (including seeds, fertilizers, irrigation, labor)</li>
          <li><strong>Yield:</strong> 150–300 quintals/acre (depending on variety and management)</li>
          <li><strong>Market Price:</strong> ₹15–₹30/kg (varies by region and season)</li>
          <li><strong>Gross Income:</strong> ₹2,25,000–₹9,00,000 (depending on yield and price)</li>
          <li><strong>Net Profit (avg):</strong> ₹1,50,000–₹4,00,000/acre</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/LW5FCxJkFR0"
          title="Potato Farming Guide"
          frameBorder="0"
          style="border-radius: 12px; border: none;"
          allowFullScreen
        ></iframe>

        </div>
      </section>
    </div>
  );
}

export default Potato;
