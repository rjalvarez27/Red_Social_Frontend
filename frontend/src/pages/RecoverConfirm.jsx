import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { validCorreo, validPassword } from "../components/Regext.jsx";
import axios from "axios";
import "../styles/recovery.css";
import Cookies from 'js-cookie'

export function RecoverConfirm() {
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
                        <h3 className="text-sm font-black text-center m-1">Comprueba si has recibido un correo electronico con un codigo de recuperacion e indroduce el mismo a continuacion</h3>
                        <label className='flex border border-gray-800 rounded-lg shadow-lg bg-white  m-1'>
                            <input type="Email" className='p-1 rounded-md text-center w-full  py-2' />
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