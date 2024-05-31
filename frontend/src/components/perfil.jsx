import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'




export function Perfil({id}) {
    console.log(id)
   
   useEffect(() => {
       const hanledImage = async () => {
           try {
               const response = await axios.get (`http://localhost:3000/social/avatar/${id}`);
               console.log(response.data)
              console.log(response.data.avatar[0].data)
               
               
              
           } catch (error) {
               console.error('error:', error.message);
   }       }
       hanledImage()
   }, [id])
    return (
    <div>
    
        
            
          <img src="response.data.avatar[0].data" alt="" /> 
        
    </div>
    )
}   