import { useAuth } from "./hooks/useAuth";
import { styled } from "styled-components";
import { Header } from "./components/header";
import { Card } from "./components/card";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  color: #f1f1f1;

  gap: 1rem;
  padding: 1rem;
`;

function App() {
  const { user, isGuest } = useAuth();

  return (
    <>
      <Header />
      <Container>
        <Card
          title={!isGuest ? "Welcome" : "Log in with Google"}
          about={
            !isGuest
              ? `Welcome back ${user.given_name}`
              : "Log in with google to continue seeing our content!"
          }
          $warn
        />
        
      </Container>
    </>
  );
}

export default App;
