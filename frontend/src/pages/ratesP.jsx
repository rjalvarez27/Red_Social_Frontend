//Pagina para las tarifas de Publicidad 
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/general.css'
import Cookies from 'js-cookie'
import axios from 'axios'


export function Rates() {

    const token = Cookies.get('token')
    const[id, setId] = useState({})
    const [user, setUser] = useState({})
    const [img, setImg] = useState({})
    const [settings, setSettings] = useState(false)

    const handleSettings = () => {
        setSettings(false)
    }
    
    const navigate = useNavigate()
    const [checkB, setCheckB] = useState(false)
    const [checkP, setCheckP] = useState(false)


    const handleCheck = () => {
        if (!checkB && !checkP) {
            alert("Por favor seleccione una tarifa")
        }
        if (checkB == true && checkP == true) {
            alert("Estan marcadas las dos casillas, por favor marque solo una casilla")
        } else if (checkB == true) {
            Cookies.set('type', 'Publicidad basica')
            alert("Selecciono elPlan basico , reedirigiendo a la pagina de pago")
            setTimeout(() => {
                navigate('/payments')
            }, 2000);
        } else if (checkP == true) {
            Cookies.set('type', 'Publicidad premiun')
            alert("Selecciono el Plan Premium ,  reedirigiendo a la pagina de pago")
            setTimeout(() => {
                navigate('/payments')
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
            <div className="general-box1 h-[100%]">
                    <div className='flex flex-col items-start' >
                        <div className='flex flex-col items-end justify-start mt-5'>
                            <img src={img.data} alt="avatar" className='w-[150px] h-[150px] border-[2px] cursor-pointer rounded-full ' onClick={() => navigate("/")} />
                            <Online />
                        </div>
                    </div>
                    <Navmenu />
                    <img src="../src/images/principales/logo.png" alt="logo" className='w-[150px] m-10' />
                </div>
                <div className="general-box2 z-40">
                    <div className='flex-col w-[100%] mt-[45px]'>
                        {/*<NavLink to="/" className="flex justify-end"><img src="../src/images/principales/home.png" alt="home" className="w-12 m-2" /></NavLink>*/}
                        <h1 className="text-3xl font-black m-2 text-center">Tarifas de Publicidad</h1>
                    </div>
                    <div className='flex'>
                        <table className="w-[100%] text-center m-10 text-lg ">
                            <thead>
                                <tr className=" text-white bg-black ">
                                    <th>Tipos de Publicidad</th>
                                    <th>Basica</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2" >
                                    <th>1 Publicacion Diaria</th>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                    <td className='text-green-500'></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>5 Publicaciones Diarias</th>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Estadisticas de alcance</th>
                                    <td className='text-green-500'> </td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Apoyo con IA</th>
                                    <td className='text-green-500'></td>
                                    <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Precio</th>
                                    <td className='font-bold'>5$</td>
                                    <td className='font-bold'>7$</td>
                                </tr>
                                <tr className="border-b-2">
                                    <th>Seleccione el tipo de Plan</th>
                                    <td><input type="checkbox" name="Premiun" id="Premiun" className=' bg-white  hover:accent-black hover: text-green-500' onChange={(e) => setCheckB(e.target.checked)} /></td>
                                    <td><input type="checkbox" name="Premiun" id="Premiun" className=' bg-white  hover:accent-black hover: text-green-500' onChange={(e) => setCheckP(e.target.checked)} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='flex text-center mx-5'>
                        <h3>Seleccione que plan de publicidad desea adquirir por un mes y haga click en confirmar para seguir con el proceso de pago</h3>
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
                        <img src="src/images/notification.png" alt="Notificaciones" className="option-space-img"/>
                        <input type="search" name="search" id="search" placeholder="Buscar..." className="option-space-search"/>
                        <img src="src/images/settings.png" alt="Settings" className="option-space-img" onClick={() => setSettings(!settings)}/>
                
                    </div>
                    { settings && <Settings onSettings={handleSettings}/>  }

            
                    <div className="trends-space">
                        <div style={{display: 'none'}}>
                            <Trends />
                        </div>
                        
                    </div>
                    
                    <div className="ad-space">
                        <div className="ad-space-area">
                            <h3>Suscribete a Premium</h3>
                            <p className="decoration-[rgb(174, 174, 174)]">¡Únete a nuestra comunidad exclusiva! Suscríbete para obtener funciones especiales y contenido premium directamente en tu bandeja de entrada. No te pierdas nada y forma parte de nuestra familia en línea.</p>
                        </div>
                    </div>

                    <Chatlist/>
                </div>
            </div>
        </div>
    )
}