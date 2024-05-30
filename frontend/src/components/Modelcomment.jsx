import { useNavigate } from "react-router-dom";
export function Modelcomment({content, image }){



    const navigate = useNavigate()

    console.log(image)

    return(
        <>
        <hr />
            <div onClick={() => navigate("/post")} className="fyp-section-post w-[570px] sm:bg-red-600">
                <div className="fyp-section-post-area">
                    <div className="fyp-section-post-user">
                        <img src="" alt="imagen" className="perfil-img"/>
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
                        <img src="src/images/share_white.png" alt="" />
                        <img src="src/images/like-white.png" alt="" />
                    </div>
                </div>   
            </div>
            
        </>

    )
}