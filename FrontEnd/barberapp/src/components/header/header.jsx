import React from "react";
import "../assets/styles/styles.css"
import logo from "../assets/images/poste-de-barberia.png"


export default function Header(){

  return (
      <div className="nav-container">
            <a href="#inicio"><img class="logo" src={logo} /></a>
        <nav className="nav-bar">
            <div class="link"><a  href="#barberos">Barberos</a></div>
            <div class="link"><a  href="#cortes">Cortes</a></div>
            <div class="link"><a  href="#reserva">Reserva</a></div>
            <div class="link"><a  href="#contacto">Contacto</a></div>
            <div class="link"><a  href="#registro">Registro</a></div>
            <div class="link"><a  href="#login">Login</a></div>
            
        </nav>    
      </div>
  
  );
}
