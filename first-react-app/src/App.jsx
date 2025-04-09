import { useState } from "react";
import Login from "./FirstComponents/Login";
import Register from "./FirstComponents/RegisterFile";
import Dashboard from "./FirstComponents/Dashboard";
import LandingPage from "./LandingPage";

function App() {
  const [user, setUser] = useState(localStorage.getItem("loggedInUser"));
  const [showLanding, setShowLanding] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const handleLogin = (username) => {
    localStorage.setItem("loggedInUser", username);
    setUser(username);
  };
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setShowLanding(true);  // Go back to Landing after logout
    setShowLogin(true);    // Default to login page next time
  };
  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }
  if (showLanding) {
    return (
      <LandingPage
        onGetStarted={() => setShowLanding(false)} // Triggered by Get Started / Login / Register
        onLoginClick={() => {
          setShowLanding(false);
          setShowLogin(true);
        }}
        onRegisterClick={() => {
          setShowLanding(false);
          setShowLogin(false);
        }}
      />
    );
  }
  return (
    <div>
      {showLogin ? (
        <>
          <Login
            onLogin={handleLogin}
            onBack={() => setShowLanding(true)} // Go back to LandingPage
          />
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Don't have an account?{" "}
            <button onClick={() => setShowLogin(false)}>Register</button>
          </p>
        </>
      ) : (
        <>
          <Register onBack={() => setShowLanding(true)} />
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Already have an account?{" "}
            <button onClick={() => setShowLogin(true)}>Login</button>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
