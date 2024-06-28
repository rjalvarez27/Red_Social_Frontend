import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/general.css'

export function Home(){
    const navigate = useNavigate()
    





  return(
      <>
        <div>
            <div className="general-content">
                <div className="general-box1 z-0">
                    <img src="" alt="" className='w-[150px] cursor-pointer rounded-full my-10' onClick={() => navigate("/")} />
                    
                  
                </div>

                <div className="general-box2 z-40">
                    <div className="sticky top-[100vh] conten3">
                        <h1 className="text-sm text-center m-2 ">© 2024 Copyright: Mounts</h1>
                    </div>
                </div>
                <div className="general-box3 z-0">
                    <div className="option-space">
                        <img src="src/images/notification.png" alt="Notificaciones" className="option-space-img" />
                        <input type="search" name="search" id="search" placeholder="Buscar..." className="option-space-search" />
                        <img src="src/images/settings.png" alt="Settings" className="option-space-img" onClick={() => setSettings(!settings)} />

                    </div>
                </div>
            </div>
        </div>

    );
      </>
  )
}

