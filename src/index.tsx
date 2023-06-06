import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createContext } from "react"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const oauthContext = createContext({});

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="810628694805-bp1u3lcksoba1treeeakn9v4q377o1t3.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
