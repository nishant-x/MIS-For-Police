import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components

//import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AdminDashboard from './components/dashboards/AdminDashboard.jsx';
import JawanDashboard from './components/dashboards/JawanDashboard.jsx';
import PhqDashboard from './components/dashboards/PhqDashboard.jsx';
import Home from './Rajcomponent/Home/Home.jsx';
import Achievement from './Jawan/Achievement/Achievement.jsx';
import Applyleave from './Jawan/leave/apply_leave.jsx';



  const App = () => {
  return (
    <Router>
      <Routes>
{/*         <Route path="/" element={<Login />} /> */}
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
