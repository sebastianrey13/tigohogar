import React from "react";
import { Link } from "react-router-dom";
import logoBlanco from "../../public/imagenes/logo_tigo_letras_blancas.png";
import logowp from "../../public/imagenes/icon-wp.png";
import telefonoBlanco from "../../public/imagenes/llamada-telefonica.png";

const Header = () => {
  return (
    <div>
      <div className="lineaServicioCliente">
        <p>Línea de servicio al cliente 01 8000 42 2222</p>
      </div>
      <div className="header">
        <Link className="logoTigo" to={"/home"}>
          <img className="logoTigo" src={logoBlanco} alt="logo-blanco" />
        </Link>
        <a href="tel:+573152236666" className="llamarHeader boton">
          <img src={telefonoBlanco} alt="" />
          <div>
            <p className="llamarHeaderNumero">3152236666</p>
            <p className="llamarHeaderInfo">Línea exclusiva de ventas</p>
          </div>
        </a>
      </div>
      <div className="headerLogo">
        <a
          href="https://wa.me/573152236666"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logoWpHeader" src={logowp} alt="" srcset="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
