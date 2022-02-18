import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: black;
  color: #fff;
`;
export const NavStyled = styled(HeaderStyled)`
  width: 50%;
  font-weight: bolder;
  letter-spacing: 1px;
  margin-right: 2rem;
`;
