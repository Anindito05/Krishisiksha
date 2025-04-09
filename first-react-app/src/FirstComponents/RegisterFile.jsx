import {useState} from "react";

function Register(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleRegister=(e)=>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Registered successfully! You can now login.");
  };
  return (
    <div style={{maxWidth: "400px",margin: "auto"}}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e)=>setEmail(e.target.value)}
          style={{width: "100%",padding: "8px",marginBottom: "10px"}}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e)=>setPassword(e.target.value)}
          style={{width: "100%",padding:"8px",marginBottom: "10px"}}
        />
        <button type="submit" style={{padding: "10px 20px"}}>
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
