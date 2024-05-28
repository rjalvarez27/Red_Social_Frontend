import { Modelpost } from "./Modelpost";

export function Post(){

    return(
        <>
            <div className="principal">
                <div className="principal-post">

                    <Modelpost/>
                    
                    <div className="fyp-interaction-data">
                        <p>20.000 comentarios</p>
                        <p>17.654 compartidas</p>
                        <p>100.000 me gustas</p>
                    </div>
                    <form action="" method="post" className="fyp-section-post-form">
                        <input type="text" name="comment" id="comment" placeholder="Escribe un comentario..."/>
                        <input type="file" name="image" id="image" />
                        <label htmlFor="image"><img src="src/images/imagen.png" alt="Subir imagen" className="label-image"/></label>
                        <input type="submit" className="new-post" style={{width: "100px"}}/>
                    </form>
                    <hr style={{width:"100%"}}/>
                    
                    <Modelpost/>
                </div>
            </div>
        </>
    )
}