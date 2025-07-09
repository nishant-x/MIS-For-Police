import React, { useState } from "react";

const ApplyLeave = () => {
  const [formData, setFormData] = useState({
    reason: "",
    fromDate: "",
    toDate: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      const token = localStorage.getItem("token"); 

    const res = await fetch("http://localhost:5000/api/leave/apply-leave", {
      method: "POST",
      credentials: "include", // send cookie with JWT
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Leave applied successfully!");
      setFormData({ reason: "", fromDate: "", toDate: "" });
    } else {
      setMessage(data.error || "Something went wrong");
    }
  };

  return (
    <div>
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="reason"
          placeholder="Reason"
          value={formData.reason}
          onChange={handleChange}
          required
        /><br />
        <input
          type="date"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleChange}
          required
        /><br />
        <input
          type="date"
          name="toDate"
          value={formData.toDate}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Apply Leave</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ApplyLeave;
