import React from "react";
import "./CropDetails.css";

function Paddy() {
  return (
    <div className="crop-details-container">
      <h1>🌾 Paddy (Rice)</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Season:</strong> Kharif (Monsoon)</li>
          <li><strong>Sowing Time:</strong> June to July (based on rainfall & region)</li>
          <li><strong>Harvesting Time:</strong> October to November</li>
          <li><strong>Alternate Seasons:</strong></li>
          <ul>
            <li><strong>Rabi Rice:</strong> November–March (Southern India)</li>
            <li><strong>Summer Rice (Boro):</strong> February–May (Eastern India)</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Clayey loam or silty loam with good water retention</li>
          <li><strong>pH Range:</strong> 5.5 – 6.5</li>
          <li><strong>Preparation:</strong> Deep ploughing, puddling with tiller/tractor, leveling for water distribution</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Nursery Management:</strong> Seedlings in nursery → transplant at 25–30 days</li>
          <li><strong>Direct Seeding:</strong> Drum seeder or DSR for labor-saving</li>
          <li><strong>SRI Method:</strong> Wider spacing (25x25 cm), single young seedling/hill, alternate wetting & drying</li>
          <li><strong>Irrigation:</strong> 2–5 cm standing water in vegetative stage, drain before harvest</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> FYM – 10 tons/acre before sowing</li>
          <li><strong>Chemical (per ha):</strong> N: 100–120 kg, P: 40–50 kg, K: 40–50 kg</li>
          <li><strong>Application:</strong> 50% N as basal, rest split at tillering and panicle initiation</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Stem Borer:</strong> Chlorantraniliprole (Coragen) – 150 ml/ha</li>
          <li><strong>Leaf Folder:</strong> Triazophos 40 EC – 800 ml/ha</li>
          <li><strong>BPH:</strong> Imidacloprid 17.8 SL – 200 ml in 200L water/ha</li>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Tractor Attachments:</strong> Rotavator, puddler</li>
          <li><strong>Seeding Tools:</strong> Drum seeder (DSR), paddy transplanter</li>
          <li><strong>Other:</strong> Power sprayer, combine harvester or sickle, thresher/mini rice mill</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost:</strong> ₹12,000–18,000/acre</li>
          <li><strong>Yield:</strong> 20–25 quintals/acre (higher with SRI or hybrids)</li>
          <li><strong>Market Price:</strong> ₹2,000–2,500/quintal</li>
          <li><strong>Gross Income:</strong> ₹40,000–62,500</li>
          <li><strong>Net Profit:</strong> ₹20,000–30,000/acre</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/FW_bw9jdrlQ"
            title="Paddy Farming Guide"
            style={{ border: "none", borderRadius: "12px" }}
            allowFullScreen
        ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Paddy;
