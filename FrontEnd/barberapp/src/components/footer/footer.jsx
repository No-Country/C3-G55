import React from "react";

const Footer = () => {
  return (
    <>
      <div id="horarios">
        <div className="Horarios">
          <h2>Horarios</h2>
        </div>
        <div id="horario-data">
          <p>Lunes a Viernes: 10:00 a 19:00</p>
          <p>Sábados: 10:00 a 21:00</p>
          <p>Feriados: 11:00 a 17:00</p>
          <p>Domingos: cerrados </p>
        </div>
      </div>
      <div id="contactanos">
        <div className="title">
          <h2>Contáctanos</h2>
        </div>
        <div id="data">
          <p>
            <img src="https://i.imgur.com/lveMlkd.png" alt="mail" />{" "}
            info@barberos.com.ar
          </p>
          <p>
            <img src="https://i.imgur.com/MP5Y3sJ.png" alt="telefono" />
            +5491163083418
          </p>
          <p>
            <img src="https://i.imgur.com/sTmxuub.png" alt="ubicacion" />
            Av. Federico Lacroze ###
          </p>
        </div>
        <div id="redes">
          <div className="title">
            <h2>Redes</h2>
          </div>
          <div id="logos">
            <img src="https://i.imgur.com/2GKA6ab.png" alt="facebook" />
            <img src="https://i.imgur.com/IAh8kT0.png" alt="twitter" />
            <img src="https://i.imgur.com/IAh8kT0.png" alt="instagram" />
            <img src="https://i.imgur.com/eIokluS.png" alt="tiktok" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
