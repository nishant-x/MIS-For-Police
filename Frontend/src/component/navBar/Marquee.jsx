import React from "react";
import "./MarqueeBanner.css"

const Marquee = () => (
  <marquee behavior="scroll" direction="left" scrollAmount="10" className="marquee-container">
    <span className="important-update">
      <strong>🔔 Important Update:</strong> Exciting new features added to MP Police Central Command! Check them out now! <strong>🚀</strong>
    </span>
    <span className="blink-text">|| Stay safe and informed ||</span>
    <span className="marquee-links">
      <a href="https://mpdial100.in/About" style={{ color: "red" }}>🚨 Emergency Contact: Dial 100</a> |
      <a href="https://www.indiatoday.in/" style={{ color: "blue" }}>📰 Latest News & Updates</a> |
      <a href="https://www.instagram.com/mppolicedeptt/?hl=en" style={{ color: "green" }}>👥 Join Community Policing Programs</a> |
      <a href="https://police.ucla.edu/prevention-education/personal-safety-tips" style={{ color: "orange" }}>🛡 Safety Tips for Citizens</a>
    </span>
  </marquee>
);

export default Marquee;
