// logica de login
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/inde.css";

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
        "http://localhost:3000/api/login",
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
      <div className="container">
        <h2 className="text-4xl font-semibold m-4 bg-transparent text-black">
          Inicio
        </h2>
        <i className="bx bxs-user-rectangle text-9xl text-cyan-600"></i>
        <form
          className="flex flex-col m-3 gap-4 items-center bg-transparent"
          onSubmit={senData}
        >
          <label className="flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white">
            <i className="bx bx-envelope m-2"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ingresa tu Email"
              className="p-1 rounded-md"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </label>
          <label className="flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white ">
            <i className="bx bx-lock-alt m-2"></i>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="p-1 rounded-md "
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </label>
          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-cyan-600 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-full m-8"
          />
        </form>
      </div>
    </>
  );
}


