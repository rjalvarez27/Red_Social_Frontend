import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


import './styles/header.css'
import './styles/nav.css'
import './styles/aside.css'
import './styles/fyp.css'
import './styles/newpost.css'
import './styles/explorar.css'
import './styles/profile.css'
import './styles/messages.css'
import "../src/styles/index.css"

import {Home} from './pages/Home.jsx'
import {Messages} from './pages/Messages.jsx'
import { Publication } from './pages/Publication.jsx'
import { Explorar } from './pages/Explorar.jsx'
import { Profile } from './pages/Profile.jsx'
import { PrivateRoute } from './routes/PrivateRoutes'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import { Member } from './pages/Member.jsx'
import { MembershipPay } from './pages/MembershipPay.jsx'
import { Payments } from './pages/Payments.jsx'
import { PerfilAdmin } from './pages/PerfilAdmin.jsx'
import { PerfilUser } from './pages/PerfilUser.jsx'
import { Rates } from './pages/ratesP.jsx'
import { RecoverEmail } from './pages/RecoverEmail.jsx'
import { RecoverPassword } from './pages/RecoverPassword.jsx'
import { Interacciones } from './pages/Interacciones.jsx'
import { Settings } from './components/Settings.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route element={<PrivateRoute />}
        {/*Rutas Privadas*/}
            <Route path="/member" element={<Member />} />
            <Route path="/membershippay" element={<MembershipPay />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/perfiladmin" element={<PerfilAdmin />} />
            <Route path="/perfiluser" element={<PerfilUser />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/recoverPassword/:code" element={<RecoverPassword />} />
            <Route path='/' element={<Home/>}/>
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/post' element={<Publication/>}/>
            <Route path='/explorar' element={<Explorar/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/interacciones' element={<Interacciones/>}/>
        </Route>
        {/*Rutas Publicas*/}
        <Route path="/login" element={<Login />} />.
        <Route path="/register" element={<Register />} />.
        <Route path="/recoverEmail" element={<RecoverEmail />} /> .

        </Routes>
    </BrowserRouter>
    </React.StrictMode>,
)
