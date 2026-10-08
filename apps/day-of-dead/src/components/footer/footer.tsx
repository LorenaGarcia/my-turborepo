"use client";

import React from "react";
import {
  FooterContainer,
  FooterContent,
  BrandText,
  QuoteText,
  CopyRight,
} from "./footer.styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandText>DÍA DE MUERTOS • TRADICIÓN VIVA</BrandText>
        <CopyRight>© {new Date().getFullYear()} Día de Muertos México. Todos los derechos reservados.</CopyRight>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
