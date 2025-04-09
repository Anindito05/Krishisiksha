function Dashboard({ user, onLogout }) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Welcome, {user}!</h2>
        <button onClick={onLogout} style={{ padding: "10px 20px", marginTop: "20px" }}>
          Logout
        </button>
      </div>
    );
  }
  
  export default Dashboard;
  