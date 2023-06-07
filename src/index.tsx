import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/context";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="810628694805-bp1u3lcksoba1treeeakn9v4q377o1t3.apps.googleusercontent.com">
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
