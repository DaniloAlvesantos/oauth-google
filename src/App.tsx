import { useAuth } from "./hooks/useAuth";
import { styled } from "styled-components";
import { Header } from "./components/header";

const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;

  color: #f1f1f1;

  gap: 1rem;
  padding: 1rem;

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

function App() {
  const { user, isGuest } = useAuth();

  return (
    <>
      <Header />
      <Container>
        <h1>
          {!isGuest
            ? `Welcome ${user.given_name}`
            : "Log in with Google"}
        </h1>
      </Container>
    </>
  );
}

export default App;
