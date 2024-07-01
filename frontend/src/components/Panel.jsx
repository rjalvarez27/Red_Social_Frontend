export function Panel() {
    return (
        <>
        <div className="h-[20%] flex flex-row bg-black justify-center text-lg">
           <p className="m-2 rounded-lg"><i className="fa-regular fa-bell"></i></p>
           <input type="search" name="search" id="" className="w-[40%] h-5 m-2" />
           <p className="m-2"><i className="fa-solid fa-user"></i></p>
        </div>
        </>
    )
}

