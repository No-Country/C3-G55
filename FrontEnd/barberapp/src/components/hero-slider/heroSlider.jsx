import React from "react";
import Slider from "react-slick";
import { HeroImg, HeroSliderStyled } from "./heroSliderStyled";
import "./heroSlider.css";
import TextHero from "./textHero";

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };
  const info = [
    "../../assets/barberia.jpg",
    "../../assets/corte.jpg",
    "../../assets/barba.jpg",
  ];
  return (
    <HeroSliderStyled id="inicio" style={{ position: "relative" }}>
      <Slider {...settings}>
        {React.Children.toArray(
          info?.map((item, index) => {
            return <img src={item} alt={"img" + index} className="img-slide" />;
          })
        )}
      </Slider>
      <TextHero />
    </HeroSliderStyled>
  );
};

export default HeroSlider;
