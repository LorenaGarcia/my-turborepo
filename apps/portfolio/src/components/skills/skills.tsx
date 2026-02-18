"use client";
import React from "react";
import * as Styled from "./skills.styles";
import { SKILL_LIST } from "./skills.constants";

const Skills = () => {

  return (
    <Styled.Container>
      <Styled.MainHeader>
        <Styled.IconBox>
          <span className="material-icons">bolt</span>
        </Styled.IconBox>
        <Styled.MainTitle>Technical Toolkit</Styled.MainTitle>
      </Styled.MainHeader>

      <Styled.DivContainer>
        <Styled.SubHeader>
          <span className="material-icons">psychology</span>
          <Styled.Name>Skills</Styled.Name>
        </Styled.SubHeader>

        <Styled.SkillsWrapper>
          {SKILL_LIST.map((skill, index) => (
            <Styled.SkillTag key={index}>{skill}</Styled.SkillTag>
          ))}
        </Styled.SkillsWrapper>
      </Styled.DivContainer>
    </Styled.Container>
  );
};

export { Skills };
