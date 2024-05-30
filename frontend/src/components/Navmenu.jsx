import { useNavigate } from "react-router-dom"

export function Navmenu(){

    const navigate = useNavigate();
    return (
        <ul className="menu ">
            <li><div className="decoracion -white"></div><a onClick={() => navigate("/profile")} >Perfil de usuario</a></li>
            <li><div className="decoracion -white"></div><a onClick={() => navigate("/explorar")} >Explorar</a></li>
            <li><div className="decoracion -white"></div><a onClick={() => navigate("/interacciones")} >Interacciones</a></li>
            <li><div className="decoracion -white"></div><a onClick={() => navigate("/messages")} >Mensajes</a></li>
            <li><div className="decoracion -gold"></div><a onClick={() => navigate("/member")} >Premium</a></li>
        </ul>
    )
}