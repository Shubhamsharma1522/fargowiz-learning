import React, { useState } from "react";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
    passwordStrength: "",
  });

  const { email, password, error, passwordStrength } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !email.trim()) {
      setFormData({ ...formData, error: "Please enter your email." });
      return;
    }

    if (!password || !password.trim()) {
      setFormData({ ...formData, error: "Please enter your password." });
      return;
    }

    if (password.length < 8) {
      setFormData({
        ...formData,
        error: "Password must be at least 8 characters long.",
      });
      return;
    }

    dispatch(authActions.logIn({ email }));
    console.log(email, "email");
    navigate("/products");

    toast.success("Successfully Logged In!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log("Name and value", e);
    setFormData({
      ...formData,
      [name]: value,
      error: "",

      passwordStrength:
        value.length === 0
          ? ""
          : value.length < 8
          ? "Weak"
          : value.length < 12
          ? "Moderate"
          : "Strong",
    });
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
        <div style={{ marginBottom: "20px" }}></div>
        <button className={classes.button}>Login</button>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
      <div style={{ marginTop: "20px" }}>
        <p>Create Account</p>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
