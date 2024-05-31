import { useState, useEffect } from "react";

export function Online() {
    const [inLine, setInLine] = useState(true)

    useEffect(() => {
        // Función para obtener el valor de la cookie
        const getCookieValue = (cookieName) => {
          const cookies = document.cookie.split(';');
          for (const cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === cookieName) {
              return decodeURIComponent(value);
            }
          } 
        };
    
        const idFromCookie = getCookieValue('token');
    
        if (idFromCookie) {
          setInLine(true);
        } else {
          setInLine(false);
        }
      }, []);
    return (
        <>
            {inLine ? <img src="../src/images/inline.png" alt="" className="w-3 h-3" /> : null}
        </>
    )
}