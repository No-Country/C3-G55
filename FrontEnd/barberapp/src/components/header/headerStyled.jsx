import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1;
  text-transform: uppercase;
`;

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: bolder;
  letter-spacing: 1px;
  margin-right: 3rem;
  gap: 1rem;
  color: #fff;
`;

export const StyledLink = styled(Link)`
color: #fff;
text-decoration: none;
transition: all 450ms ease; 
cursor: pointer;
z-index: 0;
  
&::before,
&::after{
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 0.1em;
    width: 0;
}

&::before{
    left: 0;
    z-index: -1;
}

&::after{
    background-color: orange;
    right: 0;
}

&:hover{
    color: orange;
    
    &::before{
        width: 100%;
        transition: width 250ms ease;
        background-color: orange;
    }

    &::after{
        width: 100%;
        background-color: transparent;
    }
    
}
`
export const ImagenStyled = styled.img`
margin: .3rem 0 0 1rem;
max-height: 3rem;
max-width: 3rem;
`

