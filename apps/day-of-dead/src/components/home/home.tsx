"use client";

import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Petals from "../petals/petals";
import * as Styled from "./home.styles";
import { ArrowRight, Flame } from "lucide-react";

export function Home() {
  return (
    <Styled.MainContainer>
      <Petals />
      <Header />

      <Styled.HeroWrapper>
        <Styled.TitleBacklight />

        <Styled.MainTitle>DÍA DE MUERTOS</Styled.MainTitle>

        <Styled.InteractiveCardsGrid>
          <Styled.InteractiveCard>
            <Styled.CardLeftContent>
              <Styled.CatrinaBadge>💀</Styled.CatrinaBadge>
              <Styled.CardTextContent>
                <Styled.CardTitle>Viste tu Catrina</Styled.CardTitle>
                <Styled.CardDesc>
                  Prueba vestidos bordados, flores y accesorios vivos.
                </Styled.CardDesc>
              </Styled.CardTextContent>
            </Styled.CardLeftContent>
            <Styled.CardArrow className="card-arrow">
              <ArrowRight size={22} />
            </Styled.CardArrow>
          </Styled.InteractiveCard>

          <Styled.InteractiveCard>
            <Styled.CardLeftContent>
              <Styled.OfrendaBadge>
                <Flame size={24} />
              </Styled.OfrendaBadge>
              <Styled.CardTextContent>
                <Styled.CardTitle>Crea tu Ofrenda</Styled.CardTitle>
                <Styled.CardDesc>
                  Enciende veladoras, agrega copal y ofrenda pan de muerto.
                </Styled.CardDesc>
              </Styled.CardTextContent>
            </Styled.CardLeftContent>
            <Styled.CardArrow className="card-arrow">
              <ArrowRight size={22} />
            </Styled.CardArrow>
          </Styled.InteractiveCard>
        </Styled.InteractiveCardsGrid>
      </Styled.HeroWrapper>

      <Footer />
    </Styled.MainContainer>
  );
}

export default Home;
