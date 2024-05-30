import { Chatlist } from "./Chatlist";
import { Trends } from "./Trends";
export function Aside() {

    return (
        <aside className="aside hidden xl:flex">
            <div className="option-space">
                <img src="src/images/notification.png" alt="Notificaciones" className="option-space-img"/>
                <input type="search" name="search" id="search" placeholder="Buscar..." className="option-space-search"/>
            </div>
            <div className="trends-space">
                <div style={{display: 'none'}}>
                    <Trends />
                </div>
                
            </div>
            
            <div className="ad-space">
                <div className="ad-space-area">
                    <h3>Suscribete a Premium</h3>
                    <p className="decoration-[rgb(174, 174, 174)]">¡Únete a nuestra comunidad exclusiva! Suscríbete para obtener funciones especiales y contenido premium directamente en tu bandeja de entrada. No te pierdas nada y forma parte de nuestra familia en línea.</p>
                </div>
            </div>

            <Chatlist/>

        </aside>
    )
}