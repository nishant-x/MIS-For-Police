import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './captcha.css';

const CaptchaBox = ({ onCaptchaChange }) => {
  const [captcha, setCaptcha] = useState('');

  const fetchCaptcha = async () => {
    try {
      const response = await axios.get('http://localhost/path-to-your-script/generate_captcha.php');
      setCaptcha(response.data);
      onCaptchaChange(response.data);
    } catch (error) {
      console.error('Error fetching captcha:', error);
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  return (
    <div className="captcha-box">
      <input type="text" value={captcha} disabled />
      <button type="button" onClick={fetchCaptcha}>🔄</button>
    </div>
  );
};

export default CaptchaBox;
