export function Nav() {
    return (
        <>
        <nav className="nav">
            
            <div className="nav-perfil">
                <div className="nav-perfil-avatar"></div>
                <div className="nav-perfil-user">
                    <strong className="nav-perfil-name">Nombre de usuario</strong>
                    <p className="nav-perfil-username">@username</p>
                </div>
            </div>

            <ul className="menu">
                <li><a href="">Explorar</a></li>
                <li><a href="">Interacciones</a></li>
                <li><a href="">Mensajes</a></li>
                <li><a href="">Premium</a></li>
                <li><a href="">Configuración</a></li>
            </ul>
        </nav>
        </>
    )}
