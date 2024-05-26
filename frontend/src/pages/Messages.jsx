import { Header } from '../components/Header.jsx'
import { Modelchat } from '../components/Modelchat.jsx'
export function Messages(){
    return (
        <>
            <div className='header-profile'>
                <Header/>
            </div>
            <nav className="nav">
                <div className='nav-messages'>
                    
                    <div className="img-profile-messages"></div>

                    <input type="search" name="" id="" className="nav-messages-search"/>


                    <div className="messages-chatlist">
                        <Modelchat/>
                        <Modelchat/>
                        <Modelchat/>
                        <Modelchat/>
                    </div>
                </div>
            </nav>
            <main className='chat'>
                <div className='chat-messages-header'>
                    
                </div>
                <div className='chat-messages-area'></div>
                <div className='chat-messages-input'>
                    <textarea name="" id=""></textarea>
                </div>
            </main>
        </>
    )
}