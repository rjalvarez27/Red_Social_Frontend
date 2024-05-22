export function Aside() {
    return (
        <aside className="aside">
            <div className="option-space">
                <img src="src/images/notification.png" alt="Notificaciones" className="option-space-img"/>
                <input type="search" name="search" id="search" placeholder="Buscar..." className="option-space-search"/>
            </div>
            <div className="trends-space">
                <div className="trends-space-area">
                    <span className="trends-title">Tendencias para ti</span>
                    <ul className="trends-list">
                        <li><a>Tendencia 1</a></li>
                        <li><a>Tendencia 2</a></li>
                        <li><a>Tendencia 3</a></li>
                        <li><a>Tendencia 4</a></li>
                        <li><a>Tendencia 5</a></li>
                    </ul>
                </div>
                
            </div>
            <div className="messages-space">
                <button>Mensajes</button>
                <ul className="messages">
                    <li>Mensaje 1</li>
                    <li>Mensaje 2</li>
                    <li>Mensaje 3</li>
                    <li>Mensaje 4</li>
                    <li><a href="">Ir a tus mensajes</a></li>
                </ul>
            </div>
        </aside>
    )
}