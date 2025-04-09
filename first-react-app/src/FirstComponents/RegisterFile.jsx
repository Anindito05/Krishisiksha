import { useState } from "react";
import "./login.css"; 

function Register({ onBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ username, password, state }));
    alert("Registered successfully! Now you can login.");

    setUsername("");
    setPassword("");
    setState("");
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Living State"
            value={state}
            required
            onChange={(e) => setState(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <button className="back-button" onClick={onBack}>← Back</button>
      </div>
    </div>
  );
}

export default Register;
