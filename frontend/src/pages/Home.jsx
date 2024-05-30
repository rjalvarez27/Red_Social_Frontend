import { Header } from '../components/Header.jsx'
import { Nav } from '../components/Nav.jsx'
import { Aside } from '../components/Aside.jsx'
import { FyP } from '../components/FyP.jsx
import { Newpost } from '../components/Newpost.jsx'

export function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Aside />
      <FyP />

    </>

import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function Home(){
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

/*useEffect(() => {
    const hanledData = async () => {
        if (!token) {
            alert('Por favor inicia sesión');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
            return;
        }

        try {
            const tokenResponse = await axios.get(`http://localhost:3000/social/recovery/${token}`);
            const userId = tokenResponse.data.message;

            if (userId) {
                const userResponse = await axios.get(`http://localhost:3000/social/user/${userId}`);
                setUser(userResponse.data);
            }
        } catch (error) {
            console.error('Error al obtener datos:', error.message);
        }
    };

    hanledData();
}, [token]);*/

  return(
      <>
        <Header/>
        {<Nav name={user?.name} username={user?.username}/>}
		{/*<Nav/>*/}
        <Aside />
        <FyP/>
      </>
  )
}

