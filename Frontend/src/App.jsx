import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components
import Header from "./component/HEAder/header";
import Navbar from "./component/navBar/Nav";
import Marquee from "./component/navBar/Marquee";
import LoginCards from "./component/Logins/LoginCards";
// import Foooter from "./component/footr/Futer";
import Services from "./component/servics/Services";
import AboutUs from "./component/about/Aboutus";
// import Caselistjawan from "./component/case List/caselistJawan";
import CaselistPHQ from "./component/case List/caselistPHQ";
import StationHome from "./component/StationHome/StationHome";
const App = () => {
  return (

    <ErrorBoundary fallback={<p>Something went wrong</p>}>
  <Router>
      {/* Common Components like Header, Navbar, Marquee */}
      <Header />
      <Navbar />
      <Marquee />

      <Routes>
        <Route path="/" element={<StationHome />} />
        <Route path="/StationLogin" element={<LoginCards />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/caselist-jawan" element={<CaselistJawan />} />
        <Route path="/caselist-phq" element={<CaselistPHQ />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      {/* Footer at the bottom */}
      <Footer />
    </Router>

</ErrorBoundary>

  

  );
};

export default App;
