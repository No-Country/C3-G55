import React from "react";

const Footer = () => {
  return (
    <>
    <div id="footer">
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
      <div id="contacto">
        <div className="title">
          <h2>Contacto</h2>
        </div>
        <div id="data">
          <div id="text">
          <img src="https://i.imgur.com/lveMlkd.png" alt="mail" />
          <p>
            info@barberos.com.ar
          </p>
          </div>
          <div id="text">
          <img src="https://i.imgur.com/MP5Y3sJ.png" alt="telefono" />
          <p>
            +5491163083418
          </p>
          </div>
          <div id="text">
          <img src="https://i.imgur.com/sTmxuub.png" alt="ubicacion" />
          <p>
            Av. Federico Lacroze ###
          </p>
          </div>
        </div>
      </div>
        <div id="redes">
          <div className="title">
            <h2>Redes</h2>
          </div>
          <div id="logos">
            <div class="img-text">
            <img src="https://i.imgur.com/2GKA6ab.png" alt="facebook" />
            <p>/tubarberia</p>
            </div>
            <div class="img-text">
            <img src="https://i.imgur.com/ZOqaOnE.png" alt="twitter" />
            <p>@tubarberia</p>
            </div>
            <div class="img-text">
            <img src="https://i.imgur.com/IAh8kT0.png" alt="instagram" />
            <p>@tubarberia</p>
            </div>
            <div class="img-text">
            <img src="https://i.imgur.com/eIokluS.png" alt="tiktok" />
            <p>@tubarberia</p>
            </div>
          </div>
        </div>
      
    </div>  
    </>
  );
};

export default Footer;
