import { useKeycloak } from '@react-keycloak/web';
import { useState } from 'react'
import './App.css'

function App() {
  const { keycloak } = useKeycloak()

  if(keycloak.authenticated) {
    console.log(keycloak.token)
    console.log('token', JSON.stringify(keycloak.token))
  }

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
          keycloak.authenticated? (
            <>
            <h2>Authenticated :\</h2>
            </>
          ) : null
        }
        
    </div>
);
}

export default App
