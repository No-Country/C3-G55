import React from "react";
import Barberos from "../components/barberos/barberos";
import HeroSlider from "../components/hero-slider/heroSlider";
import Ubicacion from "../components/ubicacion/ubicacion";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Barberos />
      <Ubicacion />
    </>
  );
};
export default Home;
