import React, { useState } from 'react';
import './ForgotJawan.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Check your mail to get Password');
    window.location.href = '/login';
  };

  return (
    <section className="main_login">
      <nav className="header">
        <p className="portal_name">MP Police Central Command</p>
        <img src="/3logo3.png" alt="Logo" />
      </nav>

      <div className="container">
        <div className="login_div leftdiv">
          <img src="/3logo3.png" alt="Logo" />
          <h3>Welcome to MP Police Central Command</h3>
          <h1>Ministry of Home Affairs</h1>
        </div>

        <div className="login_div rightdiv">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h1>RESET PASSWORD</h1>
              <h5>You can get your password here</h5>
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <h6>
              <a href="/login">
                back to <span>login</span>
              </a>
            </h6>
            <button type="submit" name="send">SEND MY PASSWORD</button>
          </form>
        </div>
      </div>

      <footer>
        <p>© 2024 Ministry of Home Affairs, Madhay Pradesh. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default ForgotPassword;
