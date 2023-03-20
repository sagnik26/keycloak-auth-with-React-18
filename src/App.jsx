import { useKeycloak } from '@react-keycloak/web';
import { useState } from 'react'
import './App.css'

function App() {
  const { keycloak } = useKeycloak()

  return (
    <div>
        <h1> Keycloak SSO Test </h1>
        {
          !keycloak.authenticated && (
            <button onClick={() => keycloak.login()}> login </button>
          )
        }

        {
          !!keycloak.authenticated && (
            <button onClick={() => keycloak.logout()}> logout </button>
          )
        }

        {
          keycloak.authenticated ? <h2>You are authenticated :\</h2> : <h2>Hello, please login</h2>
        }
        
    </div>
);
}

export default App
