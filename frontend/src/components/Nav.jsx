import { useState, useEffect } from "react"
import { Newpost } from "./Newpost"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import { Navmenu } from "./Navmenu";
import { Online } from "./Online";
import axios from 'axios'

export function Nav({name, username}) {
    const token = Cookies.get('token')
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState(false)
    const [img, setImg] = useState("")
    const [id, setId] = useState("")

    const handleClose = () => {
        setOpen(false)
    }
    const [ openNav, setOpenNav ] = useState(false)
    const nav = openNav ? "nav flex z-10 sm:w-[300px] md:w-[300px] lg:flex lg:w-[20%]" : "nav hidden lg:flex lg:w-[20%]"

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

        const hanledToken = async () => {
            if (!token) {
                alert('Por favor inicia sesion')
                setTimeout(function () {
                    navigate("/login");
                }, 2000);
                return
            } else {
                try {
                    const response = await axios.get(`http://localhost:3000/social/recovery/${token}`);
                    setId(response.data.message)
                } catch (error) {
                    console.error('error:', error.message);
                }
            }
        }
        const getImage = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/social/avatar/${id}`)
                setImg(response.data)
                console.log(response.data)
            } catch (error) {
                console.error('error:', error.message);
            }
        }

        hanledToken()
        getImage()
    }, [token, id]);

    console.log(id)

    return (
        <>
        <div className="fixed top-0 left-0 w-[64px] h-[80px] lg:hidden bg-[rgb(18,16,25)] flex justify-center items-center z-[9]">
            <img src="src/images/menu.png" alt="menu" className="cursor-pointer flex lg:hidden" onClick={() => setOpenNav(!openNav)}/>
        </div>

        <nav className={nav}>
            <div className="lg:hidden">
                <img src="src/images/menu.png" alt="menu" className="cursor-pointer mt-6" onClick={() => setOpenNav(!openNav)}/>
            </div>
            
            <div className="nav-perfil">
                <div className="nav-perfil-avatar flex justify-center items-center p-[2px]">
                    <img src={img} alt="avatar" className='w-[100%] h-[100%] cursor-pointer rounded-full' onClick={() => navigate("/")} />
                </div>
                <div className="nav-perfil-bottom" onClick={() => setIsActive(!isActive)}>
                    
                    <div className="nav-perfil-user">
                        <strong className="perfil-name">{name}</strong>
                        <img src="../src/images/down-arrow.png" className="w-6 h-6"/>
                    </div>
                    <Online/>
                </div>
                {isActive ? (
                <div className="optionsSesion">
                    <a><button onClick={cerrarSesion}>Cerrar la sesión de @{username}</button></a>
                </div>) : null}
            </div>
            <Navmenu/>
            <button className="new-post w-[180px] xl:w-[220px]" onClick={() => setOpen(!open)}>Nueva publicación</button>
        </nav>

        { open && <Newpost onClose={handleClose} img={img}/>  }

        {openNav ? (
            <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(18,16,25,0.5)] z-[9]" onClick={() => setOpenNav(!openNav)}></div>
        ) : null}
        
        </>
    )}
