import styled from "styled-components";

export const TextHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 100px;
  top: 120px;
  width: 30%;
  margin: 0;
  @media (min-width: 350px) {
    width: 90vw;
    top: 150px;
    left: 20px;
  }
  @media (min-width: 600px) {
    width: 80vw;
    top: 200px;
    right: 100px;
  }
  @media (min-width: 900px) {
    width: 40vw;
    top: 100px;
    left: 500px;
  }
  @media (min-width: 1200px) {
    width: 40vw;
    top: 50px;
    left: 800px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  letter-spacing: 3px;
  @media (min-width: 350px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    width: 40vw;
  }
`;

export const TextSecondary = styled.p`
  font-size: 4rem;
  color: #e14713;
  font-weight: bolder;
  padding: 0;
  margin: 0;
  letter-spacing: 0.5px;
  @media (min-width: 350px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 4.5rem;
  }
`;
export const TextPrimary = styled.p`
  font-size: 4.5rem;
  color: #dddbdd;
  font-weight: bold;
  padding: 0;
  margin: 0;
  @media (min-width: 350px) {
    font-size: 4.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 5.5rem;
  }
`;
export const TextTertiary = styled.p`
  font-size: 1rem;
  color: #dddbdd;
  letter-spacing: 1px;
  padding: 0;
  margin-top: 1rem;
  line-height: 2;
  @media (min-width: 350px) {
    font-size: 1.5rem;
    width: 100%;
  }
`;
export const Button = styled.button`
  font-size: 1rem;
  color: #dddbdd;
  letter-spacing: 1px;
  background-color: #e14713;
  padding: 1.5rem;
  border: none;
  letter-spacing: 4px;
  font-weight: bold;
  margin: 0;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #e14613c8;
  }
  @media (min-width: 350px) {
    width: 100%;
    text-align: center;
  }
  @media (min-width: 1200px) {
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
`;
