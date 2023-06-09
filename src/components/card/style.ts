import styled from "styled-components";

export const CardComponent = styled.span<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0rem 1rem;

  background: ${(props) => props.warn ? "#F0EB8D" : "#f1f1f1"};
  color: #1f1f1f;

  border-radius: 5px;

  width: 15rem;

  @media (min-width: 720px) {
    min-width: 30rem;
  }

  header {
    width: 100%;

    text-align: center;

    background:${props => props.warn ? "#F6F2A9" : "#2C2828"};
    color:${props => props.warn ? "#121212" : "#f1f1f1"};

    padding: 0.5rem 1rem;

    border-radius: 3px 3px 0px 0px;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size:1.3rem;
    @media (min-width: 720px) {
        font-size: 2rem;
    }

    text-transform: uppercase;
  }

  main {
    padding: 1rem;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size:1rem;
  }
`;
