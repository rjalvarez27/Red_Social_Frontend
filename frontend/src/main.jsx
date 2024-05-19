import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Routes , Route , HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
        //Rutas Privadas
        <Route path="/Privada" element={<App />} />
        </Route>
        //Rutas Publicas
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
