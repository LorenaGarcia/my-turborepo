"use client";
import React, { useState } from "react";
import * as Styled from "./projects.styles";
import { PROJECTS, TAGS} from "./projects.constants";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filterProjects = (name: string) => {
    setFilter(name);
  };

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.tags.includes(filter));

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Projects ({filteredProjects.length})</Styled.Title>
        <Styled.FilterContainer>
          {TAGS.map((tag) => (
            <Styled.ButtonHash
              key={tag}
              $active={filter === tag}
              onClick={() => filterProjects(tag)}
            >
              {tag === "all" ? "Show All" : `#${tag.toUpperCase()}`}
            </Styled.ButtonHash>
          ))}
        </Styled.FilterContainer>
      </Styled.Header>

      <Styled.ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <Styled.ProjectCard key={index}>
            <Styled.ImageWrapper>
              <Styled.Image
                src={(project.image as any).src || project.image}
                alt={project.title}
              />
            </Styled.ImageWrapper>
            <Styled.Content>
              <Styled.Hash>{project.hash}</Styled.Hash>
              <Styled.TitleExample>{project.title}</Styled.TitleExample>
              <Styled.Description>{project.description}</Styled.Description>
              <Styled.ButtonGroup>
                <Styled.ButtonDemo
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </Styled.ButtonDemo>
                <Styled.ButtonCode
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </Styled.ButtonCode>
              </Styled.ButtonGroup>
            </Styled.Content>
          </Styled.ProjectCard>
        ))}
      </Styled.ProjectsGrid>
    </Styled.Container>
  );
};

export { Projects };
