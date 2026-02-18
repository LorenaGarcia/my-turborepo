import styled from "styled-components";

const Button = styled.button`
  align-items: center;
  background: white;
  border-radius: 50%;
  border: 0.0625rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  height: 3.125rem;
  justify-content: center;
  position: fixed;
  right: 2rem;
  top: 2rem;
  transition: all 0.3s ease;
  width: 3.125rem;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0.375rem 1rem rgba(0, 0, 0, 0.15);
  }

  span {
    font-size: 1.5rem;
    color: #4f4f4f;
  }
`;

export { Button };
