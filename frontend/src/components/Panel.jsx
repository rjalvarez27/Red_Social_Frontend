import '../styles/button.css'

export function Panel() {
    return (
        <>
            <div className="h-[20%] flex flex-row bg-black justify-center text-lg m-3 gap-3">
                <input type="checkbox" id="darkmode-toggle" />
                <label for="darkmode-toggle">
                <i className="fa-solid fa-sun sun"></i>
                <i className="fa-regular fa-moon moon"></i>
                </label>
                <input type="checkbox" id="darkmode-toggle" />
                <p className="text-xl mx-1"><i className="fa-regular fa-bell"></i></p>
                <p className="text-xl mx-2"><i className="fa-solid fa-user"></i></p>
            </div>
        </>
    )
}

