"use client";
import React from "react";
import * as motion from "motion/react-client";
import * as Styled from "./experiences.styles";
import { JOBS } from "./experiences.constants";

const Experiences = () => {
  const [showAll, setShowAll] = React.useState(false);
  const visibleJobs = showAll ? JOBS : JOBS.slice(0, 1);

  return (
    <Styled.Container>
      <Styled.MainHeader>
        <Styled.IconBox>
          <span className="material-icons">history</span>
        </Styled.IconBox>
        <Styled.MainTitle>Professional Journey</Styled.MainTitle>
      </Styled.MainHeader>

      <Styled.DivContainer>
        <Styled.Timeline>
          {visibleJobs.map((exp, index) => (
            <Styled.TimelineItem key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Styled.TimelineDot $active={!!exp.active} />
                <Styled.DateRange>{exp.date}</Styled.DateRange>
                <Styled.JobTitle>{exp.job}</Styled.JobTitle>
                <Styled.CompanyName>{exp.company}</Styled.CompanyName>
                <Styled.DescriptionList>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </Styled.DescriptionList>
              </motion.div>
            </Styled.TimelineItem>
          ))}
        </Styled.Timeline>

        {JOBS.length > 1 && (
          <Styled.ToggleButton onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More Experience"}
            <span
              className="material-icons"
              style={{ transform: showAll ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              expand_more
            </span>
          </Styled.ToggleButton>
        )}
      </Styled.DivContainer>
    </Styled.Container>
  );
};

export { Experiences };
