import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoutes'
import { Login } from '../src/pages/Login.jsx'
import { Register } from '../src/pages/Register.jsx'
import { Home } from '../src/pages/Home.jsx'
import { Member } from '../src/pages/Member.jsx'
import { MembershipPay } from '../src/pages/MembershipPay.jsx'
import { Payments } from '../src/pages/Payments.jsx'
import { PerfilAdmin } from '../src/pages/PerfilAdmin.jsx'
import { PerfilUser } from '../src/pages/PerfilUser.jsx'
import { Rates } from './pages/ratesP.jsx'
import { RecoverEmail } from '../src/pages/RecoverEmail.jsx'
import { RecoverPassword } from '../src/pages/RecoverPassword.jsx'
import "../src/styles/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
        //Rutas Privadas
          <Route path="/home" element={<Home />} />
        </Route>
        //Rutas Publicas
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/member" element={<Member />} />
        <Route path="/membershipPay" element={<MembershipPay />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/perfiladmin" element={<PerfilAdmin />} />
        <Route path="/perfiluser" element={<PerfilUser />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/recoverEmail" element={<RecoverEmail />} />
        <Route path="/recoverPassword/:code" element={<RecoverPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
