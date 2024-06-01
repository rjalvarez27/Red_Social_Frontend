import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Modelpost({content, image }){
    const navigate = useNavigate()
    const [liked, setLiked] = useState(false)
    const like = liked ? "src/images/like-red.png" : "src/images/like-white.png"
    const [shared, setShared] = useState(false)
    const share = shared ? "src/images/share_green.png" : "src/images/share_white.png"
    
    return(
            <div className="fyp-section-post w-[570px] sm:bg-red-600">
                <div className="fyp-section-post-area" onClick={() => navigate("/post")} >
                    <div className="fyp-section-post-user">
                        <img src="" alt="" className="perfil-img"/>
                        <div>
                            <a className="perfil-name" href="/profile"><strong>Nombre de usuario</strong></a>
                            <p className="perfil-username">@username</p>
                        </div>
                    </div>
                    <span className="fyp-section-post-content">
                        {content}
                    </span>
                    <div className="fyp-section-post-image" >
                    </div>
                </div>
                    
                <div className="fyp-section-post-interaction">
                    <img src="src/images/down-arrow.png" alt="" />
                    <div className="fyp-interaction">
                        <img src={share} alt="" onClick={() => setShared(!shared)}/>
                        <img src={like} alt="" onClick={() => setLiked(!liked)}/>
                    </div>
                </div>   
            </div>
    )
}