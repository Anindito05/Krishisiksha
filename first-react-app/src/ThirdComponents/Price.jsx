import React from "react";
import "./Third.css";

const Price = () => {
  return (
    <div className="geo-container">
      <h1>📱 Market Price Apps for Indian Farmers</h1>
      <div className="geo-cards">

        <div className="geo-card">
          <h2>🟢 Agmarknet</h2>
          <p><strong>👨‍🌾 Developed by:</strong> Directorate of Marketing and Inspection (DMI), Ministry of Agriculture</p>
          <p><strong>📊 Key Features:</strong></p>
          <ul>
            <li>Live market prices from 3,000+ mandis across India</li>
            <li>Covers 300+ agricultural commodities</li>
            <li>View price trends and historical data</li>
            <li>Choose by commodity, district, mandi, or state</li>
            <li>Works in multiple Indian languages</li>
          </ul>
          <a href="https://agmarknet.gov.in/" target="_blank">Visit Website</a><br/>
          <a href="https://play.google.com/store/apps/details?id=in.cdac.bharat.agmarknet" target="_blank">Download App</a>
        </div>

        <div className="geo-card">
          <h2>🟠 Kisan Suvidha</h2>
          <p><strong>👨‍🌾 Developed by:</strong> Ministry of Agriculture & Farmers Welfare, Government of India</p>
          <p><strong>📊 Key Features:</strong></p>
          <ul>
            <li>Market prices of crops in nearby mandis</li>
            <li>Weather updates (5-day forecasts)</li>
            <li>Input dealer info (fertilizers, seeds, pesticides)</li>
            <li>Crop advisory and insurance info</li>
            <li>Support for farmer queries and complaints</li>
          </ul>
          <a href="https://farmer.gov.in/m-kisan.aspx" target="_blank">Visit Website</a><br/>
          <a href="https://play.google.com/store/apps/details?id=com.cdac.kisansuvidha" target="_blank">Download App</a>
        </div>

        <div className="geo-card">
          <h2>🔵 eNAM (National Agriculture Market)</h2>
          <p><strong>👨‍🌾 Developed by:</strong> Small Farmers Agribusiness Consortium (SFAC)</p>
          <p><strong>📊 Key Features:</strong></p>
          <ul>
            <li>Live auction prices, commodity arrivals, trade history</li>
            <li>Direct digital mandi connections</li>
            <li>Farmer registration for e-trading</li>
            <li>Buyer discovery and logistics integration</li>
          </ul>
          <a href="https://www.enam.gov.in/web/" target="_blank">Visit Website</a><br/>
          <a href="https://play.google.com/store/apps/details?id=in.org.neml.enam" target="_blank">Download App</a>
        </div>

        <div className="geo-card">
          <h2>🟡 IFFCO Kisan App</h2>
          <p><strong>👨‍🌾 Developed by:</strong> IFFCO Kisan Sanchar Ltd</p>
          <p><strong>📊 Key Features:</strong></p>
          <ul>
            <li>Market prices from 15,000+ mandis</li>
            <li>Customized weather reports</li>
            <li>Expert agri-advisory and news updates</li>
            <li>Voice updates and videos for rural farmers</li>
          </ul>
          <a href="https://www.iffcokisan.com/" target="_blank">Visit Website</a><br/>
          <a href="https://play.google.com/store/apps/details?id=app.bighaat.iffcokisan" target="_blank">Download App</a>
        </div>

      </div>
    </div>
  );
};

export default Price;