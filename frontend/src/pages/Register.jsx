import { useState, useEffect } from "react";
import { validName, validUserName, validCorreo, validPassword } from "../components/Regext.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'
import "../styles/register.css";

export function Register() {
    const navigate = useNavigate()
    const [confirm, setConfirm] = useState("");
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "", 
        password: "",
    });
    const [checkbox, setCheckbox] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.name || !data.username || !data.email || !data.password || !confirm) {
            alert('Campos estan vacios, por favor rellene todos los datos')
            return
        }
        if (!validName.test(data.name)) {
            alert('Nombre incorrecto, por favor verifique los datos')
        }
        if (!validUserName.test(data.username)) {
            alert('Usuario incorrecto, por favor verifique los datos')
        }
        if (!validCorreo.test(data.email)) {
            alert('Correo incorrecto, por favor verifique los datos')
        }
        if (!validPassword.test(data.password)) {
            alert('Contraseña incorrecta, por favor verifique los datos')
        } 
        if (data.password.length < 6) {
            alert('La contrasenia debe tener minimo 6 caracteres')
            return
        }
        else if (data.password != confirm) {
            alert('Las contrasenias no coinciden, por favor verifique los datos')
            return
        }
        else {
            try {
                const response = await axios.post('http://localhost:3000/social/user', data)
                if (checkbox == true) {
                    alert("redirigiendo a la zona de pago, usuario registrado con exito")
                    setTimeout(function () {
                        navigate("/membership");
                    }, 2000);
                    return
                } else {
                    alert("usuario registrado con exito")
                    setTimeout(function () {
                        navigate("/login");
                    }, 2000);
                    return
                }
            } catch (error) {
                alert("Correo en uso, por favor ingrese otro")
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
                return
            }
        }
    };
    useEffect(() => {
        const data = Cookies.get('token')
        if (data) {
            navigate('/')
        }
    });
    return (
        <div>
            <div className="all flex">
                <div className="flex-col w-[25%] space-y-[350px] relative z-0  ">
                    <img src="../src/images/register/regist1.png" alt="register1" className="border-double border-[5px] border-black my-[80px]" />
                    <img src="../src/images/register/regist2.png" alt="register2" className="border-double border-[5px] border-black" />
                </div>
                <div className="container min-h-screen w-[50%] relative z-40">
                    <div className="conten1">
                        <img src="../src/images/logo.png" alt="logo" className="w-20 " />
                    </div>
                    <div className="conten2 bg-white">
                        <h1 className="text-2xl text-center m-3">Crea una cuenta</h1>
                        <form action="" className='flex flex-col gap-1 items-center' onSubmit={handleSubmit}>
                            <h3 className="text-lg font-black items-start ">Nombre</h3>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
                                <input type="text" className='p-1 rounded-md text-center' name="name" id="name" onChange={(e) => setData({ ...data, name: e.target.value })} />
                            </label>
                            <h3 className="text-lg font-black items-start ">@UserName</h3>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
                                <input type="text" className='p-1 rounded-md text-center' name="username" id="username" onChange={(e) => setData({ ...data, username: e.target.value })} />
                            </label>
                            <h3 className="text-lg font-black items-start">Email*</h3>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
                                <input type="Email" className='p-1 rounded-md text-center' name="email" id="email" onChange={(e) => setData({ ...data, email: e.target.value })} />
                            </label>
                            <h3 className="text-lg font-black items-start">Password*</h3>
                            <p className="text-[10px] px-16 m-1">Ingrese una combinacion de al menos 6 numeros, letras o signos puntuacion ( como ! y & )</p>
                            <label className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 m-1 shadow-lg bg-white '>
                                <input type="password" className='p-1 rounded-md text-center' name="password" id="password" onChange={(e) => setData({ ...data, password: e.target.value })} />
                            </label>
                            <label className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 m-1 shadow-lg bg-white'>
                                <input type="password" placeholder="Confirm Password" className='p-1 rounded-md  text-center text-grey-800' name="confirm" id="confirm" onChange={(e) => setConfirm(e.target.value)} />
                            </label>
                            <div className="flex">
                                <input type="checkbox" placeholder="Contraseña" className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 m-1 shadow-lg bg-white  hover:accent-black ' name="premium" id="premium" onChange={(e) => setCheckbox(e.target.checked)} />
                                <p className="text-[10px]  m-1">Haz click aqui si desea tener una cuenta premium directamente.  </p>
                            </div>
                            <div className="flex">
                                <p>Si no tienes ninguna cuenta , simplemente haz clic aqui </p>
                            </div>
                            <div className="flex">
                                <button className="border w-12 py-3 m-1 rounded-lg  hover:bg-gray-800 hover:text-white" disabled>
                                    <i className="fa-brands fa-x-twitter"></i>
                                </button>
                                <button className="border w-12 py-3 m-1 rounded-lg hover:bg-gray-800 hover:text-red-600" disabled>
                                    <i className="fa-brands fa-google"></i>
                                </button>
                                <button className="border w-12 py-3 m-1 rounded-lg hover:bg-gray-800 hover:text-blue-600" disabled>
                                    <i className="fa-brands fa-facebook"></i>
                                </button>
                            </div>
                            <input type="submit" value="Aceptar" className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg m-4 w-1/3' />
                        </form>
                    </div>
                    <div className="sticky top-[100vh] conten3">
                        <h1 className="text-sm text-center m-2 ">© 2024 Copyright: Mounts</h1>
                    </div>
                </div>
                <div className="flex-col w-[25%] relative z-0 space-y-[350px] ">
                    <NavLink to="/login"><img src="../src/images/principales/home.png" alt="home" className="w-[60px] my-10 mx-36" /></NavLink>
                    <img src="../src/images/register/character.png" alt="personaje" className=" w-[280px] sticky z-10 " />
                </div>
            </div>
        </div>
    );
}