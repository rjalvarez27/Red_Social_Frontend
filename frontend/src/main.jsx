import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router-dom'

import './styles/header.css'
import './styles/nav.css'

import {Header} from './components/Header.jsx'
import {Nav} from './components/Nav.jsx'
import {Home} from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Header/>
    <Nav />
    </React.StrictMode>,
)
