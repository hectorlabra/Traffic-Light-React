import React, { useState } from 'react';
import './semaphor.css'; // Cambiar la ruta según la ubicación de tus estilos CSS

const Semaphor = () => {
  const [color, setColor] = useState(null);

  const handleLightClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="semaphor-container">
      <div className="pole"></div>
      <div className="lights">
        <div
          className={`light red ${color === 'red' ? 'on' : ''}`}
          onClick={() => handleLightClick('red')}
        ></div>
        <div
          className={`light yellow ${color === 'yellow' ? 'on' : ''}`}
          onClick={() => handleLightClick('yellow')}
        ></div>
        <div
          className={`light green ${color === 'green' ? 'on' : ''}`}
          onClick={() => handleLightClick('green')}
        ></div>
      </div>
    </div>
  );
};

export default Semaphor;
