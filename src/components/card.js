import React from "react";
import "./carta.css"; // Importa el archivo CSS
const Card = ({ name, image, index, cambiarImagen, CambiarText }) => {
  return (
    <div className="card-container">
      <img
        onClick={(e) => cambiarImagen(e)}
        src={image}
        alt={name}
        data-index={index}
      />
      <div
        onClick={(e) => CambiarText(e)}
        className="name"
        data-index={index}
      >
        {name}
      </div>
    </div>
  );
};

export default Card;