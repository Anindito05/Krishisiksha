import { useState } from "react";
import Login from "./FirstComponents/Login";
import Register from "./FirstComponents/RegisterFile";
import Dashboard from "./FirstComponents/Dashboard";
import LandingPage from "./LandingPage";

function App() {
  const [user, setUser] = useState(localStorage.getItem("loggedInUser"));

  const handleLogin = (email) => {
    localStorage.setItem("loggedInUser", email);
    setUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <Register />
        </>
      )}
    </div>
  );
}

export default App;
