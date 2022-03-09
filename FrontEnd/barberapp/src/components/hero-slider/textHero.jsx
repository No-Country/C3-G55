import React from "react";
import {
  TextHeroContainer,
  TextContent,
  TextSecondary,
  TextPrimary,
  TextTertiary,
  Button,
} from "./textHeroStyled";

const TextHero = () => {
  return (
    <TextHeroContainer>
      <TextContent>
        <TextSecondary>MANTÉN TU</TextSecondary>
        <TextPrimary>LOOK</TextPrimary>
        <TextPrimary>PERFECTO</TextPrimary>
        <TextTertiary>
          En TuBarbería nos especializamos en los gustos y necesidades del
          hombre. Somos una barbería para caballeros
        </TextTertiary>
      </TextContent>
      <Button>RESERVA</Button>
    </TextHeroContainer>
  );
};
export default TextHero;
