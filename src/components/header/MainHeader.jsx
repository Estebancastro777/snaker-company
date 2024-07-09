import logoSnakers from "@/assets/images/logo.svg"
import Avatar from "@/assets/images/image-avatar.png"
import MenuIcon from "@/components/icons/MenuIcon"
import CartIcon from "@/components/icons/CartIcon"
import IconClose from "@/components/icons/IconClose"
import { useState } from "react"


const MainHeader = () => {

    const [navClass, setNavClass] = useState("hidden md:mt-2 font-bold md:mr-auto md:block md:flex md:flex-row md:gap-4")

    const handleCloseMenu = () => {
        setNavClass ("hidden font-bold md:static md:mt-2 md:mr-auto md:block md:flex md:flex-row md:p-0 md:gap-4")
    }

    const handleOpenMenu = ()=> {
        setNavClass("flex flex-col absolute font-bold top-0 left-0 w-4/5 gap-y-8 bg-white h-full p-8 md:mt-2 md:static md:mr-auto md:block md:flex md:flex-row md:p-0 md:gap-4")
    }

    return (
        <>
        <header className="container mx-auto flex justify-between py-6 gap-8">
             <button className="md:hidden" onClick={handleOpenMenu}>
                <MenuIcon />
             </button>
             <img className="md:mr-0 mr-auto mt-2 h-5" src={logoSnakers} alt="" />
            <nav className={navClass}>
                <button className="md:hidden mb-10" onClick={handleCloseMenu}>
                    <IconClose/>
                </button>
                <a href="">Collections</a>
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
            <div className="flex">
                <button className="mr-3">
                    <CartIcon/>
                </button>
                <img className="h-10"src={Avatar} alt="" />
            </div>
        </header>
        <hr className="container mx-auto"/>
        </>
    )
}

export default MainHeader