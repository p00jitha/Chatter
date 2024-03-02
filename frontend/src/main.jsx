import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from './Context/AuthContext.jsx';
import App from './App.jsx'
import './index.css'
import { SocketContextProvider } from './Context/socketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
        <App/>
      </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
