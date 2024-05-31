import { useEffect } from "react"
import gsap from "gsap"

export function Preloader() {
    
    const tl = gsap.timeline();


    useEffect(()=>{
        tl.from('.preloader', {
            duration:0,
            
            y: '100vh'
            });
        tl.from('.loader-logo', {
            duration:1.5,
            ease: "circ.out",
            y: '100vh'
            }, '-=1.3');
        tl.from('.loader-text', {
            duration:1,
            ease: "circ.out",
            y: '100vh'
            }, '-=0.7');
        tl.from('.loading', {
            duration:5,
            ease: "circ.out",
            y: '100vh'
            }, '-=0.2');
        tl.to('.preloader', {
            duration:1,
            ease: "circ.out",
            y: '100vh'
        })
            
    }, [])

    return (
        <div className="preloader">
            <div className="loader">
                <img src="src/images/logo.png" alt="" className="w-[150px] loader-logo"/>
                <h1 className="text-3xl font-[500] text-white mt-[10px] loader-text">Cargando...</h1>
                <img src="src/images/loading.gif" alt="" className="w-[120px] loading"/>
            </div>
        </div>
    )
}