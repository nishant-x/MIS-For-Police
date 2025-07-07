import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components

import Login from "./Component2/Login/Login.jsx";
import Register from "./component/Register/Register.jsx";
import AdminDashboard from './Component2/dashboards/AdminDashboard.jsx';
import JawanDashboard from './Component2/dashboards/JawanDashboard.jsx';
import PhqDashboard from './Component2/dashboards/PhqDashboard.jsx';
import Home from './component/Home/Home.jsx';



  const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/jawan-dashboard" element={<JawanDashboard />} />
        <Route path="/phq-dashboard" element={<PhqDashboard />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
