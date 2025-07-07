import React, { useState } from 'react';
import './mail.css';

const MailForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      subject,
      message
    };

    const response = await fetch('your_backend_endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus('Sent Successfully');
    } else {
      setStatus('Failed to send. Please try again later.');
    }
  };

  return (
    <div className="mail-form-container">
      <h2>Send Mail</h2>
      <form onSubmit={handleSubmit} className="mail-form">
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input 
            type="text" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="submit-btn">Send</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default MailForm;
