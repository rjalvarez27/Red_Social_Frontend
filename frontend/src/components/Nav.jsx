import { useState } from "react"
import { Newpost } from "./Newpost"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'

export function Nav({name, username}) {

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const cerrarSession = () => {
        Cookies.remove('token')
        navigate('/login')
        console.log('cerrando sesion')
    }

    return (
        <>
        <nav className="nav">
            
            <div className="nav-perfil">
                
                <div className="nav-perfil-avatar"></div>
                <div className="nav-perfil-bottom" onClick={() => setIsActive(!isActive)}>
                    <div className="nav-perfil-user">
                        <strong className="perfil-name">{name}</strong>
                        <p className="perfil-username">@{username}</p>
                    </div>
                    <img src="../src/images/down-arrow.png" className="w-6 h-6"/>
                </div>
                {isActive ? (
                <div className="optionsSesion">
                    <a><button onClick={cerrarSession}>Cerrar la sesión de @{username}</button></a>
                </div>) : null}
            </div>

            <ul className="menu">
                <li><div className="decoracion -white"></div><a onClick={() => navigate("/profile")} >Perfil de usuario</a></li>
                <li><div className="decoracion -white"></div><a onClick={() => navigate("/explorar")} >Explorar</a></li>
                <li><div className="decoracion -white"></div><a onClick={() => navigate("/interacciones")} >Interacciones</a></li>
                <li><div className="decoracion -white"></div><a onClick={() => navigate("/messages")} >Mensajes</a></li>
                <li><div className="decoracion -gold"></div><a onClick={() => navigate("/member")} >Premium</a></li>
            </ul>
            <button className="new-post w-[200px]" onClick={() => setOpen(!open)}>Nueva publicación</button>
        </nav>

        { open && <Newpost onClose={handleClose}/>  }
        
        </>
    )}
