import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { validName, validUserName, validCorreo } from "../components/Regext.jsx";
import Cookies from 'js-cookie'
import axios from 'axios'
import "../styles/recovery.css";
import { Navmenu } from '../components/Navmenu.jsx';
import { Chatlist } from '../components/Chatlist.jsx';
import { Settings } from "../components/Settings"
import { Trends } from "../components/Trends"
import { Perfil } from '../components/perfil.jsx';
import { Online } from '../components/Online.jsx';

export function PerfilUser() {
    const [settings, setSettings] = useState(false)

    const handleSettings = () => {
        setSettings(false)
    }

    const token = Cookies.get('token')
    const navigate = useNavigate()
    const [id, setId] = useState({})
    const [user, setUser] = useState({})
    const [name, setName] = useState({
        name: '',
    })
    const [username, setUsername] = useState({
        username: ''
    })
    const [email, setEmail] = useState({
        email: ''
    })

    const [data, setData] = useState({
        id_user: "",
        avatar: ""
    });

    const handleImg = async (e) => {
        e.preventDefault();
        if (!data.avatar) {
            alert('Por favor rellene el campo');
            return
        } else {
            try {
                data.id_user = id
                const response = await axios.post('http://localhost:3000/social/avatar', data, { headers: { 'Content-Type': 'multipart/form-data' } });
                console.log(response)
                if (response) {
                    alert('Imagene de perfil subida con exito')
                    window.location.replace('');
                } else {
                    alert('Error')
                };

            } catch (error) {
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
                return
            }
        }
    };

    const hanledname = async (e) => {
        e.preventDefault();
        if (!name.name) {
            alert('Por favor rellene el campo')
            return
        } else if (!validName.test(name.name)) {
            alert('Datos no validos, por favor verifique los datos')
        } else {
            try {
                const response = await axios.patch(`http://localhost:3000/social/user/${id}`, name)
                console.log(response.data)
                alert('Se ha actualizado el nombre')
                window.location.replace('');
            } catch (error) {
                console.error('error:', error.message);
            }
        }
    }

    const hanledusername = async (e) => {
        e.preventDefault();
        if (!username.username) {
            alert('Por favor rellene el campo')
            return
        } else if (!validUserName.test(username.username)) {
            alert('Datos no validos, por favor verifique los datos')
        } else {
            try {
                const response = await axios.patch(`http://localhost:3000/social/user/${id}`, username)
                console.log(response.data)
                alert('Se ha actualizado el Username')
                window.location.replace('');
            } catch (error) {
                console.error('error:', error.message);
            }
        }
    }

    const hanledemail = async (e) => {
        e.preventDefault();
        if (!email.email) {
            alert('Por favor rellene el campo')
            return
        } else if (!validCorreo.test(email.email)) {
            alert('Datos no validos, por favor verifique los datos')
        } else {
            try {
                const response = await axios.patch(`http://localhost:3000/social/user/${id}`, email)
                console.log(response.data)
                alert('Se ha actualizado el email')
                window.location.replace('');
            } catch (error) {
                console.error('error:', error.message);
            }
        }
    }

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
        const hanledUser = async () => {
            if (id) {
                try {
                    const response = await axios.get(`http://localhost:3000/social/user/${id}`);
                    setUser(response.data)
                } catch (error) {
                    console.error('error:', error.message);
                }
            }
        }
        hanledToken()
        hanledUser()
    }, [token, id]);
    return (
        <div>
            <div className="general-content">
                <div className="general-box1 z-0 ">
                    <div>
                        <div className='my-[60px] rounded-[50%] flex flex-col items-end'>
                            <img src="../src/images/principales/logo.png" alt="" className='w-[150px]  cursor-pointer' onClick={() => navigate("/")} />
                        <Online/>
                        </div>
                    </div>
                    
                    <Navmenu />
                    <img src="../src/images/principales/logo.png" alt="" className='w-[100px] my-[60px]' />
                </div>

                <div className="general-box2 p-[20px] ">
                    <div className='flex flex-col'>
                        <div className='flex-col w-[100%]'>
                            < Perfil id={user._id} />
                            {/*<NavLink to="/" className="flex justify-end"><img src="../src/images/principales/home.png" alt="home" className="w-12 m-2" /></NavLink>*/}
                            <h1 className="text-3xl font-black m-2 text-center">Bienvenido {user.name}</h1>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className="text-lg font-black ">Nombre de usuario</h3>
                        <form className='flex flex-row  place-items-start gap-2 '>
                            <p className='font-[600] items-start m-2'>{user.name}</p>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
                                <input type="text" className='p-1 rounded-md text-center' name="name" id="name" placeholder='Nombre Nuevo' onChange={(e) => setName({ ...name, name: e.target.value })} />
                            </label>
                            <button type="submit" value="Aceptar" className='bg-black text-white font-bold py-2 px-4 rounded'><i className="fa-solid fa-circle-check text-green-500" onClick={hanledname}></i></button>
                        </form>
                        <h3 className="text-lg font-black items-start">Username</h3>
                        <form className='flex flex-row  place-items-start gap-2 '>
                            <p className='font-[600] items-start m-2'>{user.username}</p>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
                                <input type="text" className='p-1 rounded-md text-center' name="username" id="username" placeholder='Username Nuevo' onChange={(e) => setUsername({ ...username, username: e.target.value })} />
                            </label>
                            <button type="submit" value="Aceptar" className='bg-black text-white font-bold py-2 px-4 rounded'><i className="fa-solid fa-circle-check text-green-500" onClick={hanledusername}></i></button>
                        </form>
                        <h3 className="text-lg font-black items-start">Correo electronico</h3>
                        <form className='flex flex-row  place-items-start gap-2 '>
                            <p className='font-[600]  items-start m-2'>{user.email}</p>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
                                <input type="Email" className='p-1 rounded-md text-center' name="email" id="email" placeholder='Nombre Nuevo' onChange={(e) => setEmail({ ...email, email: e.target.value })} />
                            </label>
                            <button type="submit" value="Aceptar" className='bg-black text-white font-bold py-2 px-4 rounded'><i className="fa-solid fa-circle-check text-green-500" onClick={hanledemail}></i></button>
                        </form>
                        <p className='text-sm font-[600]  text-center m-2'>Por favor Introduzca en las casillas los datos que desea cambiar y presione para confirmar los cambios</p>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className="text-lg font-black items-start">Cambiar Password</h3>
                        <div className='flex flex-col w-full items-center' >
                            <p className='text-sm font-[600] text-center m-2'>Para cambiar la contraseña, haga click en el siguiente boton</p>
                            <NavLink to="/recoverEmail" className="w-[200px]"><button className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'> Cambiar Password </button></NavLink>
                        </div>
                    </div>
                    <div className='flex flex-row m-2'>
                        <div className='flex flex-col w-[50%]'>
                            <h3 className="text-lg font-black items-start">Tipo de Usuario</h3>
                            <p className='text-sm font-black text-start m-2'> <i className="fa-solid fa-circle-check text-green-500"></i> Usuario: {user.rol}</p>
                        </div>
                        <div className='flex flex-col '>
                            <h3 className="text-lg font-black items-start m-1">Cambiar Imagen de Perfil</h3>
                            <form action="" className='flex flex-row gap-2' encType="multipart/form-data" onSubmit={handleImg}>
                                <label className="block w-full text-base text-[#f5f5f5] border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2" >Upload file
                                    <input type="file" name="image" id="image" onChange={(e) => {
                                        (e); setData({ ...data, avatar: e.target.files[0] })
                                    }} multiple max={1} />
                                </label>
                                <button type="submit" value="Aceptar" className='bg-black text-white font-bold py-2 px-4 rounded'><i className="fa-solid fa-circle-check text-green-500" onClick={handleImg}></i></button>
                            </form>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className="text-lg font-black items-start">Promocionar Publicaciones</h3>
                        <div className='flex flex-col w-full items-center'>
                            <p className='text-sm font-[600]  m-2'>Para promocionar tu publicacion, haga click en el siguiente boton</p>
                            <NavLink to="/rates"><button className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'> Publicaciones </button></NavLink>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className="text-lg font-black items-start">Usuario Premium</h3>
                        <div className='flex flex-col w-full items-center'>
                            <p className='text-sm font-[600]  m-2'>Si no eres usuario Premiun por favor, haz click en el siguiente boton</p>
                            <NavLink to="/member"><button className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-2'>Usuarios Premium</button></NavLink>
                        </div>
                    </div>
                    <div className="sticky top-[100vh] conten3">
                        <h1 className="text-sm text-center m-2 ">© 2024 Copyright: Mounts</h1>
                    </div>
                </div>
                <div className="general-box3 z-0">
                    <div className="option-space">
                        <img src="src/images/notification.png" alt="Notificaciones" className="option-space-img" />
                        <input type="search" name="search" id="search" placeholder="Buscar..." className="option-space-search" />
                        <img src="src/images/settings.png" alt="Settings" className="option-space-img" onClick={() => setSettings(!settings)} />

                    </div>
                    {settings && <Settings onSettings={handleSettings} />}


                    <div className="trends-space">
                        <div style={{ display: 'none' }}>
                            <Trends />
                        </div>

                    </div>

                    <div className="ad-space">
                        <div className="ad-space-area">
                            <h3>Suscribete a Premium</h3>
                            <p className="decoration-[rgb(174, 174, 174)]">¡Únete a nuestra comunidad exclusiva! Suscríbete para obtener funciones especiales y contenido premium directamente en tu bandeja de entrada. No te pierdas nada y forma parte de nuestra familia en línea.</p>
                        </div>
                    </div>

                    <Chatlist />
                </div>
            </div>
        </div>
    )
}