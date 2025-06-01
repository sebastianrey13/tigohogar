import React, { useState } from "react";
import EstoyInteresado from "./EstoyInteresado";
import "../estilos/cardPlanes.css";

const CardPlanes = ({ nombre, megas, tipo, pagaEn, precioTotal, precioDescuento, mesesDescuento, detalles, mensaje }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [abrirDetalles, setAbrirDetalles] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="cardPlanes">
      <div className="nombrePlan">
        <h2>{nombre}</h2>
        <h3>{megas}</h3>
        <p>{tipo}</p>
      </div>
      <div className="descuento">
        <p>Descuento Exclusivo Online</p>
      </div>
      <div className="informacionPlan">
        <p className="informacionPlan-mesDePago">Compra hoy y paga en <b>{pagaEn}</b></p>
        <div className="informacionPlan-precio">
          <p className="informacionPlan-precio-precioDescuento">${precioDescuento.toLocaleString()}</p>
          <div className="informacionPlan-precio-c2">
            <p className="informacionPlan-precio-c2-mesesPromo">x {mesesDescuento}</p>
            <p className="informacionPlan-precio-c2-despues">Después <s>${precioTotal.toLocaleString()}</s></p>
          </div>
        </div>
        <p onClick={handleOpenPopup} className="botonTeLlamamos">Te llamamos</p>
        <EstoyInteresado isOpen={isPopupOpen} onClose={handleClosePopup} plan={nombre}/>
        <a href={`https://wa.me/573152236666?text=${mensaje}`} target="_blank" rel="noopener noreferrer">
          <p className="comprarWhatsApp">Comprar en WhatsApp</p>
        </a>
      </div>
      <div className="detallesPlan">
        <p onClick={() => setAbrirDetalles(!abrirDetalles)} className="detallesPlan-ver">
          {abrirDetalles ? "Ocultar detalles -" : "Ver detalles +"}
        </p>
        <div className={`detallesPlan-contenido ${abrirDetalles ? "abierto" : "cerrado"}`}>
          {detalles.map((detalle, index) => (
            <div key={index}>
              <div className="detalle-nombre">
                <img className="icono-detalles" src={detalle.imagen1} alt={detalle.nombre1} />
                <p>{detalle.nombre1}</p>
              </div>
              {detalle.caracteristica1 && (
                <ul className="check-list">
                  {Object.keys(detalle)
                    .filter(key => key.startsWith("caracteristica"))
                    .map((key, i) => (
                      <li key={i}>{detalle[key]}</li>
                    ))}
                </ul>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPlanes;