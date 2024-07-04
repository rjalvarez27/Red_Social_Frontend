import { useEffect, useState } from "react";


export function Panel() {

    const [darkMode, setDarkMode] = useState("light");

    const hanledDarkMode = () => {
        if (darkMode === "dark") {
            setDarkMode("light")
        } else {
            setDarkMode("dark")
        }
    }

    console.log(darkMode)

    useEffect(() => {
        if (darkMode === "dark") {
            document.querySelector("body").classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }, [darkMode])



    return (
        <>
            <div className="h-[20%] flex flex-row bg-black justify-center text-lg m-3 gap-3">
                <input type="checkbox" name="light-switch" class="light-switch" />
                <label for="light-switch">Switch to light / dark version</label>
                <p className="text-xl mx-1"><i className="fa-regular fa-bell"></i></p>
                <p className="text-xl mx-2"><i className="fa-solid fa-user"></i></p>
            </div>
        </>
    )
}

