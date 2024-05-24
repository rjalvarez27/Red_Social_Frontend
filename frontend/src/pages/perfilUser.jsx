import React from 'react'
import { NavLink } from 'react-router-dom'

export function PerfilUser() {
    return(
       
        <div className="general-body">
            <div className="general-content">
                <div className="general-box1">
                    <div className="general-part1 ">
                        <img src="../src/img/principales/logo.png" alt="" className='w-[150px] my-[30px] relative justify-end'/>
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
                
                </div>
                <div className="general-box3">
                    <div className= "flex justify-center w-[100%] ">
                        <ul className='flex m-5'>
                            <li className='m-2 text-3xl'><i class="fa-solid fa-bell"></i></li>
                            <li className='m-2 text-3xl'><i class="fa-solid fa-magnifying-glass"></i></li>
                            <li className='m-2 text-3xl'><i class="fa-solid fa-gear"></i></li>
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