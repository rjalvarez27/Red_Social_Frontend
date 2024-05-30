import { useState } from "react"
import { Newpost } from "./Newpost"
import { useNavigate } from "react-router-dom"

export function Nav() {

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(false)
    }

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
        <nav className="nav">
            
            <div className="nav-perfil">
                
                <div className="nav-perfil-avatar"></div>
                <div className="nav-perfil-bottom">
                    <div className="nav-perfil-user">
                        <strong className="perfil-name">Nombre de usuario</strong>
                        <p className="perfil-username">@username</p>
                    </div>
                    <img src="../src/images/down-arrow.png" alt="" style={{width: '25px', height: '25px'}} onClick={() => setIsActive(!isActive)}/>
                </div>
                {isActive ? (
                <div className="optionsSesion">
                    <a href="">Cerrar la sesión de @username</a>
                </div>) : null}
            </div>

            <ul className="menu">
                <li><a onClick={() => navigate("/explorar")} >Explorar</a></li>
                <li><a onClick={() => navigate("/interacciones")} >Interacciones</a></li>
                <li><a onClick={() => navigate("/messages")} >Mensajes</a></li>
                <li><a onClick={() => navigate("/member")} >Premium</a></li>
                <li><a onClick={() => navigate("/post")} >Configuración</a></li>
                
            </ul>
            <button className="new-post" style={{width: '200px'}} onClick={() => setOpen(!open)}>Nueva publicación</button>
        </nav>

        { open && <Newpost onClose={handleClose}/>  }
        
        </>
    )}
