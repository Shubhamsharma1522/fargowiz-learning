import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //username validation
    if (!username || !username.trim()) {
      setError("Please enter your username.");
      return;
    }

    //email validation
    if (!email || !email.trim()) {
      setError("Please enter your email.");
      return;
    }

    //password validation
    if (!password || !password.trim()) {
      setError("Please enter your password.");
      return;
    }

    // navigatte on login if no errors
    navigate("/login");
  };

  return (
    <div className={classes.register}>
      <div className={classes.formContainer}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.formGroup}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={classes.inputField}
            />
          </div>
          <div className={classes.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.inputField}
            />
          </div>
          <div className={classes.formGroup}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classes.inputField}
            />
          </div>
          {error && <div className={classes.error}>{error}</div>}
          <div className={classes.formGroup}>
            <button className={classes.submitButton}>Register</button>
          </div>
          <div className={classes.formGroup}>
            <p>
              Already have an account?
              <Link to="/login" className={classes.loginLink}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
