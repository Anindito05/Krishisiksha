import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

// 💬 Gemini chatbot component inside the same file (or import from separate file)
const GEMINI_API_KEY = 'AIzaSyCiZvGaCPvyXw01FV2z8J2wwC3wiEoXBOw'; 
const GeminiChatbot = () => {
  const [input, setInput] = React.useState('');
  const [chat, setChat] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updatedChat = [...chat, { role: 'user', text: input }];
    setChat(updatedChat);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: updatedChat.map((msg) => ({
              role: msg.role,
              parts: [{ text: msg.text }],
            })),
          }),
        }
      );

      const data = await response.json();
      const reply =
      data?.candidates?.[0]?.content?.parts?.map(p => p.text).join(" ") ||
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response";
          setChat([...updatedChat, { role: 'model', text: reply }]);
    } catch (err) {
      setChat([...updatedChat, { role: 'model', text: 'Error fetching response.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          padding: 14,
          borderRadius: '50%',
          backgroundColor: '#28a745',
          color: 'white',
          fontSize: 18,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        💬
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            width: 320,
            height: 420,
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            boxShadow: '0 0 12px rgba(0,0,0,0.1)',
          }}
        >
          <h4 style={{ margin: '0 0 10px 0', textAlign: 'center' }}>Ask AI (Gemini)</h4>
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              background: '#f9f9f9',
              padding: 6,
              marginBottom: 10,
              borderRadius: 4,
            }}
          >
            {chat.map((msg, i) => (
              <div key={i} style={{ marginBottom: 8, textAlign: msg.role === 'user' ? 'right' : 'left' }}>
                <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.text}
              </div>
            ))}
            {loading && <em>AI is thinking...</em>}
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a question..."
            style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
          />
        </div>
      )}
    </>
  );
};

const LandingPage = ({ onGetStarted, onLoginClick, onRegisterClick }) => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="logo">KRISHISIKSHA</h1>
        <div className="header-buttons">
          <button className="button primary" onClick={onLoginClick}>Login</button>
          <button className="button secondary" onClick={onRegisterClick}>Register</button>
        </div>
      </header>

      <section className="hero">
        <h2 className="main-title">Empowering Rural India with Knowledge</h2>
        <p className="subtitle">
          Learn about modern farming, digital literacy, and entrepreneurship - all in one platform,
          designed for rural communities for agricultural development.
        </p>
        <button className="button get-started" onClick={() => navigate('/farming')}>
          Get Started
        </button>
      </section>

      <section className="features">
        <div className="card highlight-card" onClick={() => navigate('/farming')}>
          <h3>Farming Encyclopedia</h3>
          <p>Smart techniques, irrigation, crop rotation & more.</p>
        </div>

        <div className="card" onClick={() => navigate('/digital-literacy')}>
          <h3>Digital Literacy</h3>
          <p>Learn smartphone, internet, and UPI basics.</p>
        </div>

        <div className="card" onClick={() => alert('Coming soon')}>
          <h3>Entrepreneurship</h3>
          <p>Start, grow, and market your own rural business.</p>
        </div>

        <div className="wide-card" onClick={() => navigate('/farming')}>
          <h3>Modern Farming Techniques</h3>
          <p>Innovative practices for high yield, sustainability, and profitability.</p>
        </div>
      </section>

      <footer className="footer">
        © 2025 AgriShiksha. Empowering Villages, One Lesson at a Time.
      </footer>

      {/* 🔗 Gemini Chatbot floating on the page */}
      <GeminiChatbot />
    </div>
  );
};

export default LandingPage;