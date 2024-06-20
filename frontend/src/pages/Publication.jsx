

import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'


export function Publication() {
    const navigate = useNavigate()
    const token = Cookies.get('token')
    const [id, setId] = useState()
    const [user, setUser] = useState()

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
        const getImage = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/social/avatar/${id}`)
                setImg(response)
                console.log(response.data)
            } catch (error) {
                console.error('error:', error.message);
            }
        }
        hanledToken()
        hanledUser()
        getImage()
    }, [token, id]);

    return (
        <>
            <Header />
            {<Nav name={user?.name} username={user?.username}/>}
            <Aside />
            <Post />
        </>
    )
}

