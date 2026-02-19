import React from "react";
import PersonalDetails from "../personal-details/personal-details";
import { Skills } from "../skills/skills";
import { Experiences } from "../experiences/experiences";
import { Projects } from "../projects/projects";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import * as Styled from "./home.styles";

const Home = () => {
  return (
    <Styled.Container>
      <ThemeToggle />
      <Styled.PersonalDetailsContainer>
        <PersonalDetails />
      </Styled.PersonalDetailsContainer>
      <Styled.ExperiencesContainer>
        <Experiences />
        <Skills />
        <Projects />
      </Styled.ExperiencesContainer>
    </Styled.Container>
  );
};

export default Home;
