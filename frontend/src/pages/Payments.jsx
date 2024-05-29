//Pagina de pago de publicidad
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import '../styles/general.css'

export function Payments() {
    const navigate = useNavigate()
    const [pagoMovil, setpagoMovil] = useState(false)
    const [pagoP, setPagoP] = useState(false)
    const [data, setData] = useState({
        name: "",
        ci: "",
        bank: "",
        reference: "",
        amount: ""
    })

    
    const hanledPagoMovil = (e) => {
        e.preventDefault()
        // toda la logica para pagar con movil
    }

    const hanledpagoP = (e) => {
        e.preventDefault()
        if(pagoP === true){
            alert("Presione el boton de paypal, para dirigirte a la plataforma de pago")      
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
                            <input type="text" className='flex border border-gray-800 rounded-lg  p-1 shadow-lg bg-white ' name="name" id="name" />
                            <h3 className="text-sm font-black items-start ">Cedula</h3>
                            <input type="text" className='flex border border-gray-800 rounded-lg  p-1 shadow-lg bg-white' name="ci" id="ci" />
                            <h3 className="text-sm font-black items-start ">Banco</h3>
                            <input type="text" className='flex border border-gray-800 rounded-lg  p-1 shadow-lg bg-white' name="bank" id="bank" />
                            <h3 className="text-sm font-black items-start ">Numero de Referencia</h3>
                            <input type="text" className='flex border border-gray-800 rounded-lg  p-1 shadow-lg bg-white' name="name" id="name" />
                            <p className="text-xs">Verifique antes de Connfirmar</p>
                            <button className='text-white bg-black  m-1 p-1 rounded-md'>Confirmar</button>
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