import { Modelpost } from "./Modelpost";
import { Newcomment } from "./Newcomment";

export function Post(){

    return(
        <>
            <div className="principal">
                <div className="w-[100%] flex justify-center">
                        <div className="principal-post">

                        <Modelpost/>
                        
                        <div className="fyp-interaction-data">
                            <p>20.000 comentarios</p>
                            <p>17.654 compartidas</p>
                            <p>100.000 me gustas</p>
                        </div>
                        <hr className="w-[100%]"/>
                        <Newcomment/>
                        <hr className="w-[100%]"/>
                        
                        <Modelpost/>
                    </div>
                </div>
                
            </div>
        </>
    )
}