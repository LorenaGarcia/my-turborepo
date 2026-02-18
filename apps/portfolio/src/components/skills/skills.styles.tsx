import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.125rem;
  width: 100%;
`;

const MainHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 0.9375rem;
  margin-bottom: 1.5625rem;
`;

const IconBox = styled.div`
  align-items: center;
  background-color: ${props => props.theme.primary};
  border-radius: 0.5rem;
  color: white;
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  span {
    font-size: 1.5rem;
  }
`;

const MainTitle = styled.h2`
  color: ${props => props.theme.text};
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
`;

const DivContainer = styled.div`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 0.9375rem;
  border: 0.0625rem solid ${props => props.theme.border};
  box-sizing: border-box;
  padding: 2.1875rem;
  width: 100%;

  @media (max-width: 30rem) {
    padding: 1.25rem;
  }
`;

const SubHeader = styled.div`
  align-items: center;
  color: ${props => props.theme.secondary};
  display: flex;
  gap: 0.625rem;
  margin-bottom: 1.875rem;

  span {
    font-size: 1.25rem;
  }
`;

const Name = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled.div`
  background-color: ${props => props.theme.skillTag};
  border-radius: 0.625rem;
  border: 0.0625rem solid ${props => props.theme.border};
  color: ${props => props.theme.skillText};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.mode === 'light' ? 'rgba(0, 0, 0, 0.06)' : '#3d2531'};
    transform: translateY(-0.125rem);
  }
`;

export {
  Container,
  MainHeader,
  IconBox,
  MainTitle,
  DivContainer,
  SubHeader,
  Name,
  SkillsWrapper,
  SkillTag
}
