import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
`;

export const WrappedBarbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 0rem;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  img {
    -webkit-filter: grayscale(100%);
    -webkit-filter: grayscale(1);
    filter: grayscale(100%);
    filter: gray;
    transition: 1s ease-in-out;
  }
  img:hover {
    -webkit-filter: grayscale(0);
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    filter: gray;
  }
`;

export const InfoContainer = styled.div`
  background-image: url("https://i.imgur.com/SO1R3IO.png");
  background-position: center;
  background-repeat: none;
  background-size: cover;
  padding: 1rem 2rem;
  margin-top: -35px;
  p {
    color: #fff;
    font-weight: bold;
  }
`;
