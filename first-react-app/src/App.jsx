import { useState } from "react";
import Login from "./FirstComponents/Login";
import Register from "./FirstComponents/RegisterFile";
import Dashboard from "./FirstComponents/Dashboard";
import LandingPage from "./LandingPage";

function App() {
  // Stores the currently logged-in user's username
  const [user, setUser] = useState(localStorage.getItem("loggedInUser"));

  // Determines if the Landing Page should be shown
  const [showLanding, setShowLanding] = useState(true);

  // Controls whether to show Login or Register (true = Login, false = Register)
  const [showLogin, setShowLogin] = useState(true);

  // Called when user logs in successfully
  const handleLogin = (username) => {
    localStorage.setItem("loggedInUser", username);
    setUser(username);
  };

  // Logout clears the logged-in user and goes back to landing
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setShowLanding(true);  // Go back to Landing after logout
    setShowLogin(true);    // Default to login page next time
  };

  // If a user is logged in, show the Dashboard
  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  // If user hasn't clicked Get Started yet, show Landing
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

  // Otherwise, show either Login or Register
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
