import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


import './styles/header.css'
import './styles/nav.css'
import './styles/aside.css'
import './styles/fyp.css'

import {Header} from './components/Header.jsx'
import {Home} from './pages/Home.jsx'
import {Messages} from './pages/Messages.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    {/*<Header/>
    <Nav />
    <Aside />
    <FyP />*/}

    <BrowserRouter>
    <Header/>
        <Routes>
            
            <Route path='/' element={<Home/>}/>

            <Route path='/messages' element={<Messages/>}/>

        </Routes>
    </BrowserRouter>
    </React.StrictMode>,
)
