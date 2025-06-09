
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al obtener pizza:", err));
  }, [id]);

  if (!pizza) return <div>Cargando pizza...</div>;

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default Pizza;
