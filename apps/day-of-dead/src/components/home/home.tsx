"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "../header/header";
import Footer from "../footer/footer";
import Petals from "../petals/petals";
import * as Styled from "./home.styles";
import { ArrowRight, Flame } from "lucide-react";

const titleText = "DÍA DE MUERTOS";
const titleWords = titleText.split(" ");

const titleContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    z: -100,
    rotateX: -90,
    scale: 0.4,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    z: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      mass: 0.8,
    },
  },
};

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
          variants={titleContainerVariants}
          aria-label={titleText}
        >
          {titleWords.map((word, wordIdx) => (
            <Styled.WordSpan key={wordIdx}>
              {word.split("").map((char, charIdx) => (
                <Styled.TitleLetter key={charIdx} variants={letterVariants}>
                  {char}
                </Styled.TitleLetter>
              ))}
            </Styled.WordSpan>
          ))}
        </Styled.MainTitle>

        <Styled.InteractiveCardsGrid>
          <Styled.InteractiveCard onClick={() => router.push("/catrinas")}>
            <Styled.CardLeftContent>
              <Styled.CatrinaBadge>
                <Styled.CatrinaImage src="/catrina-skull.png" alt="Catrina" />
              </Styled.CatrinaBadge>
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
