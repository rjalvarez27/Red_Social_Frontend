import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/general.css'
import { Header } from '../components/Header.jsx'
import { Panel } from '../components/Panel.jsx'

export function Home() {
    const navigate = useNavigate()
  





    return (
        <>
            <div className="general-content">
                <div className="general-box1 z-0 bg-white dark:bg-slate-700 ">
                    <div className="flex h-[20%] w-[100%] items-center justify-center my-[20px]">
                        <img src="../src/images/principales/perfil.png" alt="" className='border border-black rounded-full w-[100px]' />
                    </div>
                    <div className='flex h-[80%] w-[80%]  justify-center text-start m-8 '>
                        <ul className='flex flex-col'>
                           <li className='text-xl dark:text-white m-2'><i className="fa-solid fa-square-plus"></i> <a href="/publications">Nuevas Publicaciones</a></li>
                           <li className='text-xl dark:text-white m-2'><i className="fa-duotone fa-solid fa-user"></i> <a href="/publications">Mi perfil</a></li>
                           <li className='text-xl dark:text-white m-2'><i className="fa-solid fa-user-group"></i> <a href="/publications">Mis Amigos</a></li>
                           <li className='text-xl dark:text-white m-2'><i className="fa-solid fa-message"></i> <a href="/publications">Mensajes</a></li>
                           <li className='text-xl dark:text-white m-2'><i className="fa-solid fa-gear"></i> <a href="/publications">Configuracion</a></li>
                        </ul>
                    </div>
                </div>
                <div className="general-box2 z-40">
                    <Header />
                    <div>

                    </div>
                    <div className="sticky top-[100vh]">
                        <h1 className="text-sm text-center m-2 ">© 2024 Copyright: Mounts</h1>
                    </div>
                </div>
                <div className="general-box3 z-0 bg-white dark:bg-slate-700">
                    <div>
                      < Panel />
                    </div>
                </div>
            </div>
        </>
    )
}

