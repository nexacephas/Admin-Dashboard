import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="auth-page">
      <form className="auth-container">
        <h2>Reset Password</h2>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <button type="submit">Send Reset Link</button>

        <p className="auth-link">
          Remembered your password? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;