import { Header } from '../components/Header.jsx'
import { Modelchat } from '../components/Modelchat.jsx'

import io from 'socket.io-client'
import axios from 'axios'
import { useState, useEffect } from 'react'


export function Messages(){
    /*const [socket, setSocket] = useState()



    useEffect(() => {
        const socket = io('http://localhost:3000')

        setSocket(socket)
    }, [])

    useEffect(() => {
        if (socket) {
            socket.on('message', (data) => {
                console.log(data)
            })
        }
    }, [socket])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = e.target[0].value
        console.log(message)
        if (!message) {
            alert('Por favor rellene el campo')
            return
        }
        socket.emit('message', message)
        e.target.reset()
    }*/
const socket = io('http://localhost:3000')
console.log(socket)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = e.target[0].value;
        if (!message) {
          alert('Por favor rellene el campo');
          return;
        }
        try {
          const response = await axios.post('http://localhost:3000/social/message', {
            message,
          });
          console.log(response.data);
        } catch (error) {
          console.error(error.message);
        }
        e.target.reset();
      };
        useEffect(() => {
          const socket = io();
          socket.on('message', (data) => {
            const li = document.createElement('li');
            li.textContent = data;
            document.getElementById('messages').appendChild(li);
          });
        }, []);

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
                <div className='chat-messages-area'>
                    <div className='chat-messages messages-receive'>

                    </div>
                </div>
                <div className='chat-messages-input'>
                    <form action="" onSubmit={handleSubmit} >
                        <textarea name="massage" id="message" ></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                    
                </div>
            </main>
        </>
    )
}