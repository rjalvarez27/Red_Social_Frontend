import React from 'react'
import { NavLink } from 'react-router-dom'


export function PerfilAdmin() {
    return (
        <div>
            <div className="general-content">
                <div className="general-box1 z-0">
                    <img src="../src/images/principales/logo.png" alt="" className='w-[150px] my-[60px]' />
                    <div className="general-part1 ">
                        <ol className='flex-col '>
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
                    <div className='flex flex-col'>
                        <h1 className="text-3xl font-black m-2 text-center">Perfil de Administrador</h1>
                    </div>
                    <div>
                        <h3>Datos del Adminitrador</h3>
                        <p>id</p>
                        <p>Nombre</p>
                        <p>correo</p>
                    </div>
                    <div>
                        <h3>Imagen de Perfil</h3>
                        <input type="file" />
                    </div>
                    <div>
                        <h3>Buscar al usuario</h3>
                        <p>Por favor ingrese el correo del usuario</p>
                        <p>Datos del Usuario en base de datos</p>
                    </div>
                    <div>
                        <p>Publicaiones del Usuario (se pueden borrar)</p>
                    </div>
                    <div>
                        <p>comentarios (se pueden borrar)</p>
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