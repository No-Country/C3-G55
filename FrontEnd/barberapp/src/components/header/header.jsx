import React from "react";
import { Container } from "../barberos/barberosSyled";
import { Link } from "react-router-dom";
import {
  HeaderStyled,
  ImagenStyled,
  LinkStyled,
  NavStyled,
  SectionStyled,
} from "./headerStyled";

const Header = () => {
  const options = [
    { name: "Barberos", to: "/barberos" },
    { name: "Servicios", to: "/servicios" },
    { name: "Reservas", to: "/reservas" },
    { name: "Contacto", to: "/contacto" },
    { name: "Login", to: "/login" },
    { name: "Registro", to: "registro" },
  ];
  return (
    <HeaderStyled>
      <div>
        <ImagenStyled
          img
          src="../../assets/poste-de-barberia.png"
          alt="Logo Barberia"
        ></ImagenStyled>
      </div>
      <div>
        <NavStyled>
          {React.Children.toArray(
            options?.map((elem) => {
              return (
                <Link to={elem.to}>
                  <LinkStyled a>{elem.name}</LinkStyled>
                </Link>
              );
            })
          )}
        </NavStyled>
      </div>
    </HeaderStyled>
  );
};
export default Header;
