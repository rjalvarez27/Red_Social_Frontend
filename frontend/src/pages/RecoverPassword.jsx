import React, { useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { useParams , useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/recovery.css";


export function RecoverPassword() {
    const navigate = useNavigate();
    const [code, setCode] = useState(false);
    const params = useParams();
  


    useEffect(() => {
        const validToken = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/social/recovery/${params.code}`);
                setCode(response.data.message)
                console.log(code)
                if(code == true){
                    console.log("ok")
                }else if(response.data.message == "jwt malformed"){
                    navigate('/')
                }
            } catch (error) {
                console.log(error.response.data);

            }
        };
        validToken();
    }, []);


    return (
        <div className="flex flex-col">
            <div className='flex-col'>
                <NavLink to="/" className="flex justify-end"><img src="../src/img/principales/home.png" alt="home" className="w-12 m-2" /></NavLink>
            </div>
            <div className="recovery-body">
                <div className="recovery-box">
                    <img src="../src/img/principales/logo.png" alt="logo" className="w-[90px] m-2" />
                </div>
                <div className="recovery-box2">
                    <h3 className="text-2xl font-black  text-center">Recuperar Password</h3>
                    <form className='flex-col bg-transparent m-5'>
                        <h3 className="font-black m-1">Introduce tu nueva contraseña</h3>
                        <label className='flex border border-gray-800 rounded-lg shadow-lg bg-white  m-1'>
                            <input type="Email" className='p-1 rounded-md text-center   py-2' />
                        </label>
                        <h3 className=" font-black m-1">Introduce tu nueva contraseña</h3>
                        <label className='flex border border-gray-800 rounded-lg shadow-lg bg-white  m-1'>
                            <input type="Email" className='p-1 rounded-md text-center   py-2' />
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