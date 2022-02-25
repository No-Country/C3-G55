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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  label {
    width: 100px;
    padding: 1rem;
    text-align: left;
  }
  input {
    width: 250px;
    padding: 1rem;
  }
`;
export const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  margin: auto;
  background-color: darksalmon;
  border: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledErrors = styled.div`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: bolder;
`;
