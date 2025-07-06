import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "user", // default role
  });
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      setMessage("✅ " + res.data.message);
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.error || "Registration failed"));
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Register New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input name="username" onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" onChange={handleChange} value={form.role}>
            <option value="admin">admin</option>
            <option value="officer">jawan</option>
            <option value="user">phq</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ marginTop: "10px", color: message.startsWith("✅") ? "green" : "red" }}>{message}</p>}
    </div>
  );
};

export default Register;
