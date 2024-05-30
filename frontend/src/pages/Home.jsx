import { Header } from '../components/Header.jsx'
import {Nav} from '../components/Nav.jsx'
import { Aside } from '../components/Aside.jsx'
import { FyP } from '../components/FyP.jsx'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function Home(){
  const token = Cookies.get('token')
  const [id, setId] = useState()
  const [user, setUser] = useState()

	//const token = Cookies.set('token', 1234)

  console.log(id)
  console.log(user)
  console.log(user.name)

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

  return(
      <>
        <Header/>
        {user(<Nav name = {user.name} username = {user.username}/>)}

        <Aside/>
        <FyP/>
      </>
  )
}

