import { useState, useEffect } from "react";
import Header from "../components/Header";
import fondoPizza from "../images/fondopizza.webp";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

function Home() {
  const texts = [
    {
      title: "¡Pizzas de la madre patria tradizionale!",
      description:
        "Crujientes, y lo mejor de nuestra cultura... pide ya!",
    },
    {
      title: "¡Sabor en cada bocado!",
      description:
        "Nuestras pizzas Italianas reviven el gusto a querer mas no caigas en la gula",
    },
    {
      title: "¡Come antes que los demas se la coman primero!",
      description:
        "Sabor de la casa tradicional, calidad garantizada... ¡Pide la tuya antes que se acaben!",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home">
        <Header
          title1={texts[index].title}
          description1={texts[index].description}
          fondo={fondoPizza}
        />
      </div>
      <div className="hero">
        <img src={logo} alt="logo" className="navLogo2"/>
        <h2 className="white">¿Qué vamos a pedir hoy?</h2>
        <Link to="/allpizzas">
          <Button buttonText={"Ver Promos"} className="promoBtn" />
        </Link>
      </div>
    </>
  );
}

export default Home;
