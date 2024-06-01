import { useState, useEffect } from "react";
import axios from "axios";
import { Modelpost } from "./Modelpost";

export function FyP(){

    
    const [posts, setPosts] = useState([]);
  
    const handleFyp = () => {

    
        
    }

    
    useEffect(() => { 
        console.log("hola paso por aqui");
        const GetPost = async () => {
            try{
                const response = await axios.get('http://localhost:3000/social/publicaciones');
                console.log(response);
                if(response.ok){
                    const data = await response.json();
                    setPosts(data);
                }else{
                    console.error('error');
                }
            } catch (error) {
                console.error(error);
            }
        }
        
        GetPost();
    }, []);

    return (
        <>
            <main className="principal bg-[rgb(57,54,66)] w-[100%] lg:left-[20%] lg:w-[80%] xl:w-[60%]">
                
                <nav className="fyp-nav w-[100%] lg:w-[80%] xl:w-[60%] ">
                    <a href="" className="fyp-nav-link w-[100%]"><button>General</button></a>
                </nav>
                <div className="fyp-area">
                    <section className="fyp-section">
                       
                    </section>
                </div>
            </main>
        </>
    )
}