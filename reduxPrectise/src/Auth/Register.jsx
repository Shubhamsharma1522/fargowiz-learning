import React, { useState } from "react";
import classes from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // username validation
    if (!username || !username.trim()) {
      setError("Please enter your username.");
      return;
    }

    // email validation
    if (!email || !email.trim()) {
      setError("Please enter your email.");
      return;
    }

    // password validation
    if (!password || !password.trim()) {
      setError("Please enter your password.");
      return;
    }

    // navigate to login if no errors
    navigate("/");
  };

  return (
    <div className={classes.register}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.usernamediv}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={classes.username}
          />
        </div>
        <div className={classes.emaildiv}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.email}
          />
        </div>
        <div className={classes.passworddiv}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.password}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}
        <div className={classes.buttondiv}>
          <button className={classes.button}>Register</button>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
