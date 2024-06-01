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

    console.log(data)
    const imgdata = data.image

    if(imgdata == null){
        
    }

    /*const [publish, setPublish] = useState([]);
    useEffect(() => { // traer informacion de imagen de base datos 
        const GetPost = async () => {
            try{
                const response = await fetch(`http://localhost:3000/social/publicaciones/:${data._id}`);
                if(response.ok){
                    const result = await response.json();
                    setPublish(result);
                    //console.log(data[0].image[0].data)
                }else{
                    console.error('error');
                }
            } catch (error) {
                console.error(error);
            }
        }
        
        GetPost();
    }, []);*/


    return (
        <div className="fyp-section-post w-[570px] sm:bg-red-600">
            <div className="fyp-section-post-area" onClick={() => navigate("/post")} >
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


                    <img src={} alt="" className="fyp-section-post-img" />
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