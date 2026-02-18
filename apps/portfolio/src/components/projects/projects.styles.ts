import styled from "styled-components";

const Container = styled.div`
  margin-top: 3.125rem;
  width: 100%;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: space-between;
  margin-bottom: 1.875rem;
`;

const Title = styled.h2`
  color: ${props => props.theme.text};
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

const ButtonHash = styled.button<{ $active?: boolean }>`
  background-color: ${props => props.$active ? props.theme.primary : props.theme.cardBackground};
  border-radius: 0.5rem;
  border: 0.0625rem solid ${props => props.$active ? props.theme.primary : props.theme.border};
  color: ${props => props.$active ? '#ffffff' : props.theme.text};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.$active ? props.theme.primary : (props.theme.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : '#252a33')};
    border-color: ${props => props.$active ? props.theme.primary : props.theme.border};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 1.875rem;
  grid-template-columns: repeat(auto-fill, minmax(21.875rem, 1fr));

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 0.9375rem;
  border: 0.0625rem solid ${props => props.theme.border};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-0.3125rem);
    box-shadow: ${props => props.theme.mode === 'light' ? '0 0.625rem 1.875rem rgba(0, 0, 0, 0.05)' : '0 0.625rem 1.875rem rgba(0, 0, 0, 0.3)'};
  }
`;

const ImageWrapper = styled.div`
  height: 12.5rem;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  width: 100%;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 1.25rem;
`;

const Hash = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.625rem;
`;

const TitleExample = styled.h3`
  color: ${props => props.theme.text};
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.625rem 0;
`;

const Description = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: ${props => props.theme.textSecondary};
  display: -webkit-box;
  font-size: 0.9375rem;
  height: 2.8125rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  overflow: hidden;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.9375rem;
`;

const ButtonDemo = styled.a`
  align-items: center;
  background-color: ${props => props.theme.primary};
  border-radius: 0.375rem;
  color: #ffffff;
  display: flex;
  font-size: 0.875rem;
  font-weight: 600;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c46d7d;
  }
`;

const ButtonCode = styled.a`
  align-items: center;
  background-color: transparent;
  border-radius: 0.375rem;
  border: 0.0625rem solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  display: flex;
  font-size: 0.875rem;
  font-weight: 600;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(176, 91, 107, 0.1);
  }
`;

export {
  ButtonCode,
  ButtonDemo,
  ButtonGroup,
  ButtonHash,
  Container,
  Content,
  Description,
  FilterContainer,
  Hash,
  Header,
  Image,
  ImageWrapper,
  ProjectCard,
  ProjectsGrid,
  Title,
  TitleExample
}
