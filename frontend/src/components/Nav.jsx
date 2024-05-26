import { useState } from "react"
import { Newpost } from "./Newpost"

export function Nav() {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
        <nav className="nav">
            
            <div className="nav-perfil">
                <div className="nav-perfil-avatar"></div>
                <div className="nav-perfil-user">
                    <strong className="perfil-name">Nombre de usuario</strong>
                    <p className="perfil-username">@username</p>
                </div>
            </div>

            <ul className="menu">
                <li><a href="/explorar">Explorar</a></li>
                <li><a href="">Interacciones</a></li>
                <li><a href="">Mensajes</a></li>
                <li><a href="">Premium</a></li>
                <li><a href="">Configuración</a></li>
                
            </ul>
            <button className="new-post" style={{width: '200px'}} onClick={() => setOpen(!open)}>Nueva publicación</button>
        </nav>

        { open && <Newpost onClose={handleClose}/>  }
        
        </>
    )}
