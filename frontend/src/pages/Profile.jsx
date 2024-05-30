import { Header } from '../components/Header.jsx'
import { Modelpost } from '../components/Modelpost.jsx'

export function Profile() {
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
                        <strong className='name-profile'>Nombre de usuario</strong>
                        <p className='username-profile'>@username</p>
                    </div>
                    <div className='info-profile'>
                        <p>Amigos</p>
                        <p>Seguidores</p>
                        <p>Seguidos</p>
                    </div>
                </section>

                <div className='edit-profile'>
                    <button className='edit-profile-button'>Editar perfil</button>
                </div>
            </nav>

            <aside className='nav'>
                <div className='aside-profile'>
                    <ul className="menu">
                        <li><a href="">Publicaciones</a></li>
                        <li><a href="">Fotos o videos</a></li>
                        <li><a href="">Destacados</a></li>
                        <li><a href="">Más Información</a></li>
                        <li><a href="">Configuración</a></li>
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