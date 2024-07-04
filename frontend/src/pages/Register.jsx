import { useState, useEffect } from "react";
import { validName, validUserName, validCorreo, validPassword } from "../components/Regext.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import "../styles/register.css";

export function Register() {
    const navigate = useNavigate()
    const [confirm, setConfirm] = useState("");
    const [token, setToken] = useState(null)
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });
    const [checkbox, setCheckbox] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.name) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Nombre vacio",
                showConfirmButton: false,
                timer: 1200
            });
            return;
        }
        if (!data.username) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "@Username vacio",
                showConfirmButton: false,
                timer: 1200
            });
            return;
        }
        if (!data.email) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Email vacio",
                showConfirmButton: false,
                timer: 1200
            });
            return;
        }
        if (!data.password) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Clave vacia",
                showConfirmButton: false,
                timer: 1200
            });
            return;
        }
        if (!confirm) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Confirmar clave vacio",
                showConfirmButton: false,
                timer: 1200
            });
            return;
        }
        else if (!validName.test(data.name)) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Nombre invalido, por favor verifique los datos",
                showConfirmButton: false,
                timer: 1300
            });
            return;
        }
        else if (!validUserName.test(data.username)) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Username invalido, por favor verifique los datos",
                showConfirmButton: false,
                timer: 1300
            });
            return;
        }
        else if (!validCorreo.test(data.email)) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Correo invalido, por favor verifique los datos",
                showConfirmButton: false,
                timer: 1300
            });
            return;
        }
        else if (!validPassword.test(data.password)) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Clave invalida, por favor verifique los datos",
                showConfirmButton: false,
                timer: 1300
            });
            return;
        }
        else if (data.name.length < 4 && data.username.length <4 ) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Nombre o Username muy cortos, por favor verifique los datos",
                showConfirmButton: false,
                timer: 1300
            });
            return;
        }
        else if (data.password.length < 6 ) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "clave muy corta, por favor verifique los datos",
                showConfirmButton: false,
                timer: 1300
            });
            return;
        }
        else if (data.password != confirm) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Claves no coinciden, por favor verifique los datos",
                showConfirmButton: false,
                timer: 1300
            });
            return;
        }
        else {
            try {
                const response = await axios.post('http://localhost:3000/social/user', data)
                if (checkbox == true && response) {
                    try{
                    const request = await axios.post("http://localhost:3000/social/login", {email: data.email, password: data.password});
                    const info = request.data
                    setToken(info.token)
                    Cookies.set('token', `${info.token}`)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Usuario registrado con exito, Reedirigiendo a la pagina de pagos",
                        showConfirmButton: false,
                        timer: 1300
                    });
                    setTimeout(function () {
                        navigate("/member");
                    }, 2000);
                    return
                    } catch (error) {
                        console.log(error.response.data);
                    }
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Usuario registrado con exito",
                        showConfirmButton: false,
                        timer: 1300
                    });
                    setTimeout(function () {
                        navigate("/");
                    }, 2000);
                    return
                }
            } catch (error) {
                console.log(error.response.data);
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: "Correo ya registrado, por favor ingrese otro",
                    showConfirmButton: false,
                    timer: 1300
                });
                return
            }
        }
    };
    useEffect(() => {
        const data = Cookies.get('token')
        if (data) {
            navigate('/home')
        }
    });
    return (
        <div>
            <div className="flex flex-row z-0">
                <div className="content3">
                    <img src="../src/images/register/regist1.png" alt="register1" className="border-double border-[5px] border-black my-[80px] rounded-md w-[250px] z-0" />
                    <img src="../src/images/register/regist2.png" alt="register2" className="border-double border-[5px] border-black rounded-md my-[80px] z-0" />
                </div>
                <div className="container min-h-screen w-[50%] relative z-40">
                    <div className="conten1">
                        <img src="../src/images/principales/logo.png" alt="logo" className="w-20 " />
                    </div>
                    <div className="conten2 bg-white">
                        <h1 className="text-2xl text-center m-3">Crea una cuenta</h1>
                        <form action="" className='flex flex-col gap-1 items-center' onSubmit={handleSubmit}>
                            <h3 className="text-lg font-black items-start ">Nombre</h3>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
                                <input type="text" className='p-1 rounded-md' placeholder="Indique su nombre..." name="name" id="name" onChange={(e) => setData({ ...data, name: e.target.value })} />
                            </label>
                            <h3 className="text-lg font-black items-start ">@UserName</h3>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
                                <input type="text" className='p-1 rounded-mdr' placeholder="Indique su @username..." name="username" id="username" onChange={(e) => setData({ ...data, username: e.target.value })} />
                            </label>
                            <h3 className="text-lg font-black items-start">Email*</h3>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
                                <input type="Email" className='p-1 rounded-md' placeholder="Indique su correo..." name="email" id="email" onChange={(e) => setData({ ...data, email: e.target.value })} />
                            </label>
                            <h3 className="text-lg font-black items-start">Password*</h3>
                            <p className="text-[10px] px-16 m-1">Ingrese una combinacion de al menos 6 numeros, letras o signos puntuacion ( como ! y & )</p>
                            <label className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 m-1 shadow-lg bg-white '>
                                <input type="password" className='p-1 rounded-md' placeholder="Defina una contraseña" name="password" id="password" onChange={(e) => setData({ ...data, password: e.target.value })} />
                            </label>
                            <label className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 m-1 shadow-lg bg-white'>
                                <input type="password" placeholder="Confirmar contraseña" className='p-1 rounded-md text-grey-800' name="confirm" id="confirm" onChange={(e) => setConfirm(e.target.value)} />
                            </label>
                            <div className="flex">
                                <input type="checkbox" className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 m-1 shadow-lg bg-white  hover:accent-black ' name="premium" id="premium" onChange={(e) => setCheckbox(e.target.checked)} />
                                <p className="text-[10px]  m-1">Haz click aqui si desea tener una cuenta premium directamente.  </p>
                            </div>
                            <div className="flex">
                                <p>Si no tienes ninguna cuenta , simplemente haz clic aqui: </p>
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
                    <div className="sticky top-[100vh]">
                        <h1 className="text-sm text-center m-2 ">© 2024 Copyright: Mounts</h1>
                    </div>
                </div>
                <div className="content3">
                    <div className="w-[80%] flex justify-end mt-6">
                        <NavLink to="/"><img src="../src/images/principales/home.png" alt="home" className="w-[60px]" /></NavLink>
                    </div>
                    <div className="w-full sticky top-[100vh]">
                        <img src="../src/images/register/character.png" alt="personaje" className=" w-[280px] sticky top-[100vh] " />
                    </div>
                </div>
            </div>
        </div>
    );
}