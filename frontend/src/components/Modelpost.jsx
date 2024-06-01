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


    return (
        <div className="fyp-section-post w-[570px] sm:bg-red-600">
            <div className="fyp-section-post-area" onClick={() => navigate("/post/:${data._id}")} >
                <div className="fyp-section-post-user">
                    <img src={img.data} alt="imagen" className="perfil-img" />
                    <div>
                        <a className="perfil-name" href="/profile"><strong>{user.name}</strong></a>
                        <p className="perfil-username">{user.username}</p>
                    </div>
                </div>
                <div className="fyp-section-post-content">
                    {data.content}
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