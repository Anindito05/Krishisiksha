import React from 'react';
import './Third.css';

const schemes = [
  {
    name: 'ONDC (Open Network for Digital Commerce)',
    description: 'Government-backed open platform to sell directly to consumers.',
    link: 'https://www.ondc.org',
    apps: 'Paytm, Mystore, Craftsvilla, etc.'
  },
  {
    name: 'e-NAM (National Agriculture Market)',
    description: 'National platform for farmers to sell to buyers across India.',
    link: 'https://www.enam.gov.in',
    apps: 'Web portal only'
  },
  {
    name: 'AgriBazaar',
    description: 'Sell crops with digital payments and delivery logistics.',
    link: 'https://www.agribazaar.com',
    apps: 'https://play.google.com/store/apps/details?id=com.agri.agriapp'
  },
  {
    name: 'BigHaat',
    description: 'Sell farm produce and buy agri inputs online.',
    link: 'https://www.bighaat.com',
    apps: 'https://play.google.com/store/apps/details?id=com.bighaat.android'
  },
  {
    name: 'DeHaat',
    description: 'End-to-end farming solution including selling crops.',
    link: 'https://www.dehaat.com',
    apps: 'https://play.google.com/store/apps/details?id=com.green.agrevolution'
  },
  {
    name: 'Farmart',
    description: 'Digital mandi for rural entrepreneurs and farmers.',
    link: 'https://play.google.com/store/apps/details?id=co.farmart.app',
    apps: 'Android App only'
  },
  {
    name: 'KisanMandi.com',
    description: 'Free government platform for direct crop sale.',
    link: 'http://www.kisanmandi.com',
    apps: 'Web only'
  },
  {
    name: 'Amazon Saheli/Karigar',
    description: 'Sell handmade or farm-based products online.',
    link: 'https://saheli.amazon.in',
    apps: 'Also visit https://karigar.amazon.in'
  },
  {
    name: 'Flipkart Samarth',
    description: 'For rural producers to list and sell products online.',
    link: 'https://stories.flipkart.com/flipkart-samarth',
    apps: 'Web only'
  },
  {
    name: 'Facebook Marketplace / WhatsApp Business',
    description: 'Sell locally through Facebook and WhatsApp with UPI payments.',
    link: 'https://www.facebook.com/marketplace/',
    apps: 'https://play.google.com/store/apps/details?id=com.whatsapp.w4b'
  },
];

const Geovt = () => {
  return (
    <div className="geo-container">
      <h1>🛒 Online Platforms for Farmers to Sell Produce</h1>
      <div className="geo-cards">
        {schemes.map((scheme, index) => (
          <div className="geo-card" key={index}>
            <h2>{scheme.name}</h2>
            <p>{scheme.description}</p>
            <p><strong>Website:</strong> <a href={scheme.link} target="_blank" rel="noopener noreferrer">{scheme.link}</a></p>
            <p><strong>App/Platform:</strong> {scheme.apps}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Geovt;