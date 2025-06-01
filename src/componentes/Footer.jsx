import React from "react";
import logoBlanco from "../../public/imagenes/logo_tigo_letras_blancas.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contenedor">
          <h3>Tigo Colombia</h3>
          <p>Conectando hogares y empresas desde siempre.</p>
      </div>
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} Tigo Colombia. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
