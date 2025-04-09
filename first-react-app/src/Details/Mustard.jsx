import React from "react";
import "./CropDetails.css";

function Mustard() {
  return (
    <div className="crop-details-container">
      <h1>🌿 Mustard</h1>

      <section>
        <h2>1. Season</h2>
        <ul>
          <li><strong>Main Season:</strong> Rabi (Winter) – October to December</li>
          <li><strong>Harvesting Time:</strong> February to March</li>
          <li><strong>Best Climate:</strong> Cool climate (10–25°C), frost-sensitive</li>
        </ul>
      </section>

      <section>
        <h2>2. Soil Requirements</h2>
        <ul>
          <li><strong>Type:</strong> Well-drained loamy or sandy loam soil with good fertility</li>
          <li><strong>pH Range:</strong> 6.0 – 7.5</li>
          <li><strong>Soil Prep:</strong> Deep ploughing, followed by harrowing for fine seedbed preparation</li>
        </ul>
      </section>

      <section>
        <h2>3. Modern Farming Techniques</h2>
        <ul>
          <li><strong>Seed Rate:</strong> 4–5 kg/acre (for traditional sowing), 2.5–3 kg/acre (for modern sowing methods)</li>
          <li><strong>Spacing:</strong> Maintain 30–45 cm between rows and 10–15 cm between plants</li>
          <li><strong>Irrigation:</strong> Avoid over-irrigation, water once or twice in the initial stage, and once during flowering if needed</li>
          <li><strong>Crop Rotation:</strong> Best rotated with pulses, rice, or wheat to improve soil fertility and reduce pest cycles</li>
        </ul>
      </section>

      <section>
        <h2>4. Fertilizers</h2>
        <ul>
          <li><strong>Organic:</strong> Apply 8–10 tons/acre of FYM or compost before sowing</li>
          <li><strong>Chemical Fertilizers (per acre):</strong></li>
          <ul>
            <li><strong>Nitrogen (N):</strong> 30–40 kg/ha (split into 2 applications)</li>
            <li><strong>Phosphorus (P):</strong> 60–80 kg/ha</li>
            <li><strong>Potassium (K):</strong> 25–30 kg/ha</li>
          </ul>
          <li><strong>Micronutrients:</strong> Zinc and Boron as needed based on soil test</li>
        </ul>
      </section>

      <section>
        <h2>5. Pesticides</h2>
        <ul>
          <li><strong>Common Pests:</strong> Aphids, whitefly, mustard sawfly, and flea beetle</li>
          <li><strong>Diseases:</strong> Downy mildew, Alternaria leaf spot, and white rust</li>
          <li><strong>Control Measures:</strong></li>
          <ul>
            <li><strong>Aphids:</strong> Use Imidacloprid or Acetamiprid as preventive sprays</li>
            <li><strong>Mustard Sawfly:</strong> Use Lambda-Cyhalothrin or Quinolphos</li>
            <li><strong>Downy Mildew:</strong> Spray with Mancozeb or Dithane M-45</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>6. Equipment Needed</h2>
        <ul>
          <li><strong>Tractor Attachments:</strong> Plough, harrow</li>
          <li><strong>Seeding Tools:</strong> Seed drill or manual broadcast method</li>
          <li><strong>Other:</strong> Power sprayer, combine harvester (for large-scale farms), hand tools</li>
        </ul>
      </section>

      <section>
        <h2>7. Profitability</h2>
        <ul>
          <li><strong>Input Cost (per acre):</strong> ₹15,000–20,000 (including seeds, fertilizers, labor)</li>
          <li><strong>Yield:</strong> 15–25 quintals/acre (depending on variety and care)</li>
          <li><strong>Market Price:</strong> ₹3,000–₹5,000/quintal (depending on region and market conditions)</li>
          <li><strong>Gross Income:</strong> ₹45,000–₹1,25,000 (depending on yield and price)</li>
          <li><strong>Net Profit (avg):</strong> ₹20,000–₹50,000/acre</li>
        </ul>
      </section>

      <section>
        <h2>📺 YouTube Tutorial</h2>
        <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/mjFfGTri8AE"
          title="Mustard Farming Guide"
          frameBorder="0"
          style="border-radius: 12px; border: none;"
          allowFullScreen
        ></iframe>

        </div>
      </section>
    </div>
  );
}

export default Mustard;
