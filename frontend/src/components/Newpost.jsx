import { useState } from "react";
import axios from "axios";

export function Newpost({onClose}) {
    const handleClose = () => {
        onClose()
    }

        const [data, setData] = useState({
            content: "",
            image:""
        });

        console.log(data)
        const handleSubmit = async (e) => {
            e.preventDefault();
                try {
                    const response = await axios.post('http://localhost:3000/social/publicaciones', data, {headers: { 'Content-Type': 'multipart/form-data' }});
                    console.log(response)
                    if(response){
                        console.log(response)
                        alert('Post creado con exito')
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

            
                const [imageUrl, setImageUrl] = useState('');
                const [errorMessage, setErrorMessage] = useState('');
              
                const handleImageChange = (e) => {
                    const selectedFile = e.target.files[0];
                
                    if (selectedFile) {
                        const type = selectedFile.type;
                        if (type !== 'image/jpeg' && type !== 'image/jpg' && type !== 'image/png') {
                        setErrorMessage('El archivo no es válido.');
                        setImageUrl('');
                        } else {
                        setErrorMessage('');
                        const objectUrl = URL.createObjectURL(selectedFile);
                        setImageUrl(objectUrl);
                        }
                    }
                    };
                  
    
    return (
        <div className="new-post-area">
            
            <section className="new-post-section">
                
                <div className="new-post-form-area">
                    <form encType="multipart/form-data" onSubmit={handleSubmit} className="new-post-form">
                        <div className="new-post-form-top">
                            <div className="new-post-user">
                                <div className="perfil-img">
                                </div>
                            </div>
                            <textarea name="contenido" id="contenido" rows="5" placeholder="¿Qué estás pensando?" onChange={(e) => setData({ ...data, content: e.target.value })}></textarea>
                            <button onClick={handleClose} id="close-post-area"></button>
                            <label htmlFor="close-post-area" className="label-close"><img src="./src/images/x.png" alt="Close"/></label>
                        </div>
                        
                        <div className="new-post-form-interaction">
                            
                            <div className="new-post-form-interaction-photo">
                                {errorMessage && <p className="errorArchivo">{errorMessage}</p>}
                                {imageUrl && <img src={imageUrl} alt="Imagen subida" className="new-post-form-interaction-img"/>}
                            </div>
                            <div className="new-post-form-interaction-bottom">
                                <label htmlFor="image"><img src="src/images/imagen.png" alt="" className="label-image"/></label>
                                <input type="file" name="image" id="image" onChange={(e) => { handleImageChange(e); setData({ ...data, image: e.target.files[0] })
                                }} multiple max={4}/>
                                <input type="submit" value="Publicar" className="new-post w-[100px]"/>
                            </div>
                            
                        </div>
                    </form>
                    
                </div>
            </section>
        </div>
        
    )
}

