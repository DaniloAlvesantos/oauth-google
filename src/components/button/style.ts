import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
`;

export const ButtonComponent = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;

    gap:5px;

  background: #8f43ee;
  border-radius: 4px;
  color: #f1f1f1;
  font-family: "Poppins", sans-serif;

  transition: 350ms ease;
  &:hover {
    background: #b170f4;
  }

  cursor: pointer;

  padding: 0.5rem 1rem;
`;
