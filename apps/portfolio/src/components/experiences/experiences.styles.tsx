import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 0.9375rem;
  margin-bottom: 1.875rem;
`;

const IconBox = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.accent};
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
  color: ${(props) => props.theme.text};
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
`;

const DivContainer = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 0.9375rem;
  border: 0.0625rem solid ${(props) => props.theme.border};
  box-sizing: border-box;
  padding: 2.1875rem;
  width: 100%;

  @media (max-width: 30rem) {
    padding: 1.25rem;
  }
`;

const Timeline = styled.div`
  margin-left: 0.625rem;
  padding-left: 3.125rem;
  position: relative;

  &::before {
    content: "";
    background-color: ${(props) =>
      props.theme.mode === "light"
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.1)"};
    bottom: 0.3125rem;
    left: 0;
    position: absolute;
    top: 0.3125rem;
    width: 0.125rem;
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 3.125rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div<{ $active?: boolean }>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.accent : theme.mode === "light" ? "#dee2e6" : "#3d405b"};
  border-radius: 50%;
  border: 0.25rem solid ${(props) => props.theme.background};
  box-shadow: ${({ $active, theme }) =>
    $active ? `0 0 0.625rem ${theme.accent}` : "none"};
  height: 0.75rem;
  left: -3.4375rem;
  position: absolute;
  top: 0.3125rem;
  width: 0.75rem;
  z-index: 1;
`;

const DateRange = styled.p`
  color: ${(props) => props.theme.secondary};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
`;

const JobTitle = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 1.375rem;
  font-weight: 700;
  margin: 0 0 0.3125rem 0;
`;

const CompanyName = styled.p`
  color: ${(props) => props.theme.textMuted};
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 0.9375rem 0;
`;

const DescriptionList = styled.ul`
  color: ${(props) => props.theme.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 50rem;
  padding-left: 1.25rem;

  li {
    margin-bottom: 0.5rem;

    &::marker {
      color: ${(props) => props.theme.accent};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ToggleButton = styled.button`
  align-items: center;
  background: ${(props) =>
    props.theme.mode === "light"
      ? "rgba(0, 0, 0, 0.03)"
      : "rgba(255, 255, 255, 0.05)"};
  border-radius: 3.125rem;
  border: 0.0625rem solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.text};
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-weight: 500;
  gap: 0.625rem;
  margin-top: 1.875rem;
  padding: 0.625rem 1.25rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.theme.mode === "light"
        ? "rgba(0, 0, 0, 0.06)"
        : "rgba(255, 255, 255, 0.1)"};
    border-color: ${(props) =>
      props.theme.mode === "light"
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.2)"};
  }

  span {
    font-size: 1.125rem;
    transition: transform 0.3s ease;
  }
`;

export {
  Container,
  MainHeader,
  IconBox,
  MainTitle,
  DivContainer,
  Timeline,
  TimelineItem,
  TimelineDot,
  DateRange,
  JobTitle,
  CompanyName,
  DescriptionList,
  ToggleButton,
};
