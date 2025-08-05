import React from "react";
import { Link } from "react-router-dom";
import "../css/RegisterPage.css";

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    console.log("Registration attempt:", formData);
    alert("Registration functionality will be implemented with backend integration");
  };

  return (
    <div className="register-wrapper">
      <div className="back-home">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>

      <div className="register-container">
        <div className="logo">
          <h1>Join Our Library</h1>
          <p>Create your member account</p>
        </div>

        <form id="registerForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>

          <div className="terms">
            By creating an account, you agree to our terms of service and privacy policy.
            Monthly membership fees apply as per library policy.
          </div>

          <button type="submit" className="btn">Create Account</button>
        </form>

        <div className="form-footer">
          <div className="divider">Already have an account?</div>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
