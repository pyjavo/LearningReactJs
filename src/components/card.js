import React, { useState } from "react";
import "./carta.css";

function Card({ name, image, status }) {
  const [showStatus, setShowStatus] = useState(false);

  const handleClick = () => {
    setShowStatus(!showStatus); // Alternar visibilidad del estado
  };

  return (
    <div className="card" onClick={handleClick}> {/* Agregar manejador de clic */}
      <img src={image} alt={name} />
      <h2>{name}</h2>
      {showStatus && <p>{status}</p>} {/* Mostrar el estado si showStatus es true */}
    </div>
  );
}
export default Card;
