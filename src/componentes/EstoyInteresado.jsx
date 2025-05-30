import React, { useState } from "react";
import Swal from "sweetalert2";

const EstoyInteresado = ({ isOpen, onClose }) => {
  const initialFormState = {
    nombre: "",
    celular: "",
    direccion: "",
    barrio: "",
    ciudad: "",
  };

  const [formDataState, setFormData] = useState(initialFormState);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleCheckboxChange = (event) => {
    setAceptaTerminos(event.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formDataState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.456744183", formDataState.nombre);
    formData.append("entry.909394965", formDataState.celular);
    formData.append("entry.760312748", formDataState.direccion);
    formData.append("entry.1474851024", formDataState.barrio);
    formData.append("entry.1099306065", formDataState.ciudad);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSeK3HKZN89mWLEpTGaY2PnZG2ef9ew9QcNDHV05XhEc6YyfiA/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    )
      .then(() => {
        Swal.fire({
          title: "Pronto nos pondremos en contacto contigo",
          icon: "success",
          width: "250px",
          draggable: true,
        });
        setFormData(initialFormState); // Limpiar formulario
        onClose(); // Cerrar modal (si aplica)
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h3>¡Te llamamos!</h3>
        <p className="modal-contentP">
          Déjanos tus datos y nos pondremos en contacto contigo.
        </p>
        <p className="close-btn" onClick={onClose}>
          x
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formDataState.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="celular"
              placeholder="Número de celular"
              value={formDataState.celular}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="direccion"
              placeholder="Dirección"
              value={formDataState.direccion}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="barrio"
              placeholder="Barrio"
              value={formDataState.barrio}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad"
              value={formDataState.ciudad}
              onChange={handleChange}
              required
            />
          </div>
          <label className="terminosCondiciones">
            <div>
              <input type="checkbox" required />
            </div>
            <div className="terminosCondicionesTexto">
              Acepto los{" "}
              <a
                href="https://transacciones.tigo.com.co/recargas/terminos-y-condiciones"
                target="_blank"
                rel="noopener noreferrer"
                className="terminosCondicionesLink"
              >
                términos y condiciones
              </a>
            </div>
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default EstoyInteresado;
