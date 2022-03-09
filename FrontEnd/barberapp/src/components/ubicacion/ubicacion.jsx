import React from "react";
import GoogleMapReact from "google-map-react";
import "./style.css";

const AnyReactComponent = () => (
  <img src="https://i.imgur.com/szEcnlC.png" alt="pin" />
);

const Ubicacion = () => {
  const defaultProps = {
    center: {
      lat: -34.5692134,
      lng: -58.4427581,
    },
    zoom: 15,
  };

  return (
    <div id="container">
      <h2>ENCUÉNTRANOS</h2>
      <div id="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCOU-LoyvSAL4wcn7agegQANlVzH7ztmGI" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={-34.5692134} lng={-58.4427581} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Ubicacion;
