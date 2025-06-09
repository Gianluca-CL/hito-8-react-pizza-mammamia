
import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pizzas") // Asegúrate de que esta URL coincida con tu backend
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error al cargar las pizzas:", error));
  }, []);

  return (
    <>
      <Header
        title={"¡Pizzería Mamma Mia!"}
        description={"¡Tenemos las mejores pizzas que podrás encontrar!"}
        fondo={
          "https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_1280.jpg"
        }
        style={{
          backgroundPosition: "center 61%",
          backgroundSize: "cover",
        }}
        className={"header p-6"}
      />

      <div className="container mt-3 mb-3">
        <div className="row">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="col-12 col-lg-4 mb-4 d-flex justify-content-center"
            >
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
