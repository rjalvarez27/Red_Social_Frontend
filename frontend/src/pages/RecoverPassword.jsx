import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { validPassword } from "../components/Regext.jsx";
import axios from "axios";
import Swal from 'sweetalert2';
import "../styles/recovery.css";


export function RecoverPassword() {
    const navigate = useNavigate();
    const params = useParams();
    const [passwordC, setPasswordC] = useState("");
    const [id, setId] = useState("");
    const [value, setValue] = useState({
        password: ""
    })

    const hanledUser = async (e) => {
        e.preventDefault();
        if (!value.password || !passwordC) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Campos vacios por favor verifique los datos",
                showConfirmButton: false,
                timer: 1500
              });
            return
        }
        if (value.password != passwordC) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Las contraseña no coinciden",
                showConfirmButton: false,
                timer: 1500
              });
            return
        } if (value.password.length < 6) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "La contraseña debe tener minimo 6 caracteres",
                showConfirmButton: false,
                timer: 1500
              });
            return
        } else if (validPassword.test(value.password)) {
            try {
                const response = await axios.patch(`http://localhost:3000/social/user/password/${id}`, value);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Se ha cambiado la contrasenia correctamente", 
                    showConfirmButton: false,
                    timer: 1500
                  });
                setTimeout(function () {
                    navigate("/");
                }, 2000);
            } catch (error) {
                console.error('error:', error.message);
            }
        }
    }
    useEffect(() => {
        const validToken = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/social/recovery/${params.code}`);
                if (response) {
                    setId(response.data.message);
                }
            } catch (error) {
                if (error.response.data.message === false) {
                    alert("El token no es valido o a expirado")
                    setTimeout(function () {
                        navigate("/");
                    }, 2000);
                }

            }
        };
        validToken();

    }, [params]);


    return (
        <div className="flex flex-col">
            <div className='flex-col'>
                <NavLink to="/" className="flex justify-end"><img src="../src/images/principales/home.png" alt="home" className="w-12 m-2" /></NavLink>
            </div>
            <div className="recovery-body">
                <div className="recovery-box">
                    <img src="../src/images/logo.png" alt="logo" className="w-[90px] m-2" />
                </div>
                <div className="recovery-box2">
                    <h3 className="text-2xl font-black  text-center">Recuperar Password</h3>
                    <form className='flex-col bg-transparent m-5' onSubmit={hanledUser}>
                        <h3 className="font-black m-1">Introduce tu nueva contraseña</h3>
                        <label className='flex border border-gray-800 rounded-lg shadow-lg bg-white  m-1'>
                            <input type="password" name="password" id="password" className='p-1 rounded-md text-center py-2 w-full' onChange={(e) => setValue({ ...value, password: e.target.value })} />
                        </label>
                        <h3 className=" font-black m-1">Introduce tu nueva contraseña</h3>
                        <label className='flex border border-gray-800 rounded-lg shadow-lg bg-white  m-1'>
                            <input type="password" name="passwordC" id="passwordC" className='p-1 rounded-md text-center w-full py-2' onChange={(e) => setPasswordC(e.target.value)} />
                        </label>
                        <div className="flex justify-center m-5 ">
                            <input type="submit" value="Enviar" className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-10 rounded-lg' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}   