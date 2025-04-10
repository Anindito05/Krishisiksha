import React from 'react';
import './Ent.css';

const Ent = () => {
  return (
    <div className="ent-container">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/qaUyiC2UVrw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h1>🌱 Entrepreneurial Farming (Agri-Entrepreneurship) – Point-wise Guide</h1>
      <ol className="ent-list">
        <li>
          <strong>What is Entrepreneurial Farming?</strong><br />
          Treating agriculture as a business focused on innovation, market awareness, and value addition, not just raw produce.
        </li>

        <li>
          <strong>Why is it Important Today?</strong>
          <ul>
            <li>High demand for organic, traceable food.</li>
            <li>2x–5x profit through value addition & direct marketing.</li>
            <li>Less dependency on middlemen.</li>
            <li>Rural employment + youth attraction to farming.</li>
          </ul>
        </li>

        <li>
          <strong>Mindset of an Agri-Entrepreneur</strong>
          <ul>
            <li>Think like a businessperson, not just a grower.</li>
            <li>Focus on branding, innovation, and market knowledge.</li>
            <li>Leverage tech, training, grants, and loans.</li>
          </ul>
        </li>

        <li>
          <strong>Ways to Practice Entrepreneurial Farming</strong>
          <ul>
            <li><strong>A. Value-Added Farming:</strong> E.g., Milk → Cheese, Tomatoes → Ketchup.</li>
            <li><strong>B. Agritourism:</strong> Farm visits, food tasting, traditional experiences.</li>
            <li><strong>C. Contract Farming:</strong> Grow for companies with price assurance.</li>
            <li><strong>D. Organic/Niche Farming:</strong> Exotic or medicinal crops.</li>
            <li><strong>E. Direct-to-Consumer:</strong> WhatsApp groups, home delivery, D2C website.</li>
            <li><strong>F. Branding:</strong> QR codes, labels, storytelling.</li>
            <li><strong>G. Digital Tools:</strong> Apps for weather, prices, crop planning.</li>
            <li><strong>H. Service Business:</strong> Equipment rental, drone spraying, soil testing.</li>
          </ul>
        </li>

        <li>
          <strong>How to Start – Step-by-Step</strong>
          <ul>
            <li>Pick focus: crop, dairy, or value-add.</li>
            <li>Study the market, trends, pricing.</li>
            <li>Make a business plan and get trained (KVK, FPO, online).</li>
            <li>Use subsidies, agri loans to start.</li>
            <li>Network with buyers and farmers.</li>
            <li>Start small, scale gradually, and go digital.</li>
          </ul>
        </li>

        <li>
          <strong>Govt & NGO Support</strong>
          <ul>
            <li>PM FME Scheme – food processing aid.</li>
            <li>SFAC, NABARD – funding & guidance.</li>
            <li>ACABC – youth training for agri-business.</li>
            <li>Startup India – incubators & funding.</li>
          </ul>
        </li>

        <li>
          <strong>Real-World Agri-Entrepreneur Ideas</strong>
          <ul>
            <li>Mushroom farming with branded packets.</li>
            <li>Cold-pressed oils using local seeds.</li>
            <li>Organic veggie subscriptions.</li>
            <li>Millet-based snacks or dosa batter.</li>
            <li>Herbal cosmetics or branded honey.</li>
          </ul>
        </li>

        <li>
          <strong>Challenges</strong>
          <ul>
            <li>Lack of awareness/training.</li>
            <li>Limited access to cold storage or capital.</li>
            <li>Convincing people to pay for quality.</li>
            <li>Branding and digital knowledge gaps.</li>
          </ul>
        </li>

        <li>
          <strong>Future Opportunities</strong>
          <ul>
            <li>Export niche agri-products.</li>
            <li>Sell via Amazon Kisan or online platforms.</li>
            <li>Rural agri-startup network.</li>
            <li>Training centers for farmer-entrepreneurs.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Ent;
