import React, { useState, useEffect } from "react";
import EstoyInteresado from "./EstoyInteresado";
import "../estilos/cardPlanes.css";

const CardPlanes = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="cardPlanes">
      <div className="nombrePlan">
        <h2>Internet + TV + Plan pospago Ilimitado</h2>
        <h3>500 megas</h3>
      </div>
      <div className="descuento">
        <p>
          <b>50% Dto</b> Exclusivo Online
        </p>
      </div>
      <div className="informacionPlan">
        <p className="informacionPlan-mesDePago">
          Compra hoy y paga en <b>JULIO</b>
        </p>
        <div className="informacionPlan-precio">
          <p className="informacionPlan-precio-precioDescuento">$69.950</p>
          <div className="informacionPlan-precio-c2">
            <p className="informacionPlan-precio-c2-mesesPromo">x 1 Mes</p>
            <p className="informacionPlan-precio-c2-despues">
              Despues <s>$139.900</s>
            </p>
          </div>
        </div>
        <p onClick={handleOpenPopup} className="botonTeLlamamos">
          Te llamamos
        </p>
        <EstoyInteresado isOpen={isPopupOpen} onClose={handleClosePopup} />
        <a
          // href="https://wa.me/573152236666"
          href="https://wa.me/573152236666?text=Estuve%20mirando%20tu%20página%20web%20y%20me%20interesa%20el%20plan%20fulltigo%20trio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="comprarWhatsApp">Comprar en WhatsApp</p>
        </a>
      </div>
      <div className="detallesPlan">
        <p className="detallesPlan-ver">Ver detalles +</p>
      </div>
    </div>
  );
};

export default CardPlanes;
