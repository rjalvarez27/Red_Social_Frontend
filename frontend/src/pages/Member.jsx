import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/general.css'
import Cookies from 'js-cookie'
import { Chatlist } from '../components/Chatlist'

export function Member() {

    const navigate = useNavigate()
    const [check, setCheck] = useState(false)
    console.log(check)

    const handleCheck = (e) => {
        e.preventDefault()
        if (check === false) {
            alert("Usuario Free , reedirigiendo al login")
            setTimeout(() => {
                navigate('/')
            }, 2000);
        } else if (check == true) {
            Cookies.set('type', 'Premiun')
            alert("Tarifa Premiun activada,  reedirigiendo a la pagina de pago")
            setTimeout(() => {
                navigate('/payments')
            }, 2000);
        }
    }
    useEffect(() => {
        const token = Cookies.get('token')
        if (!token) {
            navigate('/login')
        }

    }, [])
    return (
        <div>
            <div className="general-content">
                <div className="general-box1 z-0">
                    <img src="../src/images/principales/logo.png" alt="" className='w-[150px] my-[60px] cursor-pointer' onClick={() => navigate("/")}/>
                    <ul className="menu">
                        <li><div className="decoracion -white"></div><a onClick={() => navigate("/profile")} >Perfil de usuario</a></li>
                        <li><div className="decoracion -white"></div><a onClick={() => navigate("/explorar")} >Explorar</a></li>
                        <li><div className="decoracion -white"></div><a onClick={() => navigate("/interacciones")} >Interacciones</a></li>
                        <li><div className="decoracion -white"></div><a onClick={() => navigate("/messages")} >Mensajes</a></li>
                        <li><div className="decoracion -gold"></div><a onClick={() => navigate("/member")} >Premium</a></li>
                    </ul>
                    <img src="../src/images/principales/logo.png" alt="" className='w-[100px] my-[60px]' />
                </div>

                <div className="general-box2 z-40">
                    <div className='flex-col w-[100%] m-[45px]'>
                        {/*<NavLink to="/" className="flex justify-end"><img src="../src/images/principales/home.png" alt="home" className="w-12 m-2" /></NavLink>*/}
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
                                {/*<tr className="border-b-2">
                                    <th>IA Publicaciones</th>
                                    <td className='text-green-500'></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>*/}
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
                                    <th>Precios</th>
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
                    <div className="flex justify-center w-[100%] ">
                        <ul className='flex m-5'>
                            <li className='m-2 text-3xl'><i className="fa-solid fa-bell"></i></li>
                            <li className='m-2 text-3xl'><i className="fa-solid fa-magnifying-glass"></i></li>
                            <li className='m-2 text-3xl'><i className="fa-solid fa-gear"></i></li>
                        </ul>
                    </div>
                    <div className="ad-space m-12">
                        <div className="ad-space-area">
                            <h3>Suscribete a Premium</h3>
                            <p style={{color: 'rgb(174, 174, 174)'}}>¡Únete a nuestra comunidad exclusiva! Suscríbete para obtener funciones especiales y contenido premium directamente en tu bandeja de entrada. No te pierdas nada y forma parte de nuestra familia en línea.</p>
                        </div>
                    </div>
                    <Chatlist/>
                </div>
            </div>
        </div>
    );
}