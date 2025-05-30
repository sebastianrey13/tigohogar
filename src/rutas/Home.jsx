import React, { useState, useEffect } from "react";
import "../estilos/home.css";

import imgFullTigoTrio from "../../public/imagenes/fulltigotrio.png";
import imgFullTigoDuo from "../../public/imagenes/fulltigoduo.png";

const Home = () => {
  const images = [imgFullTigoTrio, imgFullTigoDuo];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % images.length
    );
  };

  // Función para volver a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Avance automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div>
      {/* carrusel */}
      <div className="carrusel">
        <button
          className="carrusel-boton carrusel-boton-izquierda"
          onClick={prevSlide}
        >
          ‹
        </button>
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="carrusel-imagen"
        />
        <button
          className="carrusel-boton carrusel-boton-derecha"
          onClick={nextSlide}
        >
          ›
        </button>
      </div>
      {/* llamame */}
      <div className="teLlamamos">
        <p className="teLlamamosTitulo">!Te llamamos!</p>
        <p className="boton teLlamamosBoton">Estoy interesado</p>
      </div>
    </div>
  );
};

export default Home;
