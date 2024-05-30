import { Chatlist } from "./Chatlist";
import { Settings } from "./Settings";
import { Trends } from "./Trends";
import { useState } from "react";
export function Aside() {
    const [settings, setSettings] = useState(false)

    const handleSettings = () => {
        setSettings(false)
    }

    return (
        <aside className="aside hidden xl:flex">
            <div className="option-space">
                <img src="src/images/notification.png" alt="Notificaciones" className="option-space-img"/>
                <input type="search" name="search" id="search" placeholder="Buscar..." className="option-space-search"/>
                <img src="src/images/settings.png" alt="Settings" className="option-space-img" onClick={() => setSettings(!settings)}/>
                
            </div>
            { settings && <Settings onSettings={handleSettings}/>  }

            

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