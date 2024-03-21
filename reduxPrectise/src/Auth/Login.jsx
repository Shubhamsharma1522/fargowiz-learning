import React, { useState } from "react";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

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

    // password strength validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // dispatch login action if no errors
    dispatch(authActions.logIn());
    navigate("/products");
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // passworrrd strength indication
    if (newPassword.length === 0) {
      setPasswordStrength("");
    } else if (newPassword.length < 8) {
      setPasswordStrength("Weak");
    } else if (newPassword.length < 12) {
      setPasswordStrength("Moderate");
    } else {
      setPasswordStrength("Strong");
    }
  };

  return (
    <div className={classes.div}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
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
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className={classes.password}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}
        {passwordStrength && (
          <div style={{ marginBottom: "10px" }}>
            Password Strength: {passwordStrength}
          </div>
        )}
        <div style={{ marginBottom: "20px" }}>
          <label>
            <input type="checkbox" name="checkbox" />
            Forgot Password
          </label>
        </div>
        <button className={classes.button}>Login</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <p>Create Account</p>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
