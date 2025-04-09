import React from "react";
import './Third.css';

const Ven = () => {
  return (
    <div className="geo-container">
      <h1>🌐 Online Platforms for Farmers to Sell Produce Directly</h1>
      <div className="geo-cards">

        <div className="geo-card">
          <h2> ONDC (Open Network for Digital Commerce)</h2>
          <p>Sell across apps like Paytm, Magicpin, Meesho etc. (B2C & B2B)</p>
          <p>Supports vegetables, grains, processed goods</p>
          <a href="https://ondc.org" target="_blank">Visit ONDC</a>
        </div>

        <div className="geo-card">
          <h2> e-NAM (National Agriculture Market)</h2>
          <p>Govt. platform for APMC mandi connections</p>
          <p>Real-time prices, e-bidding, works for grains, pulses, oilseeds</p>
          <a href="https://enam.gov.in/web/" target="_blank">Visit e-NAM</a>
        </div>

        <div className="geo-card">
          <h2> AgriBazaar</h2>
          <p>Marketplace for direct farmer-to-buyer sales</p>
          <p>Includes logistics, warehousing, fast payments</p>
          <a href="https://www.agribazaar.com" target="_blank">Visit AgriBazaar</a>
        </div>

        <div className="geo-card">
          <h2> BigHaat</h2>
          <p>Sells fresh produce + agri-processed goods</p>
          <p>Also provides inputs like seeds and fertilizers</p>
          <a href="https://www.bighaat.com" target="_blank">Visit BigHaat</a>
        </div>

        <div className="geo-card">
          <h2> DeHaat</h2>
          <p>Sell via app or center to verified buyers</p>
          <p>Advisory, soil testing, input delivery included</p>
          <a href="https://www.dehaat.com" target="_blank">Visit DeHaat</a>
        </div>

        <div className="geo-card">
          <h2> Krishify Bazaar</h2>
          <p>Social app for produce posting & regional selling</p>
          <p>ONDC integrated, connects with local buyers</p>
          <a href="https://krishify.com" target="_blank">Visit Krishify</a>
        </div>

      </div>
    </div>
  );
};

export default Ven;