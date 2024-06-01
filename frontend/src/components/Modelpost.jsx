import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie'
export function Modelpost({ data }) {
    const navigate = useNavigate()
    const token = Cookies.get('token')
    const [liked, setLiked] = useState(false)
    const like = liked ? "src/images/like-red.png" : "src/images/like-white.png"
    const [shared, setShared] = useState(false)
    const share = shared ? "src/images/share_green.png" : "src/images/share_white.png"
    const [id, setId] = useState({})
    const [user, setUser] = useState({})
    const [img, setImg] = useState({})
    const [userPublic, setUserPublic] = useState({})

    
//console.log(data)
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
                console.log(response.data)
            } catch (error) {
                console.error('error:', error.message);
            }
        }
    }
    const getImage = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/social/avatar/${data._id}`)
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

useEffect(() => {
    const getUserPublic = async () => {
        try{
            const response = await axios.get(`http://localhost:3000/social/user/${data.id_user}`);
            setUserPublic(response.data);
            console.log(response)

        } catch (error) {
            console.error(error);
        }
    }
    getUserPublic()
}, []);

console.log(img.data)

    return (
        <div className="fyp-section-post w-[570px] sm:bg-red-600">
            <div className="fyp-section-post-area" onClick={() => navigate(`/post`)} > 
                <div className="fyp-section-post-user">
                    <img src={img} alt="imagen" className="perfil-img" />
                    <div>
                        <a className="perfil-name" href="/profile"><strong>{userPublic.name}</strong></a>
                        <p className="perfil-username">{userPublic.username}</p>
                    </div>
                </div>
                <div className="fyp-section-post-content">
                    {data.contenido}
                </div>
                <div className="fyp-section-post-image" >


                    <img src={data.image} alt="" className="fyp-section-post-img" />
                </div>
            </div>

            <div className="fyp-section-post-interaction">
                <img src="src/images/down-arrow.png" alt="" />
                <div className="fyp-interaction">
                    <img src={share} alt="" onClick={() => setShared(!shared)} />
                    <img src={like} alt="" onClick={() => setLiked(!liked)} />
                </div>
            </div>
        </div>
    )
}