import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components

import Login from "./Component/Login/Login.jsx";
import Register from "./Component/Register/Register.jsx";
import AdminDashboard from './Component/dashboards/AdminDashboard.jsx';
import JawanDashboard from './Component/dashboards/JawanDashboard.jsx';
import PhqDashboard from './Component/dashboards/PhqDashboard.jsx';
import Home from './Rajcomponent/Home/Home.jsx';
import Achievement from './Jawan/Achievement/Achievement.jsx';
import Applyleave from './Jawan/leave/apply_leave.jsx';



  const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/jawan-dashboard" element={<JawanDashboard />} />
        <Route path="/phq-dashboard" element={<PhqDashboard />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apply-leave" element={<Applyleave />} />
      </Routes>
    </Router>
  );
};

export default App;
