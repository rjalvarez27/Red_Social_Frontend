//Pagina de pago de publicidad
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/general.css'

export function Payments() {
    return (
        <div className="general-body">
            <div className="general-content">
                <div className="general-box1">
                    <div className="general-part1 ">
                        <img src="../src/img/principales/logo.png" alt="" className='w-[150px] my-[30px] relative justify-end' />
                        <ol className='flex-col '>
                            <li>Explorar</li>
                            <li >Interacciones</li>
                            <li >Premium</li>
                            <li >Mensaje</li>
                            <li >Configuracion</li>
                        </ol>
                    </div>
                    <img src="../src/img/principales/logo.png" alt="" className='w-[150px] my-[60px]' />
                </div>
                <div className="general-box2">
                    <div className='flex-col w-[100%]'>
                        <NavLink to="/" className="flex justify-end"><img src="../src/img/principales/home.png" alt="home" className="w-[60px] m-2" /></NavLink>
                        <h1 className="text-3xl font-black m-2 text-center">Pago de la Publicidad</h1>
                    </div>
                    <div className='flex-col w-[100%]'>
                        <p className="text-xl m-3 text-start">Seleccione su metodo de Pago</p>
                        <div className='flex-col text-lg text-start m-3'>
                            <label className='m-2' >
                                <input type="checkbox" name="basic" id="basic" className=' bg-white  hover:accent-black ' /> Pago movil</label>
                            <label className='m-2'>
                                <input type="checkbox" name="Premiun" id="Premiun" className=' bg-white  hover:accent-black' /> PayPal</label>
                        </div>
                    </div>
                    <div className='flex-col w-[100%] text-center '>
                        <p className="text-lg m-3 text-start" >Si es por paypal por favor Presione el boton para proceder con la forma de pago:</p>
                        <button className='text-blue-500 bg-yellow-300 w-[200px] m-3 p-2'>PayPal</button>
                    </div>
                    <div>
                        <p className="text-lg m-3 text-start" >Si es por pago Movil verifique que los datos son correctos e ingrese los datos en la siguiente seccion:</p>
                        <h3 className="text-lg font-black items-start ">Nombre</h3>
                        <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
                            <input type="text" className='p-1 rounded-md text-center' name="name" id="name" />
                        </label>
                        <h3 className="text-lg font-black items-start ">Cedula</h3>
                        <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
                            <input type="text" className='p-1 rounded-md text-center' name="name" id="name" />
                        </label>
                        <h3 className="text-lg font-black items-start ">Banco</h3>
                        <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
                            <input type="text" className='p-1 rounded-md text-center' name="name" id="name" />
                        </label>
                        <h3 className="text-lg font-black items-start ">Numero de Referencia</h3>
                        <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
                            <input type="text" className='p-1 rounded-md text-center' name="name" id="name" onChange={(e) => setData({ ...data, name: e.target.value })} />
                        </label>
                    </div>
                    <div className='flex-col w-[100%] text-center '>
                    <p className="text-lg m-3 text-start">
                        Si tiene algun problema con el pago por favor ingrese al siguien link
                    </p>
                    <button className='text-white bg-green-500 w-[200px] m-3 p-2'>WhatsApp</button>
                    </div>
                </div>
                <div className="general-box3">
                    <div className="flex justify-center w-[100%] ">
                        <ul className='flex m-5'>
                            <li className='m-2 text-3xl'><i class="fa-solid fa-bell"></i></li>
                            <li className='m-2 text-3xl'><i class="fa-solid fa-magnifying-glass"></i></li>
                            <li className='m-2 text-3xl'><i class="fa-solid fa-gear"></i></li>
                        </ul>
                    </div>
                    <div className='rates-part3'>
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