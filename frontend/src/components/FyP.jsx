export function FyP(){
    return (
        <>
            <main className="principal">
                
                <nav className="fyp-nav">
                    <a href="" className="fyp-nav-link"><button>General</button></a>
                    <hr />
                    <a href="" className="fyp-nav-link"><button>Seguidos</button></a>
                </nav>
                <div className="fyp-area">
                    <section className="fyp-section">
                        <div className="fyp-section-post">
                            <div className="fyp-section-post-area">
                                <div className="fyp-section-post-user">
                                    <img src="" alt="imagen" className="perfil-img"/>                            
                                    <div>
                                        <a className="perfil-name" href="/profile"><strong>Nombre de usuario</strong></a>
                                        <p className="perfil-username">@username</p>
                                    </div>
                                </div>
                                <span className="fyp-section-post-content">
                                        contenido de publicacion
                                </span>
                                <div className="fyp-section-post-image" >
                                    <img src="" alt="" />
                                </div>
                            </div>
                                
                            <div className="fyp-section-post-interaction">
                                <img src="src/images/down-arrow.png" alt="" />

                                <div className="fyp-interaction">
                                    <img src="src/images/comments.png" alt="" />
                                    <img src="src/images/share_white.png" alt="" />
                                    <img src="src/images/like-white.png" alt="" />
                                </div>
                            </div>   
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}