"use client";
import React from "react";
import { ArrowRight, Flame } from "lucide-react";
import { useRouter } from "next/navigation";

import Header from "../header/header";
import Footer from "../footer/footer";
import Petals from "../petals/petals";

import * as Styled from "./home.styles";

export function Home() {
  const router = useRouter();

  return (
    <Styled.MainContainer>
      <Petals />
      <Header />

      <Styled.HeroWrapper>
        <Styled.TitleBacklight />

        <Styled.MainTitle
          initial="hidden"
          animate="visible"
          variants={Styled.titleContainerVariants}
          aria-label={Styled.titleText}
        >
          {Styled.titleWords.map((word, wordIdx) => (
            <Styled.WordSpan key={wordIdx}>
              {word.split("").map((char, charIdx) => (
                <Styled.TitleLetter key={charIdx} variants={Styled.letterVariants}>
                  {char}
                </Styled.TitleLetter>
              ))}
            </Styled.WordSpan>
          ))}
        </Styled.MainTitle>

        <Styled.InteractiveCardsGrid
          initial="hidden"
          animate="visible"
          variants={Styled.cardsContainerVariants}
        >
          <Styled.InteractiveCard
            onClick={() => router.push("/catrinas")}
            variants={Styled.cardLeftVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Styled.CardLeftContent>
              <Styled.CatrinaBadge>
                <Styled.CatrinaImage src="/catrina-skull.png" alt="Catrina" />
              </Styled.CatrinaBadge>
              <Styled.CardTextContent>
                <Styled.CardTitle>Viste tu Catrina</Styled.CardTitle>
              </Styled.CardTextContent>
            </Styled.CardLeftContent>
            <Styled.CardArrow className="card-arrow">
              <ArrowRight size={22} />
            </Styled.CardArrow>
          </Styled.InteractiveCard>

          <Styled.InteractiveCard
            onClick={() => router.push("/ofrenda")}
            style={{ cursor: "pointer" }}
            variants={Styled.cardRightVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Styled.CardLeftContent>
              <Styled.OfrendaBadge>
                <Flame size={24} />
              </Styled.OfrendaBadge>
              <Styled.CardTextContent>
                <Styled.CardTitle>Crea tu Ofrenda</Styled.CardTitle>
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
