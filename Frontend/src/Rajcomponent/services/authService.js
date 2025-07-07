import axios from 'axios';

export const loginJawan = async (data) => {
  return axios.post(`${import.meta.env.VITE_BACKEND_LINK}/api/jawan-login`, data, { withCredentials: true });
};

export const fetchCaptcha = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_LINK}/api/captcha`);
  return response.data;
};
