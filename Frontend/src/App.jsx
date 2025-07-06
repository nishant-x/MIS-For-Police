import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components


import Login from "./component/Login/Login.jsx";
import Register from "./component/Register/Register.jsx";
import AdminDashboard from './component/dashboards/AdminDashboard.jsx';
import JawanDashboard from './component/dashboards/JawanDashboard.jsx';
import PhqDashboard from './component/dashboards/PhqDashboard.jsx';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/jawan-dashboard" element={<JawanDashboard />} />
        <Route path="/phq-dashboard" element={<PhqDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
