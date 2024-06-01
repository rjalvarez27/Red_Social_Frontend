import { useNavigate } from "react-router-dom"

export function Header() {
    const navigate = useNavigate()
    return (
        <>
            <header className="header w-[100%] left-16 px-6 justify-between lg:justify-center lg:w-[80%] lg:left-[20%] xl:w-[60%]">
                <img src="src/images/logo.png" alt="Logo Mounts" className="logo-header" onClick={() => navigate("/")}/>
                <div className="w-[32px] lg:hidden"></div>
            </header>
        </>
    )
}