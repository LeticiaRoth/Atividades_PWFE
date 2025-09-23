// src/components/ImageProfile.jsx
import React, { useState } from 'react';

//Função que altera a imagem com efeito hover
function ImageProfile({ imagem, nome, imagemHover }) {
  const [currentImage, setCurrentImage] = useState(imagem);

  const handleMouseEnter = () => {
    setCurrentImage(imagemHover);
  };

  const handleMouseLeave = () => {
    setCurrentImage(imagem);
  };

  return (
    <div 
      className="perfilImagemContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={currentImage} alt={nome} className="perfilImage" />
    </div>
  );
}

export default ImageProfile;