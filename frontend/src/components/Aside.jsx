import { Chatlist } from "./Chatlist";
import { Trends } from "./Trends";
export function Aside() {

    return (
        <aside className="aside">
            <div className="option-space">
                <img src="src/images/notification.png" alt="Notificaciones" className="option-space-img"/>
                <input type="search" name="search" id="search" placeholder="Buscar..." className="option-space-search"/>
            </div>
            <div className="trends-space">
                <Trends/>
            </div>

            <Chatlist/>

        </aside>
    )
}