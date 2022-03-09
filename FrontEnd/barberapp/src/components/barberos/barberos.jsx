import React from "react";
import {
  CardContainer,
  Container,
  InfoContainer,
  WrappedBarbers,
} from "./barberosSyled";

const Barberos = () => {
  const barberos = [
    {
      nombre: "nombre1",
      foto: "https://i.imgur.com/kk6MdVT.png",
      servicios: "barba",
    },
    {
      nombre: "nombre2",
      foto: "https://i.imgur.com/0CH10Ly.png",
      servicios: "corte",
    },
    {
      nombre: "nombre3",
      foto: "https://i.imgur.com/BUiY3sn.png",
      servicios: "coloración",
    },
    {
      nombre: "nombre4",
      foto: "https://i.imgur.com/LVC1ib3.png",
      servicios: "corte",
    },
  ];

  return (
    <Container id="barberos">
      <h2>BARBEROS</h2>
      <h3>
        Nuestros barberos son hábiles tanto en las técnicas tradicionales de
        corte y barba como el uso de toallas calientes en el afeitado
      </h3>
      <WrappedBarbers>
        {React.Children.toArray(
          barberos.map((barber) => {
            return (
              <CardContainer id="img-barberos">
                <img src={barber.foto} alt={barber.nombre} />
                <InfoContainer>
                  <p>{barber.nombre.toLocaleUpperCase()} </p>
                  <p>{barber.servicios.toLocaleUpperCase()} </p>
                </InfoContainer>
              </CardContainer>
            );
          })
        )}
      </WrappedBarbers>
    </Container>
  );
};
export default Barberos;
