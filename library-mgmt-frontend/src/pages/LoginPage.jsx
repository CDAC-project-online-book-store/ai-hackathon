import React from "react";
import { Link } from "react-router-dom";
import "../css/LoginPage.css";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password) {
      console.log("Login attempt:", { email, password });
      alert("Login functionality will be implemented with backend integration");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="back-home">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>

      <div className="login-container">
        <div className="logo">
          <h1>Sign In</h1>
          <p>Access your library account</p>
        </div>

        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn">Sign In</button>
        </form>

        <div className="form-footer">
          <Link to="/forgot-password">Forgot your password?</Link>

          <div className="divider">Don't have an account?</div>

          <Link to="/register" className="create-account">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
