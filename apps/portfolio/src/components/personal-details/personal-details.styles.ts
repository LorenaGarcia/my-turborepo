import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 0.9375rem;
  border: 0.0625rem solid ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  position: sticky;
  top: 1rem;
  width: 100%;
`;

const DivContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0.9375rem;
`;

const Image = styled.img`
  border-radius: 50%;
  border: 0.3125rem solid
    ${(props) =>
      props.theme.mode === "light"
        ? "rgba(0, 0, 0, 0.05)"
        : "rgba(255, 255, 255, 0.2)"};
  box-shadow: ${(props) =>
    props.theme.mode === "light"
      ? "0 0.625rem 1.875rem rgba(0, 0, 0, 0.05)"
      : "0 0 1.875rem rgba(0, 0, 0, 0.3), 0 0 3.75rem rgba(255, 255, 255, 0.1)"};
  display: block;
  height: 17.5rem;
  object-fit: cover;
  transition: transform 0.3s ease;
  width: 17.5rem;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 30rem) {
    height: 12.5rem;
    width: 12.5rem;
  }
`;

const Contact = styled.a`
  align-items: center;
  background: ${(props) =>
    props.theme.mode === "light"
      ? "rgba(0, 0, 0, 0.03)"
      : "rgba(255, 255, 255, 0.08)"};
  border-radius: 6.25rem;
  border: 0.0625rem solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.textSecondary};
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  gap: 0.875rem;
  margin-bottom: 1rem;
  padding: 0.75rem 1.75rem;
  text-decoration: none;
  transition: all 0.2s ease;
  width: fit-content;

  &:hover {
    background: ${(props) =>
      props.theme.mode === "light"
        ? "rgba(0, 0, 0, 0.06)"
        : "rgba(255, 255, 255, 0.15)"};
    transform: translateY(-0.125rem);
  }

  span {
    font-size: 1.375rem;
    color: ${(props) => props.theme.textMuted};
  }
`;

const Name = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0.9375rem 0 0.3125rem 0;
  text-align: left;
`;

const Profession = styled.p`
  color: ${(props) => props.theme.secondary};
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1.5625rem;
  margin-top: 0rem;
  text-align: left;
`;

export { Container, DivContainer, Image, Contact, Name, Profession };
