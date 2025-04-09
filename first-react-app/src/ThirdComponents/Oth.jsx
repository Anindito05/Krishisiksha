import React from "react";
import './Third.css';

const Oth = () => {
  return (
    <div className="geo-container">
      <h1>🔐📱 DIGITAL SAFETY, DELIVERY & PAYMENT GUIDE FOR RURAL FARMERS</h1>

      <div className="geo-cards">
        <div className="geo-card">
          <h2>✅ 1. Digital Safety for Farmers</h2>
          <p><strong>🔒 a. Use Strong Passwords & Never Share OTP</strong></p>
          <p>Use strong passwords or PINs. Never share OTPs.</p>

          <p><strong>🛡 b. Install Anti-Virus App</strong></p>
          <p>Install antivirus like Avast Antivirus (Free for Android).</p>

          <p><strong>📲 c. Use Trusted Apps Only</strong></p>
          <p>Download only from official app stores. Avoid suspicious links.</p>

          <p><strong>📶 d. Don’t Use Public Wi-Fi for Payments</strong></p>
          <p>Only use secure, private networks for online transactions.</p>

          <p><strong>📚 e. Learn Digital Safety Basics</strong></p>
          <p>Use DigiLocker to store documents safely.</p>
          <a href="https://www.cybercrime.gov.in" target="_blank">Report Frauds</a>
        </div>

        <div className="geo-card">
          <h2>🚚 2. Safe Delivery Methods for Selling Produce</h2>
          <p><strong> a. Partner with Agri Delivery Services</strong></p>
          <p>Use platforms like DeHaat, AgriBazaar, and BigHaat.</p>

          <p><strong> b. Use Government Postal Services</strong></p>
          <p>Send goods via India Post Speed Post.</p>
          <a href="https://www.indiapost.gov.in" target="_blank">India Post</a>

          <p><strong> c. Add Printed Labels</strong></p>
          <p>Include your name, contact, and crop info on packages.</p>

          <p><strong>🚚 d. Use Local Delivery Apps</strong></p>
          <p>Try Porter or LoadShare for local deliveries.</p>
        </div>

        <div className="geo-card">
          <h2>💰 3. Digital Payment Methods for Farmers</h2>
          <p><strong> a. UPI Payments</strong></p>
          <p>Use PhonePe, Google Pay, or Paytm. Share UPI ID or QR code.</p>

          <p><strong> b. Aadhaar Enabled Payment System (AePS)</strong></p>
          <p>Use Aadhaar + fingerprint at CSC or BC Sakhi centers.</p>
          <a href="https://uidai.gov.in" target="_blank">More Info</a>

          <p><strong>c. Link Jan Dhan Bank Account</strong></p>
          <p>Ensure your mobile is linked to your bank account.</p>
          <a href="https://pmjdy.gov.in" target="_blank">Nearby Bank Info</a>

          <p><strong>🧾 d. Send Digital Receipts via WhatsApp</strong></p>
          <p>Build trust by sharing digital receipts after payments.</p>
        </div>
      </div>
    </div>
  );
};

export default Oth;