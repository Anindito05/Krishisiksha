import React from "react";
import "./CropDetails.css"; // Common styling file for all crops

function Wheat() {
  return (
    <div className="crop-details-container">
      <h1>🌾 Wheat</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Season:</strong> Rabi (Winter crop)</li>
          <li><strong>Sowing Time:</strong> Late October to Mid-November</li>
          <li><strong>Harvesting Time:</strong> March to April (varies by region/variety)</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Loamy or clay loam, well-drained, rich in organic matter</li>
          <li><strong>pH Range:</strong> 6.0 – 7.5</li>
          <li><strong>Preparation:</strong> 2–3 deep ploughings, harrowing, leveling with a leveler</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Seed Selection:</strong> Certified high-yielding & disease-resistant (HD-2967, HD-3086)</li>
          <li><strong>Seed Treatment:</strong> Fungicide (Carbendazim @2g/kg seed)</li>
          <li><strong>Sowing Method:</strong> Seed-cum-Fertilizer Drill or Zero Till Drill</li>
          <li><strong>Spacing:</strong> 22–25 cm between rows</li>
          <li><strong>Seed Rate:</strong> 100–125 kg/ha</li>
          <li><strong>Irrigation:</strong> 4–6 times at CRI, Tillering, Jointing, Booting, Flowering, Dough stage</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> FYM – 8–10 tons/acre before final ploughing</li>
          <li><strong>Chemical (per ha):</strong> N: 120 kg, P: 60 kg, K: 40 kg</li>
          <li><strong>Application:</strong> 50% N + full P & K as basal; rest N split during tillering & booting</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Termites:</strong> Chlorpyrifos 20EC @ 2L/ha during soil prep</li>
          <li><strong>Aphids:</strong> Imidacloprid 17.8 SL @ 200 ml in 200L water/ha</li>
          <li><strong>Armyworms:</strong> Quinalphos 25 EC @ 1 L/ha if infestation</li>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Primary:</strong> Tractor, cultivator, rotavator, seed drill</li>
          <li><strong>Other:</strong> Sprayer, thresher, combine harvester, moisture meter</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost:</strong> ₹10,000–15,000/acre</li>
          <li><strong>Yield:</strong> 18–22 quintals/acre</li>
          <li><strong>Market Price:</strong> ₹2,200–2,600/quintal</li>
          <li><strong>Gross Income:</strong> ₹39,600–57,200</li>
          <li><strong>Net Profit:</strong> ₹20,000–30,000 per acre</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/xVO9bjuhB58"
            title="Wheat Farming Guide"
            frameBorder="0"
            style={{ borderRadius: "12px", border: "none" }}
            allowFullScreen
        ></iframe>

        </div>
      </section>
    </div>
  );
}

export default Wheat;
