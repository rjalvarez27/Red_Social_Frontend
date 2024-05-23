// logica de login
import React, { useState } from "react";
import { useNavigate, NavLink} from "react-router-dom";
import axios from "axios";



export function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const senData = async (e) => {
    e.preventDefault();
    // clase 91  1.38min
    if (!data.email || !data.password) {
      alert("todos los campos son obligatorios");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/social/login",
        data
      );
      console.log(response.data);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/privada");
    } catch (error) {
      console.log(error.response.data);
    }
  };


  return (
    <>
      <div className="containerL">
        <div className="box1 flex-none w-1/3">
          <img src="../src/img/login/logo.png" alt="logo" className="w-[150px] m-2" />
          <h1 className="text-3xl">MOUNTS</h1>
        </div>
        <div className="box2">
          <form className='flex flex-col items-center bg-transparent'>
            <h3>Correo electronico</h3>
            <label className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
              <input type="Email" placeholder="Ingresa tu Email" className='p-1 rounded-md' />
            </label>
            <h3>Contraseña</h3>
            <label className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
              <input type="password" placeholder="Contraseña" className='p-1 rounded-md ' />
            </label>
            <div className="flex">
              <p className="hr">--------------- </p><h1> O </h1><p className="hr"> ---------------</p>
            </div>
            <div className="flex">
              <button className="m-3">
                <i className="fa-brands fa-x-twitter"></i>
              </button>
              <button className="m-3">
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button className="m-3">
                <i className="fa-brands fa-google"></i>
              </button>
            </div>
            <NavLink to="/recuperar">¿Olviste tu contraseña?</NavLink>
            <input type="submit" value="Iniciar Sesion" className='bg-black hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-lg m-8' />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="box3">
          <p>¿No tienes cuenta?</p>
          <NavLink to="/register">Registrate</NavLink>
        </div>
      </div>
      <div className="container">
        <div className="box4 	position: relative;">
          <p>Descarga la app</p>
          <img src="../src/img/login/img2.png" alt="app" className="w-[500px]" />
          <img src="../src/img/login/img1.png" alt="fondo" className="w-[500px] z-0 " />
        </div>
      </div>
    </>
  );
}


