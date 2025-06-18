import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth-page">
      <form className="auth-container">
    <h2>Register</h2>
<form>
  <label>Full Name</label>
  <input type="text" placeholder="John Doe" />

  <label>Email</label>
  <input type="email" placeholder="Enter your email" />

  <label>Password</label>
  <input type="password" placeholder="Create a password" />

  <button type="submit">Register</button>
</form>
<div className="auth-links">
  <Link to="/login">Already have an account?</Link>
</div>

      </form>
    </div>
  );
};

export default Register;
