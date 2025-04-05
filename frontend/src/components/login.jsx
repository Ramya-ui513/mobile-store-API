import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";

const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const res = await axios.post("http://127.0.0.1:5000/login", credentials);
      if (res.data.message === "Login successful") {
        setIsAuthenticated(true);
      }
    } catch (err) {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Admin Login</h2>
      {errorMessage && <p className="login-error">{errorMessage}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;

