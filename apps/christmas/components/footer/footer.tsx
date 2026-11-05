"use client";

import React from "react";
import * as Styled from "./footer.styles";

export function Footer() {
  return (
    <Styled.FooterWrapper>
      <Styled.FooterContainer>
        <Styled.FooterDivider />

        <Styled.FooterBottomRow>
          <Styled.CopyrightText>
            Copyright © 2026 Lorraine - Villa navideña. Todos los derechos
            reservados.
          </Styled.CopyrightText>
        </Styled.FooterBottomRow>
      </Styled.FooterContainer>
    </Styled.FooterWrapper>
  );
}

export default Footer;
