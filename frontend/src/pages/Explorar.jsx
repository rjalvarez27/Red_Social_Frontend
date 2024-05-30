import { Chatlist } from "../components/Chatlist";
import { Nav } from "../components/Nav";
import { Trends } from "../components/Trends";



export function Explorar() {
    return (
        <>
            <header className="header">
                <input type="search" name="search" id="search" placeholder="Buscar..." className="option-space-search" />
            </header>
            <Nav />

            <aside className="aside justify-between">
                <img src="src/images/logo.png" alt="Logo Mounts" className="logo-header m-5"/>
                <Chatlist/>
            </aside>
            <div className="principal">
                <div className="exp-area">
                    <section className="exp-section">
                        <Trends />
                    </section>
                </div>
            </div>
        </>
    );
}