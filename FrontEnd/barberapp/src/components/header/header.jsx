import React from "react";
import { Container } from "../barberos/barberosSyled";
import { HeaderStyled, ImagenStyled, LinkStyled, NavStyled, SectionStyled } from "./headerStyled";

const Header = () => {
  const options = [
    "Barberos",
    "Servicios",
    "Reservas",
    "Contacto",
    "Login",
    "Registro",
  ];
  return (
      <HeaderStyled>
            <div>
            <ImagenStyled img src="../../assets/poste-de-barberia.png" alt="Logo Barberia"></ImagenStyled>
            </div> 
            <div>
              <NavStyled>
                    {React.Children.toArray(
                      options?.map((elem) => {
                    return <LinkStyled a>{elem}</LinkStyled>;
                      })
                    )}
              </NavStyled>
            </div> 
      </HeaderStyled>
  );
};
export default Header;
