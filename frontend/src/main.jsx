import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoutes'
import { Login } from '../src/pages/Login.jsx'
import { Register } from '../src/pages/Register.jsx'
import { Home } from '../src/pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute/>}>
        //Rutas Privadas
          <Route path="/home" element={<Home />} />
        </Route>
        //Rutas Publicas
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
