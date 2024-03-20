import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import classes from './Login.module.css'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

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

    // Dispatch login action if no errors
    dispatch(authActions.logIn());
    navigate("/");
  };

  return (
    <div className={classes.login}>
      <div className={classes.formContainer}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={classes.form}>
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
            <div className={classes.checkbox}>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Forgot Password</label>
            </div>
          </div>
          <div className={classes.formGroup}>
            <button className={classes.submitButton}>LogIn</button>
          </div>
          <div className={classes.formGroup}>
            <p>Create Account</p>
            <Link to="/register" className={classes.registerLink}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
