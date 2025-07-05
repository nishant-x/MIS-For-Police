import React from "react";
import "./Services.css"

const services = [
  ["Emergency Response", "For immediate assistance, dial 100 or your local emergency number."],
  ["Crime Reporting", "To report a crime or provide information, contact your local police station."],
  ["Traffic Control", "For traffic-related issues or accidents, call the traffic police helpline."],
  ["Women Safety", "If you are in need of support for women's safety, contact the National Domestic Violence Hotline"],
  ["Community Policing", "Get involved in community policing programs and initiatives to improve safety in your area."]
];

const Services = () => (
  <div className="services">
    {services.map(([title, text], i) => (
      <section className="service" key={i}>
        <h2>{title}</h2>
        <p>{text}</p>
      </section>
    ))}
  </div>
);

export default Services;
