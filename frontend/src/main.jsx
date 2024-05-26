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

import {Home} from './pages/Home.jsx'
import {Messages} from './pages/Messages.jsx'
import { Publication } from './pages/Publication.jsx'
import { Explorar } from './pages/Explorar.jsx'
import { Profile } from './pages/Profile.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    {/*<Header/>
    <Nav />
    <Aside />
    <FyP />*/}

    <BrowserRouter>
        <Routes>
            
            <Route path='/' element={<Home/>}/>

            <Route path='/messages' element={<Messages/>}/>

            <Route path='/post' element={<Publication/>}/>

            <Route path='/explorar' element={<Explorar/>}/>

            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
    </React.StrictMode>,
)
