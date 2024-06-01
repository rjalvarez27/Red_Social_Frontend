import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie'

export function Newpost({ onClose }) {
    const token = Cookies.get('token')
    const [imageUrl, setImageUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const[id, setId] = useState('')
    const handleClose = () => {
        onClose()
    }

    const [data, setData] = useState({
        id_user: '',
        contenido: '',
        image: ''
    });
  console.log(id)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.image === '') { return alert('Por favor inserte una imagen') }
        if (data.contenido === '') { return alert('Por favor inserte un comentario de la foto') }
        else {
            try {
                data.id_user = id
                const response = await axios.post('http://localhost:3000/social/publicaciones', data, { headers: { 'Content-Type': 'multipart/form-data' } });
                console.log(response)
                if (response) {
                    console.log(response)
                    window.location.reload();
                } else {
                    alert('Error')
                };

            } catch (error) {
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
                return
            }
        }
    };

    useEffect(() => {
        const hanledToken = async () => {
            if (!token) {
                alert('Por favor inicia sesion')
                setTimeout(function () {
                    navigate("/login");
                }, 2000);
                return
            } else {
                try {
                    const response = await axios.get(`http://localhost:3000/social/recovery/${token}`);
                    setId(response.data.message)
                } catch (error) {
                    console.error('error:', error.message);
                }
            }
        }  
       hanledToken()
    }, [token]);

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
                            <textarea name="contenido" id="contenido" rows="5" placeholder="¿Qué estás pensando?" onChange={(e) => setData({ ...data, contenido: e.target.value })}></textarea>
                            <button onClick={handleClose} id="close-post-area"></button>
                            <label htmlFor="close-post-area" className="label-close"><img src="./src/images/x.png" alt="Close" /></label>
                        </div>

                        <div className="new-post-form-interaction">

                            <div className="new-post-form-interaction-photo">
                                {errorMessage && <p className="errorArchivo">{errorMessage}</p>}
                                {imageUrl && <img src={imageUrl} alt="Imagen subida" className="new-post-form-interaction-img" />}
                            </div>
                            <div className="new-post-form-interaction-bottom">
                                <label htmlFor="image"><img src="src/images/imagen.png" alt="" className="label-image" /></label>
                                <input type="file" name="image" id="image" onChange={(e) => {
                                        (e); setData({ ...data, image: e.target.files[0] })
                                }} multiple max={4} />
                                <input type="submit" value="Publicar" className="new-post w-[100px]" />
                            </div>
                        </div>
                    </form>

                </div>
            </section>
        </div>

    )
}

