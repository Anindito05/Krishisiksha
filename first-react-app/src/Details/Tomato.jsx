import React from "react";
import "./CropDetails.css";

function Tomato() {
  return (
    <div className="crop-details-container">
      <h1>🍅 Tomato</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Seasons:</strong></li>
          <ul>
            <li><strong>Kharif (Monsoon):</strong> June – July</li>
            <li><strong>Rabi (Winter):</strong> October – November</li>
            <li><strong>Summer:</strong> January – February (in southern India)</li>
          </ul>
          <li><strong>Best Climate:</strong> Warm (20–30°C), frost-sensitive</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Well-drained sandy loam or loamy soil</li>
          <li><strong>pH Range:</strong> 6.0 – 7.5</li>
          <li><strong>Soil Prep:</strong> 2–3 ploughings followed by harrowing, add organic compost or FYM during final ploughing</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Nursery Raising:</strong> Use pro-trays in polyhouse or shaded area, transplant seedlings at 25–30 days old</li>
          <li><strong>Spacing:</strong> 60 cm between rows, 45 cm between plants</li>
          <li><strong>Mulching:</strong> Use plastic mulch to conserve moisture & reduce weeds</li>
          <li><strong>Staking/Support:</strong> Use bamboo or wires to support the plants</li>
          <li><strong>Drip Irrigation:</strong> Ensures water efficiency & reduces diseases</li>
          <li><strong>Use of Hybrid Seeds:</strong> Improves yield, uniform size, and disease resistance</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> FYM – 10–12 tons/acre</li>
          <li><strong>Chemical Fertilizers (recommended per acre):</strong></li>
          <ul>
            <li><strong>Nitrogen (N):</strong> 100–120 kg/ha</li>
            <li><strong>Phosphorus (P):</strong> 60–80 kg/ha</li>
            <li><strong>Potassium (K):</strong> 50–60 kg/ha</li>
          </ul>
          <li><strong>Micronutrients:</strong> Apply Boron, Zinc, and Calcium if deficiencies appear</li>
          <li><strong>Application:</strong> Split into 3 parts – Basal dose, flowering, and fruiting</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Fruit Borer:</strong> Spray Emamectin Benzoate @ 200g/ha</li>
          <li><strong>Whitefly/Thrips:</strong> Imidacloprid 17.8 SL @ 150–200 ml/ha</li>
          <li><strong>Early Blight:</strong> Mancozeb or Copper Oxychloride spray every 10–15 days</li>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Basic:</strong> Tractor with rotavator or tiller, power sprayer or knapsack sprayer, drip irrigation system</li>
          <li><strong>Advanced (optional):</strong> Plastic mulch laying machine, nursery tray sowing tools, solar dryer (for value addition)</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost (per acre):</strong> ₹30,000–40,000 (including nursery, labor, drip, sprays)</li>
          <li><strong>Yield:</strong> 250–400 quintals/acre (with hybrids and good care)</li>
          <li><strong>Market Price:</strong> ₹8 – ₹25/kg (highly seasonal and location-dependent)</li>
          <li><strong>Gross Income:</strong> ₹2,00,000 – ₹5,00,000+</li>
          <li><strong>Net Profit (avg):</strong> ₹1,50,000 – ₹3,00,000/acre (in peak season)</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/FSFBPtRO4HU"
            title="Tomato Farming Guide"
            frameBorder="0"
            style={{ borderRadius: "12px", border: "none" }}
            allowFullScreen
        ></iframe>

        </div>
      </section>
    </div>
  );
}

export default Tomato;
