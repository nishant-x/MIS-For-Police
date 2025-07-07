import React, { useEffect } from "react";
import "./NavBar.css"

const Navbar = ({ setActiveTab }) => {
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector(".nav_bar");
      if (window.scrollY > navBar.offsetHeight) {
        navBar.classList.add("fixed-nav");
      } else {
        navBar.classList.remove("fixed-nav");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav_bar">
      <ul>
        <li><button onClick={() => setActiveTab("home")}>HOME</button></li>
        <li><a href="/login">JAWAN LOGIN</a></li>
        <li><a href="/login_station">STATION LOGIN</a></li>
        <li><a href="/login_phq">PHQ LOGIN</a></li>
        <li><button onClick={() => setActiveTab("services")}>SERVICES</button></li>
        <li><button onClick={() => setActiveTab("about")}>ABOUT US</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
