import React, { useState } from "react";
import classes from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const { username, email, password, confirmPassword, error } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !username.trim()) {
      setFormData({ ...formData, error: "Please enter your username." });
      return;
    }

    if (!email || !email.trim()) {
      setFormData({ ...formData, error: "Please enter your email." });
      return;
    }

    if (!password || !password.trim()) {
      setFormData({ ...formData, error: "Please enter your password." });
      return;
    }

    if (password !== confirmPassword) {
      setFormData({
        ...formData,
        error: "Please enter a valid confirm password",
      });
      return;
    }

    navigate("/");

    toast.success("Successfully Registered!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, error: "" });
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            className={classes.password}
          />
        </div>
        <div className={classes.passworddiv}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleInputChange}
            className={classes.password}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}
        <div className={classes.buttondiv}>
          <button className={classes.button}>Register</button>
          <Toaster position="top-center" reverseOrder={false} />
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
