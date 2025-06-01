import React, { useState, useEffect } from "react";
import "../estilos/home.css";

import imgFullTigoTrioMovil from "../../public/imagenes/fulltigotrio.png";
import imgFullTigoDuoMovil from "../../public/imagenes/fulltigoduo.png";
import imgFullTigoTrioPc from "../../public/imagenes/fulltigotriopc.png";
import imgFullTigoDuoPc from "../../public/imagenes/fulltigoduopc.png";

import EstoyInteresado from "../componentes/EstoyInteresado";
import CardPlanes from "../componentes/CardPlanes";

const Home = () => {
  // Arrays de imágenes para móvil y PC
  const imagesMobile = [imgFullTigoTrioMovil, imgFullTigoDuoMovil];
  const imagesPc = [imgFullTigoTrioPc, imgFullTigoDuoPc];

  // Estado para saber si es móvil/tablet (ancho <= 768px)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Detectar cambios en el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Seleccionar imágenes según tamaño de pantalla
  const images = isMobile ? imagesMobile : imagesPc;

  // Funciones para cambiar imagen en carrusel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Avance automático del carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [images]);

  // Datos de planes (igual que antes)
  const planes = [
    {
      id: 1,
      nombre: "Full Tigo Trio",
      tipo: "Internet + TV + Plan pospago Ilimitado",
      megas: "500 megas",
      pagaEn: "JUNIO",
      precioTotal: 139900,
      precioDescuento: 69950,
      mesesDescuento: "1 Mes",
      mensaje: 'Hola,%20me%20interesa%20adquirir%20el%20plan%20*FULLTIGO*%20*TRIO*%20y%20obtener%20mi%20descuento',
      detalles: [
        {
          nombre1: "Móvil",
          imagen1: "../../public/imagenes/telefono-movil.png",
          caracteristica1: "Recibe GB ilimitadas",
          caracteristica2: "15GB para compartir",
          caracteristica3: "Voz y SMS ilimitados a todo destino nacional",
        },
        {
          nombre1: "Internet",
          imagen1: "../../public/imagenes/wifi.png",
          caracteristica1: "500 Megas de velocidad",
          caracteristica2: "Internet ilimitado",
        },
        {
          nombre1: "Televisión Digital TIGO Avanzado",
          imagen1: "../../public/imagenes/television.png",
          caracteristica1: "124 canales HD",
          caracteristica2: "28 Canales SD",
          caracteristica3: "50 de audio",
        },
        {
          nombre1: "Incluido con descuento del 100% por 12 meses",
          imagen1: "../../public/imagenes/hbo.png",
        },
        {
          nombre1: "Incluido con descuento del 100% por 12 meses",
          imagen1:
            "https://www.winsportsmas.com/sites/default/files/inline-images/WinfutbolNaranja.png",
        },
      ],
    },
    {
      id: 2,
      nombre: "Full Tigo Duo",
      tipo: "Internet + Plan pospago Ilimitado",
      megas: "500 megas",
      pagaEn: "JUNIO",
      precioTotal: 109900,
      precioDescuento: 54950,
      mesesDescuento: "1 Mes",
      mensaje: 'Hola,%20me%20interesa%20adquirir%20el%20plan%20*FULLTIGO*%20*DUO*%20y%20obtener%20mi%20descuento',
      detalles: [
        {
          nombre1: "Móvil",
          imagen1: "../../public/imagenes/telefono-movil.png",
          caracteristica1: "Recibe GB ilimitadas",
          caracteristica2: "15GB para compartir",
          caracteristica3: "Voz y SMS ilimitados a todo destino nacional",
        },
        {
          nombre1: "Internet",
          imagen1: "../../public/imagenes/wifi.png",
          caracteristica1: "500 Megas de velocidad",
          caracteristica2: "Internet ilimitado",
        },
        {
          nombre1: "Incluido con descuento del 100% por 12 meses",
          imagen1: "../../public/imagenes/hbo.png",
        },
        {
          nombre1: "Incluido con descuento del 100% por 12 meses",
          imagen1:
            "https://www.winsportsmas.com/sites/default/files/inline-images/WinfutbolNaranja.png",
        },
      ],
    },
    {
      id: 3,
      nombre: "Duo Play",
      tipo: "Internet + TV",
      megas: "500 megas",
      pagaEn: "AGOSTO",
      precioTotal: 87675,
      precioDescuento: 58450,
      mesesDescuento: "2 Meses",
      mensaje: 'Hola,%20me%20interesa%20adquirir%20el%20plan%20de%20*INTERNET*%20*y*%20*TV*%20Duo%20y%20obtener%20mi%20descuento',
      detalles: [
        {
          nombre1: "Internet",
          imagen1: "../../public/imagenes/wifi.png",
          caracteristica1: "500 Megas de velocidad",
          caracteristica2: "Internet ilimitado",
        },
        {
          nombre1: "Televisión Digital TIGO Avanzado",
          imagen1: "../../public/imagenes/television.png",
          caracteristica1: "124 canales HD",
          caracteristica2: "28 Canales SD",
          caracteristica3: "50 de audio",
        },
      ],
    },
    {
      id: 4,
      nombre: "Individual",
      tipo: "Internet",
      megas: "500 megas",
      pagaEn: "AGOSTO",
      precioTotal: 63120,
      precioDescuento: 39450,
      mesesDescuento: "2 Meses",
      mensaje: 'Hola,%20me%20interesa%20adquirir%20el%20plan%20de%20solo%20*INTERNET*%20y%20obtener%20mi%20descuento',
      detalles: [
        {
          nombre1: "Internet",
          imagen1: "../../public/imagenes/wifi.png",
          caracteristica1: "500 Megas de velocidad",
          caracteristica2: "Internet ilimitado",
        },
      ],
    },
  ];

  // Funciones popup
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="home">
      <div className="promocion-tigo">
        <h1>TIGO internet hogar</h1>
        <h2>
          Adquiere hoy <b>Full Tigo</b>, <b>Internet</b> y <b>TV</b> a los
          mejores precios
        </h2>
        <h3>
          Instalación <b>GRATIS</b>
        </h3>
      </div>
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
      <div className="teLlamamos">
        <p className="teLlamamosTitulo">!Te llamamos!</p>
        <p onClick={handleOpenPopup} className="boton teLlamamosBoton">
          Estoy interesado
        </p>
        <EstoyInteresado isOpen={isPopupOpen} onClose={handleClosePopup} />
      </div>
      <div className="planes">
        {planes.map((plan) => (
          <CardPlanes
            key={plan.id}
            nombre={plan.nombre}
            megas={plan.megas}
            tipo={plan.tipo}
            pagaEn={plan.pagaEn}
            precioTotal={plan.precioTotal}
            precioDescuento={plan.precioDescuento}
            mesesDescuento={plan.mesesDescuento}
            mensaje={plan.mensaje}
            detalles={plan.detalles}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
