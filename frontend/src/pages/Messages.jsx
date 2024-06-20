import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";
import Cookies from 'js-cookie';
const socket = io("http://localhost:3000");
import "../styles/recovery.css";

export function Messages() {
    const token = Cookies.get("token");
    const [id, setId] = useState();
    const [user, setUser] = useState();
    const [img, setImg] = useState();
    const [name, setName] = useState();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [settings, setSettings] = useState(false)
    const handleSettings = () => {
        setSettings(false)
    }

    const hanldSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            body: message,
            from: user.name
        }
        setChat([...chat, newMessage]);
        socket.emit('message', message);
        setMessage("");
    }

    useEffect(() => {
        socket.on('message', receiveMessage)
        return () => socket.off('message', receiveMessage)
    }, [])

    const receiveMessage = (message) => {
        setChat((state) => [...state, message]);
    }

    useEffect(() => {
        const hanledToken = async () => {
            if (!token) {
                alert("Por favor inicie sesion")
                return
            } else {
                try {
                    const response = await axios.get(`http://localhost:3000/social/recovery/${token}`);
                    setId(response.data.message)
                } catch (error) {
                    console.error('error:', error.message);
                }
            }
        }
        const hanledUser = async () => {
            if (id) {
                try {
                    const response = await axios.get(`http://localhost:3000/social/user/${id}`);
                    setUser(response.data)
                    console.log(user.name)
                } catch (error) {
                    console.error('error:', error.message);
                }
            }
        }
        const getImage = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/social/avatar/${id}`)
                setImg(response)

            } catch (error) {
                console.error('error:', error.message);
            }
        }
        hanledToken()
        hanledUser()
        getImage()
    }, [token, id]);


    return (
        <div>
            <div className="general-content">
                <div className="general-box1 h-[100%]">
                    <div className='flex flex-col items-start' >
                        <div className='flex flex-col items-end  justify-start'>
                            <img src="" alt="avatar" className='w-[150px] cursor-pointer rounded-full my-10' onClick={() => navigate("/")} />
                        </div>
                    </div>
                    <Navmenu />
                    <img src="../src/images/principales/logo.png" alt="logo" className='w-[150px] m-10' />
                </div>
                <div className="general-chat">
                    <div className="h-[100%] bg-[rgb(57,54,66)] text-white flex items-center justify-center">
                        <form onSubmit={hanldSubmit} className="bg-zinc-900 p-10 rounded-lg w-[80%]">
                            <ul className="h-80 overflow-y-auto">
                                {chat.map((message, index) => (
                                    <li
                                        key={index}
                                        className={`my-2 p-2 table text-sm rounded-md ${message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
                                            }`}
                                    >
                                        <b>{message.from}</b>:{message.body}
                                    </li>
                                ))}
                            </ul>
                            <h1 className="text-2xl font-bold my-2">Chat Mounts</h1>
                            <input
                                name="message"
                                type="text"
                                placeholder="Escribe tu mensaje..."
                                onChange={(e) => setMessage(e.target.value)}
                                className="border-2 border-zinc-500 p-2 w-full text-black"
                                value={message}
                                autoFocus
                            />
                        </form>
                    </div>

                </div>
                <div className="general-box3 z-0">
                    <div className="option-space">
                        <img src="src/images/notification.png" alt="Notificaciones" className="option-space-img" />
                        <input type="search" name="search" id="search" placeholder="Buscar..." className="option-space-search" />
                        <img src="src/images/settings.png" alt="Settings" className="option-space-img" onClick={() => setSettings(!settings)} />

                    </div>
                    {settings && <Settings onSettings={handleSettings} />}

                    <div className="trends-space">
                        <div style={{ display: 'none' }}>
                            <Trends />
                        </div>

                    </div>

                    <div className="ad-space">
                        <div className="ad-space-area">
                            <h3>Suscribete a Premium</h3>
                            <p className="decoration-[rgb(174, 174, 174)]">¡Únete a nuestra comunidad exclusiva! Suscríbete para obtener funciones especiales y contenido premium directamente en tu bandeja de entrada. No te pierdas nada y forma parte de nuestra familia en línea.</p>
                        </div>
                    </div>

                    <Chatlist />
                </div>
            </div>
        </div>
    )
}
