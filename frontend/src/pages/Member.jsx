import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/general.css'
import Cookies from 'js-cookie'
import axios from 'axios'

export function Member() {
    const token = Cookies.get('token')
    const [id, setId] = useState({})
    const [user, setUser] = useState({})
    const [img, setImg] = useState({})
    const [settings, setSettings] = useState(false)

    const handleSettings = () => {
        setSettings(false)
    }

    const navigate = useNavigate()
    const [check, setCheck] = useState(false)
    console.log(check)

    const handleCheck = (e) => {
        e.preventDefault()
        if (check === false) {
            alert("Usuario Gratuito , reedirigiendo al inicio")
            setTimeout(() => {
                navigate('/')
            }, 2000);
        } else if (check == true) {
            Cookies.set('type', 'Usuario Premiun')
            alert("Plan Premiun activado,  reedirigiendo a la pagina de pago")
            setTimeout(() => {
                navigate('/membershippay')
            }, 2000);
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
                    console.log(response.data.message)
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
        const getImage = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/social/avatar/${id}`)
                setImg(response)
                console.log(response.data)
            } catch (error) {
                console.error('error:', error.message);
            }
        }
        hanledToken()
        hanledUser()
        getImage()
    }, [token, id]);
    return (
        <div>
            <div className="general-content">
                <div className="general-box1 z-0">
                    <img src={img.data} alt="" className='w-[150px] cursor-pointer rounded-full my-10' onClick={() => navigate("/")} />

                    <img src="../src/images/principales/logo.png" alt="" className='w-[150px] m-10' />
                </div>

                <div className="general-box2 z-40">
                    <div className='flex-col w-[100%] mt-[45px]'>

                        <h1 className="text-3xl font-black m-2 text-center">Membresia</h1>
                    </div>
                    <div className='flex'>
                        <table className="w-[100%] text-center m-10 text-lg ">
                            <thead>
                                <tr className=" text-white bg-black ">
                                    <th>Tipo de Usuario</th>
                                    <th>Basica</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2" >
                                    <th>General</th>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Publicaciones</th>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Comentarios</th>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Promocion de publicaciones</th>
                                    <td className='text-green-500'></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Caracteres ilimitados</th>
                                    <td className='text-green-500'></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Filtros personalizados</th>
                                    <td className='text-green-500'></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Comentarios personalizados</th>
                                    <td className='text-green-500'></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Precios</th>
                                    <td className='font-bold'>Free</td>
                                    <td className='font-bold'>10$</td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Seleccione su plan</th>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                    <td><input type="checkbox" name="Premiun" id="Premiun" className=' bg-white  hover:accent-black' onChange={(e) => setCheck(e.target.checked)} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='flex flex-col text-center'>
                        <h3>Si el usuarios es Premiun por favor marque la casilla para continuar con la membresia</h3>
                    </div>
                    <div className='flex justify-center w-[100%]' >
                        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded-lg m-4" onClick={handleCheck}>Confirmar</button>
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
                </div>
            </div>
        </div>

    );
}