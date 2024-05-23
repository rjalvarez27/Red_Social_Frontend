import { useState } from "react";
import { validName, validUserName, validCorreo, validPassword } from "../components/Regext.jsx";
import { NavLink } from "react-router-dom";
import axios from "axios";

export function Register() {
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
        if (!data.username || !data.email || !data.password || !confirm) {
            alert('Campos estan vacios, por favor rellene todos los datos')
            return
        }
        else if (validName.test(data.name) && validUserName.test(data.username) && validCorreo.test(data.email) && validPassword.test(data.password)) {
            if (data.password != confirm) {
                alert('Las contrasenias no coinciden, por favor verifique los datos')
                return
            }
            try {
                const response = await axios.post('http://localhost:3000/social/user', data)
                alert('Cuenta creada con exito')
                if (checkbox == true) {
                    console.log("redirigir a zona de pago")
                    setTimeout(function () {
                        window.location.reload();
                    }, 3000);
                    return
                } else {
                    console.log("redirigir a login")
                    setTimeout(function () {
                        window.location.reload();
                    }, 3000);
                    return
                }
            } catch (error) {
                console.log("Correo en uso, por favor ingrese otro")
                console.log(response.data)
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
                return
            }
        }
        else {
            console.log("Datos incorrectos, por favor verifique los datos")
        }
    };
    return (
        <>
            <div className="all flex">
                <div className="flex-col w-[25%] space-y-[450px] relative z-0 ">
                    <img src="../src/img/register/regist1.png" alt="register1" className="border-double border-[5px] border-black my-[80px]" />
                    <img src="../src/img/register/regist2.png" alt="register2" className="border-double border-[5px] border-black" />
                </div>
                <div className="container min-h-screen w-[50%] relative z-40">
                    <div className="conten1">
                        <img src="../src/img/principales/logo.png" alt="logo" className="w-[110px] " />
                    </div>
                    <div className="conten2">
                        <h1 className="text-2xl text-center m-3">Crea una cuenta</h1>
                        <form action="" className='flex flex-col gap-1 items-center' onSubmit={handleSubmit}>
                            <h3 className="text-lg font-black items-start ">Nombre</h3>
                            <label className='flex  border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
                                <input type="text" className='p-1 rounded-md text-center' name="name" id="name" onChange={(e) => setData({ ...data, name: e.target.value })} />
                            </label>

                            <h3 className="text-lg font-black items-start ">UserName</h3>
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
                                <p>Si no tienes ninguna cuenta , simplemente haz clic aqui. </p>
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
                            <input type="submit" value="Aceptar" className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg m-4 w-1/3' />
                        </form>
                    </div>
                    <div className="sticky top-[100vh] conten3">
                        <h1 className="text-sm text-center m-2 ">© 2024 Copyright: Mounts</h1>
                    </div>
                </div>
                <div className="flex-col w-[25%] space-y-[470px] relative z-0">
                    <NavLink to="/"><img src="../src/img/principales/home.png" alt="home" className="w-[60px] my-16 mx-20" /></NavLink>
                    <img src="../src/img/register/character.png" alt="personaje" className=" w-[250px] sticky z-10" />
                </div>
            </div>
        </>
    );
}