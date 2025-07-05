import axios from 'axios';

export const loginJawan = async (data) => {
  return axios.post('http://localhost:5000/api/jawan-login', data, { withCredentials: true });
};

export const fetchCaptcha = async () => {
  const response = await axios.get('http://localhost:5000/api/captcha');
  return response.data;
};
