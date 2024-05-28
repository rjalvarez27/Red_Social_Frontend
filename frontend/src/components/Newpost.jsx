import { Newcomment} from "./Newcomment"

export function Newpost({onClose}) {
    const handleClose = () => {
        onClose()
    }

    return (
        <div className="new-post-area">
            <section className="new-post-section">
                <div className="new-post-user">
                    <div className="perfil-img">
                        
                    </div>
                </div>
                <div className="new-post-form-area">
                    {/*<form action="" method="post" className="new-post-form">
                        <textarea name="contenido" id="contenido" rows="5" placeholder="¿Que estas pensando?"></textarea>
                        <div className="new-post-form-interaction">
                            <label htmlFor="image"><img src="src/images/imagen.png" alt="" className="label-image"/></label>
                            <input type="file" name="image" id="image" />
                            <input type="submit" value="Publicar" className="new-post" style={{width: "100px"}}/>
                        </div>
                    </form>*/}
                    <Newcomment/>
                    <button onClick={handleClose}>cerrar</button>
                </div>
            </section>
        </div>
        
    )
}

