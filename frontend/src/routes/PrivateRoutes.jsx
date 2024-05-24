import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie'

export function PrivateRoute() {
  const [token, setToken] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token') 

    const validToken = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/social/login",
          headers: {
            authorization: token,
          },
        });
        const info = response.data;
        if (info) {
          setToken(true);
          console.log(token)
        }
      } catch (error) {
        setToken(false);
        console.log(error);
      }
    };

    validToken();
  }, []);

  if (token == null) {
    return <div>Cargando...</div>;
  }

  return token ? <Outlet /> : <Navigate to="/" />;
}
