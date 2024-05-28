import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { validName, validUserName, validCorreo } from "../components/Regext.jsx";
import "../styles/recovery.css";
let conten1 = ""


export function PerfilUser() {
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

    console.log(name)
    console.log(username)
    console.log(email)

    const hamledname = async (e) => {
        e.preventDefault();
        if (!name) {
            alert('Por favor rellene el campo')
            return
        }
        if (!validName.test(name)) {
            alert('Por favor verifique el campo')
            return
        }
        else {
            try {
                console.log(`http://localhost:3000/social/user/${id}`)
                const response = await axios.patch(`http://localhost:3000/social/user/${id}`, name);
                console.log(response.data)
                setName(response.data.message)
            } catch (error) {
                console.error('error:', error.message);
            }
        }
    }

    const hamledusername = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`http://localhost:3000/social/user/${id}`, { username })
            console.log(response.data)
            setUsername(response.data.message)
        } catch (error) {
            console.error('error:', error.message);
        }
    }

    const hamledemail = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`http://localhost:3000/social/user/${id}`, { email })
            console.log(response.data)
            setEmail(response.data.message)
        } catch (error) {
            console.error('error:', error.message);
        }
    }

    useEffect(() => {
        const hanledToken = async () => {
            if (!token) {
                alert('Por favor inicia sesion')
                setTimeout(function () {
                    navigate("/");
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
        hanledToken()
        const hanledUser = async () => {
            if (id) {
                console.log(id)
                try {
                    const response = await axios.get(`http://localhost:3000/social/user/${id}`);
                    setUser(response.data)
                    console.log(response.data)
                } catch (error) {
                    console.error('error:', error.message);
                }
            }
        }
        hanledUser()
    }, [token, id]);
    return (
        <div>
            <div className="general-content">
                <div className="general-box1 z-0">
                    <img src="../src/img/principales/logo.png" alt="" className='w-[150px] my-[60px]' />
                    <div className="general-part1 ">
                        <ol className='flex-col '>
                            <li>Explorar</li>
                            <li >Interacciones</li>
                            <li >Premium</li>
                            <li >Mensaje</li>
                            <li >Configuracion</li>
                        </ol>
                    </div>
                    <img src="../src/img/principales/logo.png" alt="" className='w-[100px] my-[60px]' />
                </div>
                <div className="general-box2">
                    <div className='flex flex-col'>
                        <div className='flex-col w-[100%]'>
                            <NavLink to="/" className="flex justify-end"><img src="../src/img/principales/home.png" alt="home" className="w-12 m-2" /></NavLink>
                            <h1 className="text-3xl font-black m-2 text-center">Bienvenido {user.name}</h1>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className="text-lg font-black ">Nombre de usuario</h3>
                        <form className='flex flex-row  place-items-start gap-2 '>
                            <p className='font-black items-start m-2'>{user.name}</p>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
                                <input type="text" className='p-1 rounded-md text-center' name="name" id="name" placeholder='Nombre Nuevo' onChange={(e) => setName(e.target.value)} />
                            </label>
                            <button type="submit" value="Aceptar" className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded' onClick={hamledname}> Aceptar</button>
                        </form>
                        <h3 className="text-lg font-black items-start">Username</h3>
                        <form className='flex flex-row  place-items-start gap-2 '>
                            <p className='font-black items-start m-2'>{user.username}</p>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
                                <input type="text" className='p-1 rounded-md text-center' name="username" id="username" placeholder='Username Nuevo' onChange={(e) => setUsername(e.target.value)} />
                            </label>
                            <button type="submit" value="Aceptar" className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded' onClick={hamledusername}> Aceptar</button>
                        </form>
                        <h3 className="text-lg font-black items-start">Correo electronico</h3>
                        <form className='flex flex-row  place-items-start gap-2 '>
                            <p className='font-black items-start m-2'>{user.email}</p>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
                                <input type="Email" className='p-1 rounded-md text-center' name="email" id="email" placeholder='Nombre Nuevo' onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <button type="submit" value="Aceptar" className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded' onClick={hamledemail}> Aceptar</button>
                        </form>
                        <p className='text-sm font-black text-center m-2'>Por favor Introduzca en las casillas los datos que desea cambiar y presione para confirmar los cambios</p>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className="text-lg font-black items-start">Cambiar Password</h3>
                        <div className='flex flex-col w-full text-center' >
                            <p className='text-sm font-black text-center m-2'>Para cambiar la contraseña, haga click en el siguiente boton</p>
                            <NavLink to="/recoverEmail"><button className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'> Cambiar Password </button></NavLink>
                        </div>
                    </div>
                    <div className='flex flex-row m-2'>
                        <div className='flex flex-col w-[50%]'>
                            <h3 className="text-lg font-black items-start">Tipo de Usuario</h3>
                            <p className='text-sm font-black text-start m-2'> <i className="fa-solid fa-circle-check text-green-500"></i> Usuario: {user.rol}</p>
                        </div>
                        <div className='flex flex-col '>
                            <h3 className="text-lg font-black items-start m-1">Cambiar Imagen de Perfil</h3>
                            <label class="block mb-2 text-sm font-medium text-black dark:text-white" for="file_input" >Upload file</label>
                            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-2 py-2" id="file_input" type="file" />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className="text-lg font-black items-start">Promocionar Publicaciones</h3>
                        <div className='flex flex-col w-full text-center'>
                            <p className='text-sm font-black m-2'>Para promocionar tu publicacion, haga click en el siguiente boton</p>
                            <NavLink to="/rates"><button className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'> Publicaciones </button></NavLink>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className="text-lg font-black items-start">Usuario Premium</h3>
                        <div className='flex flex-col w-full text-center'>
                            <p className='text-sm font-black m-2'>Si no eres usuario Premiun por favor, haz click en el siguiente boton</p>
                            <NavLink to="/membership"><button className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-2'>Usuarios Premium</button></NavLink>
                        </div>
                    </div>
                    <div className="sticky top-[100vh] conten3">
                        <h1 className="text-sm text-center m-2 ">© 2024 Copyright: Mounts</h1>
                    </div>
                </div>
                <div className="general-box3 z-0">
                    <div className="flex justify-center w-[100%] ">
                        <ul className='flex m-5'>
                            <li className='m-2 text-3xl'><i className="fa-solid fa-bell"></i></li>
                            <li className='m-2 text-3xl'><i className="fa-solid fa-magnifying-glass"></i></li>
                            <li className='m-2 text-3xl'><i className="fa-solid fa-gear"></i></li>
                        </ul>
                    </div>
                    <div className='general-part3'>
                        <h1>Mensaje</h1>
                        <p>Aqui va el mensaje</p>
                        <p>Aqui va el mensaje</p>
                        <p>Aqui va el mensaje</p>
                        <p>Aqui va el mensaje</p>
                        <p>Aqui va el mensaje</p>
                    </div>
                </div>
            </div>
        </div>
    )
}