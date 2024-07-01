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
                <div className="general-box1 z-0">
                    <div className="flex h-[20%] w-[100%] items-center justify-center">
                        <img src="../src/images/principales/perfil.png" alt="" className='border rounded-full w-[150px]' />
                    </div>
                    <div className='flex h-[80%] w-[100%] items-center justify-center text-center'>
                        <ul className='flex flex-col '>
                           <li className='border border-white rounded-lg  hover:bg-gray-800 text-white font-bold py-2 px-6  m-3 italic'><a href="/publications">Publicaciones</a></li>
                           <li className='border border-white rounded-lg  hover:bg-gray-800 text-white font-bold py-2 px-6  m-4 italic'><a href="/addPublicaiones">Crear</a></li>
                           <li className='border border-white rounded-lg hover:bg-gray-800 text-white font-bold py-2 px-6  m-4 italic'><a href="/publications">Perfil</a></li>
                           <li className='border border-white rounded-lg  hover:bg-gray-800 text-white font-bold py-2 px-6  m-4 italic'><a href="/messages">Mensajeria</a></li>
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
                <div className="general-box3 z-0">
                    <div>
                      < Panel />
                    </div>
                </div>
            </div>
        </>
    )
}

