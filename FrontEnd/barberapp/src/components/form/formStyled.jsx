import styled from "styled-components";

export const StyledContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
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
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background-color: darksalmon;
  border: none;
`;
