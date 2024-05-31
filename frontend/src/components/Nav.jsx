import { useState, useEffect } from "react"
import { Newpost } from "./Newpost"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import { Navmenu } from "./Navmenu";
import { Online } from "./Online";
import axios from 'axios'

export function Nav({name, username, id}) {
    const token = Cookies.get('token')
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState(false)
    const [img, setImg] = useState({})

    const handleClose = () => {
        setOpen(false)
    }

    const cerrarSesion = () => {
        try {
            Cookies.remove('token'); // Elimina la cookie 'token'
            navigate('/login'); // Redirige al usuario a la página de inicio de sesión
            console.log('Sesión cerrada correctamente'); // Imprime un mensaje en la consola
        } catch (error) {
            console.error('Error al cerrar sesión:', error); // Maneja posibles errores
        }
    };

    useEffect(() => {
        const getImage = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/social/avatar/${id}`)
                setImg(response)
                console.log(response.data)
            } catch (error) {
                console.error('error:', error.message);
            }
        }
        getImage()
    }, [token, id]);

    return (
        <>
        <nav className="nav hidden lg:flex lg:w-[20%]">
            <div className="nav-perfil">
                <div className="nav-perfil-avatar flex justify-center items-center p-[2px]">
                    <img src={img.data} alt="avatar" className='w-[100%] h-[100%] cursor-pointer rounded-full' onClick={() => navigate("/")} />
                </div>
                <div className="nav-perfil-bottom" onClick={() => setIsActive(!isActive)}>
                    <Online/>
                    <div className="nav-perfil-user">
                        <strong className="perfil-name">{name}</strong>
                        <p className="perfil-username">@{username}</p>
                    </div>
                    <img src="../src/images/down-arrow.png" className="w-6 h-6"/>
                </div>
                {isActive ? (
                <div className="optionsSesion">
                    <a><button onClick={cerrarSesion}>Cerrar la sesión de @{username}</button></a>
                </div>) : null}
            </div>
            <Navmenu/>
            <button className="new-post w-[180px] xl:w-[220px]" onClick={() => setOpen(!open)}>Nueva publicación</button>
        </nav>

        { open && <Newpost onClose={handleClose}/>  }
        
        </>
    )}
