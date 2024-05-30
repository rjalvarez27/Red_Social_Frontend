import { useState, useEffect } from "react";

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
            <main className="principal">
                
                <nav className="fyp-nav">
                    <a href="" className="fyp-nav-link"><button>General</button></a>
                    <hr />
                    <a href="" className="fyp-nav-link"><button>Seguidos</button></a>
                </nav>
                <div className="fyp-area">
                    <section className="fyp-section">
                        {posts.map((post) => (
                            <Modelpost content={post.content} key={post.id} />
                        ))}
                    </section>
                </div>
            </main>
        </>
    )
}