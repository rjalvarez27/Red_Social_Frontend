import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Newcomment() {
        const navigate = useNavigate()
        const [data, setData] = useState({
            content: ""
        });

        console.log(data)
        const handleSubmit = async (e) => {
            e.preventDefault();
                try {
                    const response = await axios.post('http://localhost:3000/social/comments', data)
                    if(response){
                        alert('Cuenta creada con exito')
                        navigate('/')
                        console.log(response.data)
                    }else{
                        alert('Error')
                    }
                    
                } catch (error) {
                    
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000);
                    return
                }
             };

    return (

        <form className="fyp-section-post-form" type='Multipart/form-data' onSubmit={handleSubmit}>
            <textarea type="text" name="content" id="content" placeholder="Escribe un comentario..." onChange={(e) => setData({ ...data, content: e.target.value })}></textarea>
            

            <input type="submit" className="new-post" style={{width: "100px"}}/>
        </form>
    )
}