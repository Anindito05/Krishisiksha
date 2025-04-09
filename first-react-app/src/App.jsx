import { useState } from "react";
import Login from "./FirstComponents/Login"; // ✅ Import Login
import Register from "./FirstComponents/RegisterFile";
import Dashboard from "./FirstComponents/Dashboard";
import LandingPage from "./LandingPage"; // ✅ Ensure this path is correct

function App() {
  const [user, setUser] = useState(localStorage.getItem("loggedInUser"));
  const [showLanding, setShowLanding] = useState(true);

  const handleLogin = (email) => {
    localStorage.setItem("loggedInUser", email);
    setUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setShowLanding(true);
  };

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  return (
    <>
      <Login onLogin={handleLogin} /> {/* 👈 Pass the onLogin prop to Login */}
      <Register />
    </>
  );
}

export default App;
