import styled from "styled-components";

export const TituloReserva = styled.div`
font-family: 'Bebas Neue', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  padding-top: 6rem;
  h2 {
    letter-spacing: 2px;
  }
`;

export const ReservaContainerStyled = styled.div`
font-family: 'Bebas Neue', sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  margin: 2rem auto;
  padding: 1rem;
`;
export const ServiciosContainer = styled.div`
  width: 280px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const Servicios = styled.p`
  padding: 1.3rem;
  margin: 0.5rem;
  border: 1px solid grey;
  color: #000;
  &:hover{
    cursor: pointer;
    background-color: orange;
    color: #fff;
    border: 1px solid orange;
  }
`;
export const HorariosContainer = styled.div`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const Horarios = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid grey;
  color: #000;
  &:hover{
    cursor: pointer;
    background-color: orange;
    color: #fff;
    border: 1px solid orange;
  }
`;
export const BarberoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const Imagen = styled.img`
  width: 80px;
  height: 100px;
`;
export const Nombre = styled.span`
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bold;
  margin: 1rem;
`;
