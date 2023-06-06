import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user, login } = useAuth();

  return (
    <div className="App">
      <h1>Login com a Google</h1>
      <Button title="Google" onClick={login} />
      <img src={user.picture} alt="" />
    </div>
  );
}

export default App;
