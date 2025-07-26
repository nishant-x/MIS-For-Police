import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const PhqDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  // Redirect to login if user is not passed (e.g. on page refresh)
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <p>Role: {user?.role}</p>
      <p>Logged in as: {user?.username}</p>
    </div>
  );
};

export default PhqDashboard
