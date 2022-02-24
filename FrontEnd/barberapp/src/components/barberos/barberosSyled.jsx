import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const WrappedBarbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const InfoContainer = styled.div`
  background-image: url("https://i.imgur.com/SO1R3IO.png");
  background-position: center;
  background-repeat: none;
  background-size: cover;
  padding: 1rem 2rem;
  margin-top: -40px;
  p {
    color: #fff;
    font-weight: bold;
  }
`;
