import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./JawanLogin.css"
const Login = () => {
  const [form, setForm] = useState({ username: '', password: '', captcha: '' });
  const [captcha, setCaptcha] = useState('');
  const [error, setError] = useState('');

  const fetchCaptcha = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/captcha'); // Backend route
      setCaptcha(res.data.captcha);
    } catch (err) {
      console.error('Captcha fetch failed');
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/jawan-login', form, {
        withCredentials: true
      });
      if (res.data.success) {
        window.location.href = '/jawan-home'; // Redirect
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Sign in to your account</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} required />

        <div className="captcha-box">
          <input type="text" value={captcha} disabled />
          <button type="button" onClick={fetchCaptcha}>🔄</button>
        </div>

        <input
          type="text"
          name="captcha"
          onChange={handleChange}
          placeholder="Enter Captcha"
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">SIGN IN</button>
      </form>
      <a href="/forgot-jawan">Forgot password?</a>
    </div>
  );
};

export default Login;
