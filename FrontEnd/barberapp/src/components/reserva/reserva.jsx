import React from "react";
import Calendar from "../calendar/calendar";
import {
  BarberoContainer,
  Horarios,
  HorariosContainer,
  Imagen,
  Nombre,
  ReservaContainerStyled,
  Servicios,
  ServiciosContainer,
  TituloReserva,
} from "./reservaStyled";

const Reserva = () => {
  const servicios = ["SERVICIO1", "SERVICIO2", "SERVICIO3", "SERVICIO4"];
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
  const horario = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
  ];

  return (
    <div>
      <TituloReserva>
        <h2>RESERVÁ TU TURNO</h2>
      </TituloReserva>

      <ReservaContainerStyled>
        <div>
          <Calendar />
        </div>
        <ServiciosContainer>
          {React.Children.toArray(
            servicios.map((elem) => {
              return <Servicios>{elem}</Servicios>;
            })
          )}
        </ServiciosContainer>
        <HorariosContainer>
          {React.Children.toArray(
            horario.map((elem) => {
              return (
                <Horarios>
                  <p>{elem} </p>
                </Horarios>
              );
            })
          )}
        </HorariosContainer>
        <div>
          {React.Children.toArray(
            barberos.map((elem) => {
              return (
                <BarberoContainer>
                  <Imagen src={elem.foto} alt="" />
                  <Nombre>{elem.nombre} </Nombre>
                </BarberoContainer>
              );
            })
          )}
        </div>
      </ReservaContainerStyled>
      <div>
        <button>Continuar</button>
      </div>
    </div>
  );
};
export default Reserva;
