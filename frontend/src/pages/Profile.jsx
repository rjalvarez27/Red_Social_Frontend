import { Header } from '../components/Header.jsx'
import { Modelpost } from '../components/Modelpost.jsx'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'



export function Profile() {

    const navigate = useNavigate()
    const token = Cookies.get('token')
    const [id, setId] = useState()
    const [user, setUser] = useState()


	//const token = Cookies.set('token', 1234)

  console.log(id)
  console.log(user)


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
        <>
            <div className='header-profile'>
                <Header />
            </div>

            <nav className='nav-profile'>
                <div className='img-profile'>

                </div>
                <section className='datos-profile'>
                    <div className='user-profile'>
                        <strong className='name-profile'>{user?.name}</strong>
                        <p className='username-profile'>@{user?.username}</p>
                    </div>
                    <div className='info-profile'>
                        <p>Amigos</p>
                        <p>Seguidores</p>
                        <p>Seguidos</p>
                    </div>
                </section>

                
            </nav>

            <aside className='nav'>
                <div className='aside-profile'>
                    <ul className="menu">
                        <li><div className="decoracion -white"></div><a onClick={() => navigate("/profile")}>Publicaciones</a></li>
                        <li><div className="decoracion -white"></div><a onClick={() => navigate("/profile")}>Fotos o videos</a></li>
                        <li><div className="decoracion -white"></div><a onClick={() => navigate("/profile")}>Destacados</a></li>                        
                        <li><div className="decoracion -white"></div><a onClick={() => navigate("/profile")} >Más Información</a></li>
                        <li><div className="decoracion -gold"></div><a onClick={() => navigate("/member")} >Premium</a></li>
                        <li><div className="decoracion -white"></div><a onClick={() => navigate("/perfiluser")} >Configuración</a></li>
                    </ul>
                </div>
            </aside>

            <main className='main-profile'>
                <div className='post-profile'>
                    <Modelpost />
                    <Modelpost />
                    <Modelpost />
                    <Modelpost />
                    <Modelpost />
                    <Modelpost />
                </div>
            </main>
        </>
    )
}