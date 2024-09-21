import React from "react";
import "./App.css";
import Card from "./components/card"; // Importamos el componente de la tarjeta
import $imag from "./Imagenes/Law.png";
import $imag1 from "./Imagenes/DonFlamingo.png";
import $imag2 from "./Imagenes/Corazon.png";

function App() {
  // Creamos un array de objetos con los nombres y las imágenes
  const characters = [
    { name: "Trafalgar Law", image: $imag,  status: "Estado: Se esta recuperando" },
    { name: "Donquixote Doflamingo", image: $imag1, status: "Estado: Derrotado(Preso)"  },
    { name: "Donquixote Rosinante", image: $imag2, status: "Estado: Fallecio" },
  ];

  return (
    <div className="card-container">
      {characters.map((character, index) => (
        <Card key={index} 
        name={character.name} 
        image={character.image}  
        status={character.status} />
      ))}
    </div>
  );
}

export default App;
