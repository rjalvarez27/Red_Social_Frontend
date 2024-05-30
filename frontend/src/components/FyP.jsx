import { useState, useEffect } from "react";
import axios from "axios";
import { Modelpost } from "./Modelpost";

export function FyP(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const GetPost = async () => {
            try{
                const response = await fetch('http://localhost:3000/social/publicaciones');
                if(response.ok){
                    const data = await response.json();
                    setPosts(data);
                    console.log(data)
                    console.log(data[0].image[0].data)
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
            <main className="principal bg-[#f5f5f5] w-[100%] lg:left-[20%] lg:w-[80%] xl:w-[60%]">
                
                <nav className="fyp-nav w-[100%] lg:w-[80%] xl:w-[60%]">
                    <a href="" className="fyp-nav-link"><button>General</button></a>
                    <hr />
                    <a href="" className="fyp-nav-link"><button>Seguidos</button></a>
                </nav>
                <div className="fyp-area">
                    <section className="fyp-section">
                        {posts.map((post) => (
                            <Modelpost content={post.content} key={post._id} image={post.image}/>
                        ))}
                    </section>
                </div>
            </main>
        </>
    )
}