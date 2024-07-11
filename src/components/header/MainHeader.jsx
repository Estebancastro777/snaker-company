import logoSnakers from "@/assets/images/logo.svg"
import Avatar from "@/assets/images/image-avatar.png"
import MenuIcon from "@/components/icons/MenuIcon"
import CartIcon from "@/components/icons/CartIcon"
import IconClose from "@/components/icons/IconClose"
import { useState } from "react"
import NavHeader from "./NavHeader"


const MainHeader = () => {

    const [navClass, setNavClass] = useState("hidden md:mt-2 font-bold md:mr-auto md:block md:flex md:flex-row md:gap-4")

    const handleCloseMenu = () => {
        setNavClass("hidden font-bold md:static md:mt-2 md:mr-auto md:block md:flex md:flex-row md:p-0 md:gap-4")
    }

    const handleOpenMenu = () => {
        setNavClass("flex flex-col absolute font-bold top-0 left-0 w-4/5 bg-white h-full p-8 md:mt-2 md:static md:mr-auto md:block md:flex md:flex-row md:p-0 md:gap-4")
    }

    return (
        <>
            <header className="container mx-auto py-8 px-6 md:py-0 md:px-0 flex aling-center gap-8">
                <button className="md:hidden" onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img className="md:mr-0 mr-auto h-5 my-auto " src={logoSnakers} alt="" />
                <nav className={navClass}>
                    <button className="md:hidden mb-10" onClick={handleCloseMenu}>
                        <IconClose />
                    </button>
                    <NavHeader text="Collection"/>
                    <NavHeader text="Men"/>
                    <NavHeader text="Women"/>
                    <NavHeader text="About"/>
                    <NavHeader text="Contact"/>
                </nav>
                <div className="flex">
                    <button className="mr-3">
                        <CartIcon />
                    </button>
                    <img className="my-auto h-10" src={Avatar} alt="" />
                </div>
            </header>
            <hr className="hidden md:flex md:container md:mx-auto" />
        </>
    )
}

export default MainHeader