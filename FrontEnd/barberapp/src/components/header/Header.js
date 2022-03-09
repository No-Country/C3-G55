import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./NavbarStyled";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaHome,
  FaUsers,
  FaMapMarked,
  FaRegistered,
  FaLock,
  FaBook,
  FaRegWindowClose,
  FaUserCircle
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isAuthe = useSelector((state) => state.Auth.isAuth);
  const {name} = useSelector((state) => state.Auth.user);


  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <FaBattleNet />
            <p>Tu-</p>
            <p>Barberia</p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            {
              isAuthe ? (
                <>
                  <MenuItem>
                    <MenuItemLink href="/"  onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                      <FaHome />
                        HOME
                      </div>
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                        <FaUserCircle/>
                        Conectado: {name}
                      </div>
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink href="/#barberos" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                      <FaUsers/>
                        BARBEROS
                      </div>
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink href="/#container" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                      <FaMapMarked/>
                        UBICACION
                      </div>
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink href="/Date" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                        <FaBook/>
                        RESERVA
                      </div>
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                   <FaRegWindowClose/>
                        SALIR
                      </div>
                    </MenuItemLink>
                  </MenuItem>
                </>

              ) : (
                <>
                  <MenuItem>
                    <MenuItemLink href="/" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                      <FaHome />
                        HOME
                      </div>
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink href="/#barberos" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                        <FaUsers/>
                        BARBEROS
                      </div>
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink href="/#container" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                     <FaMapMarked/>
                        UBICACION
                      </div>
                    </MenuItemLink>
                  </MenuItem>
               
                  <MenuItem>
                    <MenuItemLink href="/Login" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                      <FaLock/>
                        LOGIN
                      </div>
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink href="/registro" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                     <FaRegistered/>
                        REGISTRO
                      </div>
                    </MenuItemLink>
                  </MenuItem>
                </>
              )
            }
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
}

export default Header