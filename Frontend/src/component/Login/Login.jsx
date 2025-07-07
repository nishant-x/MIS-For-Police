import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_LINK}/api/auth/login`, form, {
        withCredentials: true
      });

      const { user } = res.data;
      console.log("Login successful:", user);

      // Redirect based on role
      if (user.role === "admin") {
        navigate("/admin-dashboard", { state: { user } });
      } else if (user.role === "jawan") {
        navigate("/jawan-dashboard", { state: { user } });
      } else if (user.role === "phq") {
        navigate("/phq-dashboard", { state: { user } });
      } else {
        setError("Unknown role. Contact admin.");
      }

    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input name="username" onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
