import { useNavigate } from "react-router-dom"

export function Header() {
    const navigate = useNavigate()
    return (
        <>
            <header className="header"><a onClick={() => navigate("/")}><img src="
            src/images/logo.png" alt="Logo Mounts" className="logo-header"/></a></header>
        </>
    )
}