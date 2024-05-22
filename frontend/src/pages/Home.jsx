export function Home() {
    const cerrarSesion = () => {
        localStorage.removeItem("token");
        window.location.reload();
      };
    return (
        <div>
            <h1>Home</h1>
            <p>Pagina de Publicaiones</p>
            <button onClick={cerrarSesion}>Cerrar Sesion</button>
        </div>
    );
}