import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card.js"; 
import characters from "./components/CharacterList"; // Import sin llaves

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(characters.length).fill(0)
  );

  const cambiarImagen = (index) => {
    const nextIndex = (currentImageIndex[index] + 1) % characters[index].images.length;
    const newImageIndex = [...currentImageIndex];
    newImageIndex[index] = nextIndex;
    setCurrentImageIndex(newImageIndex);
  };

  const CambiarText = (e) => {
    const index = e.target.dataset.index;
    if (e.target.innerHTML === "Tripulacion Mugiwara") {
      e.target.innerHTML = characters[index].name;
    } else {
      e.target.innerHTML = "Tripulacion Mugiwara";
    }
  };

  return (
    <div className="App">
      {characters.map((character, index) => (
        <Card
          key={index}
          name="Tripulacion Mugiwara"
          image={character.images[currentImageIndex[index]]}
          index={index}
          cambiarImagen={() => cambiarImagen(index)}
          CambiarText={CambiarText}
        />
      ))}
    </div>
  );
}

export default App;