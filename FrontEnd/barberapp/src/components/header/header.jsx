import React from "react";
import { HeaderStyled, NavStyled } from "./headerStyled";

const Header = () => {
  const options = ["Barberos", "Cortes", "Reservas", "Contacto"];

  return (
    <HeaderStyled>
      <div>Logo</div>
      <NavStyled>
        {React.Children.toArray(
          options?.map((elem) => {
            return <p>{elem} </p>;
          })
        )}
      </NavStyled>
    </HeaderStyled>
  );
};
export default Header;