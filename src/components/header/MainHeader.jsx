import { useContext, useState } from "react"
import { useCartDetails } from "@/context/useCartDetails"

import logoSnakers from "@/assets/images/logo.svg"

import Avatar from "@/assets/images/image-avatar.png"
import MenuIcon from "@/components/icons/MenuIcon"
import CartIcon from "@/components/icons/CartIcon"
import IconClose from "@/components/icons/IconClose"
import NavHeader from "@/components/header/NavHeader"
import CardHeader from "@/components/header/CardHeader"


const MainHeader = () => {
    const{totalQuantityProduct}=useContext(useCartDetails)

    const [navClass, setNavClass] = useState("hidden md:mt-1 font-bold md:mr-auto md:block md:flex md:flex-row md:gap-4")
    const [isOpenCart, setOpenCart] = useState(false)

    const handleCloseMenu = () => {
        setNavClass("hidden font-bold md:static md:mt-2 md:mr-auto md:block md:flex md:flex-row md:p-0 md:gap-4")
    }

    const handleOpenMenu = () => {
        setNavClass("absolute z-20 bg-white flex flex-col font-bold top-0 left-0 w-60 h-full p-8")
    }



    return (
        <>
            <header className="relative container mx-auto py-4 px-6 md:py-0 md:px-10 flex aling-center gap-8">
                <button className="md:hidden mt-1" onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img className="md:mr-8 mr-auto h-5 my-auto " src={logoSnakers} alt="" />
                <nav className={navClass}>
                    <button className="md:hidden" onClick={handleCloseMenu}>
                        <IconClose />
                    </button>
                    <NavHeader text="Collection" />
                    <NavHeader text="Men" />
                    <NavHeader text="Women" />
                    <NavHeader text="About" />
                    <NavHeader text="Contact" />
                </nav>
                <div className="flex">
                    <button onClick={()=>setOpenCart(!isOpenCart)} className="relative mr-3">
                        <CartIcon />
                        <span className="absolute md:top-7 top-0  bg-orange-500 px-2 rounded-xl font-bold text-white text-xs">{totalQuantityProduct}</span>
                    </button>
                    <img className="my-auto h-10" src={Avatar} alt="" />
                    {
                        isOpenCart && <CardHeader/>
                    }
                </div>
            </header>
            <hr className="hidden md:flex md:container md:mx-auto" />
        </>
    )
}

export default MainHeader