import React from 'react'
import { NavLink } from 'react-router-dom'

export function PerfilUser() {
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
                        <h1 className="text-3xl font-black m-2 text-center">Perfil de usuario</h1>
                    </div>
                    <div>
                        <h3>Nombre de usuario</h3>
                        <p>Nombre</p>
                        <input type="text" />
                        <h3>Correo electronico</h3>
                        <p>Correo</p>
                        <input type="email" />
                    </div>
                    <div>
                        <h3>Cambiar Password</h3>
                        <button>Enviar</button>
                        <input type="text" value="clave enciada al Correo" />
                        <input type="text" value="Nueva contrasena" />
                        <button>Confirmar</button>
                        <p>Haga click en enviar para resivir un correo de confirmacion para cambiar su contrasena</p>
                    </div>
                    <div>
                        <h3>tipo de Usuario</h3>
                        <p>tipo de usuarios</p>
                        <button>Usuarios Premiun</button>
                        <h3>cambiar imagen de perfil</h3>
                        <input type="file" />
                    </div>
                    <div>
                        <h3>Promocionar Publicaciones</h3>
                        <p>Para promocionar tu publicacion, haga click en el siguiente boton</p>
                        <button>Promocionar</button>
                    </div>
                    <div>
                        <p>Si no eres usuario Premiun por favor, haz click en el siguiente boton</p>
                        <NavLink to="/membership"><button>Premiun</button></NavLink>
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