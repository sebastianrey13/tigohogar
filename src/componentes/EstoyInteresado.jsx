import React, { useState } from "react";
import Swal from "sweetalert2";

const EstoyInteresado = ({ isOpen, onClose, plan }) => {
  const initialFormState = {
    nombre: "",
    celular: "",
    direccion: "",
    barrio: "",
    ciudad: "",
    plan: plan || "",
  };

  const [formDataState, setFormData] = useState(initialFormState);

  React.useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, plan: plan || "" }));
    }
  }, [isOpen, plan]);

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
    formData.append("entry.1776771898", formDataState.plan);

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
        <p
          className="close-btn"
          onClick={() => {
            setFormData(initialFormState);
            onClose();
          }}
        >
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
            <select
              id="ciudad"
              name="ciudad"
              value={formDataState.ciudad}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="Bucaramanga">Bucaramanga</option>
              <option value="Floridablanca">Floridablanca</option>
              <option value="Piedecuesta">Piedecuesta</option>
              <option value="Girón">Girón</option>
            </select>
          </div>
          <div>
            <select
              id="plan"
              name="plan"
              value={formDataState.plan}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un plan</option>
              <option value="Full Tigo Trio">Full Tigo Trio</option>
              <option value="Full Tigo Duo">Full Tigo Duo</option>
              <option value="Duo Play">Internet + TV</option>
              <option value="Individual">Internet</option>
            </select>
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
