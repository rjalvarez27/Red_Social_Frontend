import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Cookies from 'js-cookie'

export function Home() {
    const navigate = useNavigate();
    const cerrarSesion = () => {
        Cookies.remove('token');
        navigate('/')
      };
    return (
        <div>
            <h1>Home</h1>
            <p>Pagina de Publicaiones</p>
            <button onClick={cerrarSesion}>Cerrar Sesion</button>
        </div>
    );
}