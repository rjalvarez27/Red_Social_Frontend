//Pagina de pago de publicidad
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import '../styles/general.css'

export function Payments() {
    const [id, setId] = useState()
    const [user, setUser] = useState()
    const [pagoMovil, setpagoMovil] = useState(false)
    const [pagoP, setPagoP] = useState(false)
    const [data, setData] = useState({
        name: '',
        ci: '',
        bank: '',
        reference: '',
        email: '',
        type: ''
    })
    const navigate = useNavigate()
    const token = Cookies.get('token')
    const hanledcheck = (e) => {
        e.preventDefault()
        if (pagoMovil === false && pagoP === false) {
            alert("Presione alguno de los dos botones , para dirigirte a la plataforma de pago")
        }
        else if( pagoMovil === pagoP){
            alert("Por favor seleccione un solo metodo de pago")
        }
        else if(pagoP === true){
            alert("Presione el boton de paypal, para dirigirte a la plataforma de pago")   
        }
        else if(!data.name || !data.ci || !data.bank || !data.reference){
            alert("Por favor rellene todos los campos")
        }
        else if (pagoMovil === true){
            try {
            data.email = user.email
            data.type = Cookies.get('type')
            const response = axios.post("http://localhost:3000/social/paymentPM", data)
            if(!response){
                alert("Error al realizar el pago")
            }
            else{
                alert("Se ha realizado el pago")
                setTimeout(function () {
                    navigate("/");
                }, 2000);
            }
        }
            catch (error) {
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
                <div className="general-box1">
                    <img src="../src/images/principales/logo.png" alt="" className='w-[150px] my-[60px]' />
                    <div className="general-part1">
                        <ol className='flex flex-col '>
                            <li>Explorar</li>
                            <li >Interacciones</li>
                            <li >Premium</li>
                            <li >Mensaje</li>
                            <li >Configuracion</li>
                        </ol>
                    </div>
                    <img src="../src/images/principales/logo.png" alt="" className='w-[100px] my-[60px]' />
                </div>
                <div className="general-box2">
                    <div className='flex-col'>
                        <NavLink to="/" className="flex justify-end"><img src="../src/images/principales/home.png" alt="home" className="w-12 m-2" /></NavLink>
                        <h1 className="text-3xl font-black  text-center m-1">Pago de la Publicidad</h1>
                    </div>
                    <div className='flex-col text-center'>
                        <p className="m-1 text-justify">Seleccione su metodo de Pago</p>
                        <div className='flex-col w-full'>
                            <label className='m-2' >
                                <input type="checkbox" name="basic" id="basic" className=' bg-white  hover:accent-black ' onChange={(e) => setpagoMovil(e.target.checked)} /> Pago movil</label>
                            <label className='m-2'>
                                <input type="checkbox" name="Premiun" id="Premiun" className=' bg-white  hover:accent-black' onChange={(e) => setPagoP(e.target.checked)} /> PayPal</label>
                        </div>
                    </div>
                    <div className='flex-col text-center '>
                        <p className=" m-1 text-justify" >Si es por paypal por favor Presione el boton para proceder con la forma de pago:</p>
                        <a href="https://www.paypal.com/ve/home"><button className='text-blue-500 bg-yellow-300 w-36 m-3 p-2 rounded-md'>PayPal</button></a>
                        <p className="text-justify" >Si es por pago Movil verifique que los datos son correctos e ingrese los datos en la siguiente formulario:</p>
                    </div>
                    <div className='flex flex-col items-center '>
                        <form action="" className=' flex flex-col text-center border border-gray-800 rounded-lg  p-4 shadow-lg bg-white'>
                        <h3 className="text-sm font-black">Nombre</h3>
                        <input type="text" className='flex border border-gray-800 rounded-lg p-1 shadow-lg bg-white ' name="name" id="name" onChange={(e) => setData({ ...data, name: e.target.value })}/>
                        <h3 className="text-sm font-black items-start ">Cedula</h3>
                        <input type="text" className='flex border border-gray-800 rounded-lg p-1 shadow-lg bg-white ' name="ci" id="ci" onChange={(e) => setData({ ...data, ci: e.target.value })}/>
                        <h3 className="text-sm font-black items-start ">Banco</h3>
                        <input type="text" className='flex border border-gray-800 rounded-lg  p-1 shadow-lg bg-white ' name="bank" id="back" onChange={(e) => setData({ ...data, bank: e.target.value })} />
                        <h3 className="text-sm font-black items-start ">Numero de Referencia</h3>
                        <input type="text" className='flex border border-gray-800 rounded-lg  p-1 shadow-lg bg-white ' name="reference" id="reference" onChange ={(e) => setData({ ...data, reference: e.target.value })} />
                        <p className="text-xs">Verifique antes de Connfirmar</p>
                        <button className='text-white bg-black  m-1 p-1 rounded-md' onClick={hanledcheck} >Confirmar</button>
                        </form>
                    </div>
                    <div className='flex-col w-[100%] text-center '>
                        <p className="text-sm m-3 text-center">
                            Si tiene algun problema con el pago por favor ingrese al siguien link:
                        </p>
                        <button className='text-white bg-green-500 w-36 m-3 p-2'>WhatsApp</button>
                    </div>
                    <div className="sticky top-[100vh] conten3">
                        <h1 className="text-sm text-center m-2 ">© 2024 Copyright: Mounts</h1>
                    </div>
                </div>
                <div className="general-box3">
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