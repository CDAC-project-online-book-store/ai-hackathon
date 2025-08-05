import React from "react";
import { Link } from "react-router-dom";
import "../css/ResetPasswordPage.css";

const ResetPasswordPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (email) {
      console.log("Password reset request for:", email);
      alert(
        "Password reset functionality will be implemented with backend integration.\n\nReset instructions would be sent to: " +
          email
      );
    }
  };

  return (
    <div className="reset-wrapper">
      <div className="back-home">
        <Link to="/login" className="back-link">← Back to Sign In</Link>
      </div>

      <div className="reset-container">
        <div className="logo">
          <h1>Reset Password</h1>
          <p>
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <div className="info-box">
          Please ensure you have access to the email address associated with your library account.
        </div>

        <form id="resetForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your registered email"
              required
            />
          </div>

          <button type="submit" className="btn">Send Reset Instructions</button>
        </form>

        <div className="form-footer">
          <Link to="/login">Remember your password? Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
