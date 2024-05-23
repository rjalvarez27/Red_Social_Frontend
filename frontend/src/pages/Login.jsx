// logica de login
import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { validCorreo, validPassword } from "../components/Regext.jsx";
import axios from "axios";
import "../styles/login.css";


export function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const senData = async (e) => {
    e.preventDefault();
    if(!data.email || !data.password){
      alert('Campos estan vacios, por favor rellene todos los datos')
      return
    }
    else if (validCorreo.test(data.email) && validPassword.test(data.password)) {
      try {
        const response = await axios.post("http://localhost:3000/social/login", data);
        console.log(response.data.token);
        setToken(response.data.token);
        console.log(token)
        document.cookie = `token=${token}; max-age=7200;`
        console.log("Iniciando sesion");
        setTimeout(function () {
          navigate("/Home");
          }, 3000);
        return
      } catch (error) {
        console.log(error.response.data);
      }
    }
    
  };
return (
    <>
      <div className="containerL">
        <div className="box1 flex-none w-[50%]">
          <img src="../src/img/principales/logo.png" alt="logo" className="w-[150px] m-2" />
          <h1 className="text-3xl font-black ">MOUNTS</h1>
        </div>
        <div className="box2 flex-none w-[50%] bg-white ">
          <form className='flex flex-col items-center bg-transparent' onSubmit={senData}>
            <h3 className="text-lg font-black items-start m-2">Correo electronico</h3>
            <label className='flex m-2 items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
              <input type="Email" placeholder="Ingresa tu Email" className='p-1 rounded-md text-center' onChange={(e) => setData({...data, email: e.target.value})}/>
            </label>
            <h3 className="text-lg font-black items-start m-2">Contraseña</h3>
            <label className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
              <input type="password" placeholder="Contraseña" className='p-1 rounded-md text-center' onChange={(e) => setData({ ...data, password: e.target.value })} />
            </label>
            <div className="flex">
              <p className="text-sm text-center m-1">Haga Click aqui para iniciar sesion directamente </p>
            </div>
            <div className="flex">
              <button className="border w-12 py-3 m-1 rounded-lg  hover:bg-gray-800 hover:text-white">
                <i className="fa-brands fa-x-twitter"></i>
              </button>
              <button className="border w-12 py-3 m-1 rounded-lg hover:bg-gray-800 hover:text-red-600">
                <i className="fa-brands fa-google"></i>
              </button>
              <button className="border w-12 py-3 m-1 rounded-lg hover:bg-gray-800 hover:text-blue-600">
                <i className="fa-brands fa-facebook"></i>
              </button>
            </div>
            <NavLink to="/recuperar" className="text-lg text-center m-1">¿Olviste tu contraseña?</NavLink>
            <input type="submit" value="Iniciar Sesion" className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg m-4' />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="box3">
          <p>¿No tienes cuenta?</p>
          <NavLink to="/register" className="text-lg text-center m-1 text-blue-800">Registrate</NavLink>
        </div>
      </div>
      <div className="container">
         <p className="text-lg text-center m-1 font-semibold ">Descarga la app</p>
        <div className="flex-col relative ">
          <img src="../src/img/login/img2.png" alt="app" className="w-[400px] position:relative z-0 " />
          <img src="../src/img/login/img1.png" alt="fondo" className="w-[500px] absolute inset-0 z-[-1] " />
        </div>
      </div>
    </>
  );
}


