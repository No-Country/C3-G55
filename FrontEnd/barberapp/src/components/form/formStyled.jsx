import styled from "styled-components";

export const StyledContainerForm = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const StyledForm = styled.div`
background-color: black;  
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  label {
    width: 100px;
    padding: 1rem;
    text-align: center;
  }
  input {
    display: flex;
    align-items: center;
    width: 250px;
    padding: 1rem;
  }
`;
export const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin: 0;
  background: black;
  border: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  transform: .2s easy-out;
  &:hover {
    cursor: pointer;
    background: linear-gradient(to right, #FFBD00, #FF1F00);
  }
`;
export const StyledErrors = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
  color: red;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: bolder;
`;
