import React from 'react'
import { NavLink } from 'react-router-dom'
export function Membership() {
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
            <div className="general-box2 z-40">
                <div className='flex-col w-[100%]'>
                    <NavLink to="/" className="flex justify-end"><img src="../src/img/principales/home.png" alt="home" className="w-12 m-2" /></NavLink>
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
                                <th>Promocion de Publicaciones</th>
                                <td className='text-green-500'></td>
                                <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                            </tr>
                            <tr className="border-b-2">
                                <th>IA Publicaciones</th>
                                <td className='text-green-500'></td>
                                <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                            </tr>
                            <tr className="border-b-2">
                                <th>Filtros Personalizados</th>
                                <td className='text-green-500'></td>
                                <td className='text-green-500'><i className="fa-solid fa-square-check"></i></td>
                            </tr>
                            <tr className="border-b-2">
                                <th>Comentarios Personalizados</th>
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
                                <td ><input type="checkbox" name="basic" id="basic" className=' bg-white  hover:accent-black'  /></td>
                                <td><input type="checkbox" name="Premiun" id="Premiun" className=' bg-white  hover:accent-black' /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col text-center'>
                    <h3>Si el usuarios es Premiun por favor marque la casilla para continuar con la membresia</h3>
                </div>
                <div className='flex justify-center w-[100%]' >
                    <NavLink to="/Payments"><button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded-lg m-4">Confirmar</button></NavLink>
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
    );
}