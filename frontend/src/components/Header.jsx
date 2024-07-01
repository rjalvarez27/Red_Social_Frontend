export function Header() {
    return (
        <div className="w-[100%] h-[20%] flex flex-col bg-black justify-center ">
            <div className="flex flex-row justify-center">
                <img src="../src/images/principales/logo.png" alt="" className="w-[110px]"/>
            </div>
            <div className="w-[100%] flex flex-row justify-center m-3">
                <h1 className="text-white m-1 border border-white rounded-md px-8 py-2 mx-6"><button>Seguidos</button></h1>
                <h1 className="text-white m-1 border border-white rounded-md px-8 py-2 mx-6"><button>Seguidores</button></h1>
            </div>
        </div>
    )
}