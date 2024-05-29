import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Newcomment() {
        const navigate = useNavigate()
        const [data, setData] = useState({
            content: "",
            image:""
        });

        console.log(data)
        const handleSubmit = async (e) => {
            e.preventDefault();
                try {
                    const response = await axios.post('http://localhost:3000/social/comments', data, {headers: { 'Content-Type': 'multipart/form-data' }});
                    console.log(response)
                    if(response){
                        console.log(response)
                        alert('Comentario creado con exito')
                        navigate('/post')
                        
                    }else{
                        alert('Error')
                    };
                    
                } catch (error) {
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000);
                    return
                }
             };

    return (

        <form className="fyp-section-post-form" encType="multipart/form-data" onSubmit={handleSubmit}>
            <p>Estas respondien a @username</p>
            <textarea type="text" name="content" id="content" placeholder="Escribe un comentario..." onChange={(e) => setData({ ...data, content: e.target.value })}></textarea>
            
            <input type="file" name="image" id="image" onChange={(e) => setData({ ...data, image: e.target.files[0] })} multiple/>

            <input type="submit" className="new-post" style={{width: "100px"}}/>
        </form>
    )
}