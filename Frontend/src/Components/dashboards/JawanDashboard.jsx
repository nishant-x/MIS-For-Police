import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Achievement from '../../Jawan/Achievement/Achievement';
import LiveJawanStatus from '../../Jawan/LiveJawanStatus/LiveJawanStatus';

const JawanDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;
  // console.log("User in JawanDashboard:", user);

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
      <Achievement user={user} />
      <LiveJawanStatus user={user} />
    </div>
  );
};

export default JawanDashboard;
