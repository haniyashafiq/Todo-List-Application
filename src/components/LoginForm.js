import React, { useState } from 'react';
import './LoginForm.css';

export const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    alert(`Logged in with email: ${email}`);
    onClose();
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-btn">
            Login
          </button>
          <button type="button" className="auth-btn close-btn" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};
