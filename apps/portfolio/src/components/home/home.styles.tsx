import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  display: grid;
  gap: 2.5rem;
  padding: 1.875rem;
  grid-template:
    "persona-details" auto
    "experiences" auto
    / 1fr;

  @media (min-width: 48rem) {
    grid-template:
      "persona-details experiences" auto
      / 1fr 1fr;
  }
`;

export const PersonalDetailsContainer = styled.div`
  grid-area: persona-details;
`;

export const ExperiencesContainer = styled.div`
  grid-area: experiences;
`;
