import React, { useState } from "react";

const GEMINI_API_KEY = "AIzaSyCBubdPyDt3bvcLUM1xu_YNzZ51qSjt2cU";
export default function GeminiChatbot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const updatedChat = [...chat, { role: "user", text: input }];
    setChat(updatedChat);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: updatedChat.map((msg) => ({
              role: msg.role,
              parts: [{ text: msg.text }],
            })),
          }),
        }
      );
      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      setChat([...updatedChat, { role: "model", text: reply }]);
    } catch (err) {
      setChat([...updatedChat, { role: "model", text: "Error fetching reply." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          padding: 14,
          borderRadius: "50%",
          backgroundColor: "#28a745",
          color: "white",
          fontSize: 18,
          border: "none",
          cursor: "pointer",
        }}
      >
        💬
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 320,
            height: 420,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 10,
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            boxShadow: "0 0 12px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0", textAlign: "center" }}>Ask AI (Gemini)</h4>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              background: "#f9f9f9",
              padding: 6,
              marginBottom: 10,
              borderRadius: 4,
            }}
          >
            {chat.map((msg, i) => (
              <div key={i} style={{ marginBottom: 8, textAlign: msg.role === "user" ? "right" : "left" }}>
                <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.text}
              </div>
            ))}
            {loading && <em>AI is thinking...</em>}
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a question..."
            style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>
      )}
    </>
  );
}