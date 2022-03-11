import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
  CalendarContainerStyled,
} from "./reservaStyled";
import "../assets/styles/styles.css";

const Reserva = () => {
  const servicios = ["CORTE", "BARBA", "COLOR", "TIJERA"];
  const barberos = [
    {
      nombre: "NOMBRE1",
      foto: "https://i.imgur.com/kk6MdVT.png",
      servicios: "barba",
    },
    {
      nombre: "NOMBRE2",
      foto: "https://i.imgur.com/0CH10Ly.png",
      servicios: "corte",
    },
    {
      nombre: "NOMBRE3",
      foto: "https://i.imgur.com/BUiY3sn.png",
      servicios: "coloración",
    },
    {
      nombre: "NOMBRE4",
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
  const [value, onChange] = useState(new Date());
  const [service, setService] = useState();
  const [hour, setHour] = useState();
  const [barber, setBarber] = useState();
  const [values, setValues] = useState({
    date: "",
    servicio: "",
    hora: "",
    barbero: "",
  });

  const getService = (item) => {
    setService(item.target.innerText);
  };

  const getHour = (item) => {
    setHour(item.target.innerText);
  };
  const getBarber = (item) => {
    setBarber(item.target.innerText);
  };

  const getData = () => {
    setValues({
      date: value.toLocaleDateString(),
      servicio: service,
      hora: hour,
      barbero: barber,
    });
    setTimeout(() => {
      setValues({
        date: "",
        servicio: "",
        hora: "",
        barbero: "",
      });
    }, 5000);
  };
  console.log(values);
  return (
    <div>
      <TituloReserva>
        <h2>RESERVÁ TU TURNO</h2>
      </TituloReserva>

      <ReservaContainerStyled>
        <CalendarContainerStyled>
          <div style={{ heigth: "auto" }}>
            <Calendar onChange={onChange} value={value} />
          </div>
        </CalendarContainerStyled>
        <ServiciosContainer>
          {React.Children.toArray(
            servicios.map((elem) => {
              return <Servicios onClick={getService}>{elem}</Servicios>;
            })
          )}
        </ServiciosContainer>
        <HorariosContainer>
          {React.Children.toArray(
            horario.map((elem) => {
              return (
                <Horarios>
                  <p onClick={getHour}>{elem} </p>
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
                  <Imagen src={elem.foto} alt="barbero" />
                  <Nombre onClick={getBarber}>{elem.nombre} </Nombre>
                </BarberoContainer>
              );
            })
          )}
        </div>
      </ReservaContainerStyled>

      <div id="btn-finalizar">
        <button className="button" onClick={getData}>
          <p>FINALIZAR</p>
        </button>
      </div>
    </div>
  );
};
export default Reserva;
