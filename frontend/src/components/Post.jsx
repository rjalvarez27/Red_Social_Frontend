import axios from "axios";
import { Modelcomment } from "./Modelcomment";
import { Modelpost } from "./Modelpost";
import { Newcomment } from "./Newcomment";
import { useState, useEffect } from "react";

export function Post(){
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const GetPost = async () => {
            try{
                const response = await fetch('http://localhost:3000/social/comments');
                if(response.ok){
                    const data = await response.json();
                    setComments(data);
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

    return(
        <>
            <div className="principal bg-[rgb(57,54,66)] w-[100%] lg:left-[20%] lg:w-[80%] xl:w-[60%]">
                <div className="w-[100%] flex justify-center">
                        <div className="principal-post rounded-b-lg">
                        <div className="w-[100%] flex justify-end">
                            <img src="src/images/x.png" alt="Cerrar Post" className="w-[25px] h-[25px]" onClick={() => navigate("/")}/>
                        </div>


                        <Modelpost/>
                        
                        <div className="fyp-interaction-data">
                            {/*<p>20.000 comentarios</p>
                            <p>17.654 compartidas</p>
                            <p>100.000 me gustas</p>*/}
                        </div>
                        <hr className="w-[100%]"/>
                        <Newcomment/>
                        <hr className="w-[100%]"/>
                        <div className="flex flex-col-reverse">
                            {comments.map((comment) => (
                            <Modelcomment content={comment.content} key={comment._id} image={comment.image}/>
                            
                        ))}
                        </div>
                
                    </div>
                </div>
                
            </div>
        </>
    )
}