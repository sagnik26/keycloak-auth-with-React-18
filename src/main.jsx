import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Keycloak from 'keycloak-js'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

let keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "testR",
  clientId: "react-app",
  loadUserProfileAtStartup: false
});
// keycloak.init({
//   redirectUri: "http://localhost:5173/home",
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactKeycloakProvider authClient={keycloak}>
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
  </ReactKeycloakProvider>
)




