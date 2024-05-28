import { useState } from "react"

export function Chatlist() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="messages-space">
      {isActive ? (
      <div>
          
          <div className="messages-list">
              <ul className="messages">
                  <li>Mensaje 1</li>
                  <li>Mensaje 2</li>
                  <li>Mensaje 3</li>
              </ul>
              <a href="/messages" className="messages-link"><strong>Ir a tus mensajes</strong></a>
          </div>
        <button className="messages-button" onClick={() => setIsActive(false)}>Mensajes</button>
      </div>
      ) : (
        <button className="messages-button" onClick={() => setIsActive(true)}>Mensajes</button>
      )}
    </section>
  );
}