import React from "react";
import "./LoginCard.css"

const cards = [
  {
    title: "JAWAN LOGIN",
    desc: "Secure Access for Jawans",
    img: "https://hyderabadpolice.gov.in/img/officers/AddlCPCrimes.png",
    link: "/login"
  },
  {
    title: "STATION LOGIN",
    desc: "Station Authentication",
    img: "https://cdn.bignewsnetwork.com/ani1677408014.jpg",
    link: "/login_station"
  },
  {
    title: "PHQ LOGIN",
    desc: "Headquarters Access",
    img: "https://www.findeasy.in/wp-content/uploads/2020/08/Bhopal-Police-Headquarters.jpg",
    link: "/login_phq"
  }
];

const LoginCards = () => (
  <section className="main_body">
    {cards.map((card, index) => (
      <div className="login" key={index}>
        <h1>{card.title}</h1>
        <h3>{card.desc}</h3>
        <img src={card.img} alt={card.title} />
        <a href={card.link}>
          <button className="btn">LOGIN</button>
        </a>
      </div>
    ))}
  </section>
);

export default LoginCards;
