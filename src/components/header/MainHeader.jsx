import { useState } from "react"
import logoSnakers from "@/assets/images/logo.svg"
import imgSmall from "@/assets/images/image-product-1-thumbnail.jpg"

import Avatar from "@/assets/images/image-avatar.png"
import MenuIcon from "@/components/icons/MenuIcon"
import CartIcon from "@/components/icons/CartIcon"
import IconClose from "@/components/icons/IconClose"
import DeleteIcon from "@/components/icons/DeleteIcon"
import NavHeader from "./NavHeader"


const MainHeader = () => {

    const [navClass, setNavClass] = useState("hidden md:mt-1 font-bold md:mr-auto md:block md:flex md:flex-row md:gap-4")

    const handleCloseMenu = () => {
        setNavClass("hidden font-bold md:static md:mt-2 md:mr-auto md:block md:flex md:flex-row md:p-0 md:gap-4")
    }

    const handleOpenMenu = () => {
        setNavClass("flex flex-col z-20 absolute font-bold top-0 left-0 w-4/5 bg-white h-full p-8 md:mt-2 md:static md:mr-auto md:block md:flex md:flex-row md:p-0 md:gap-4")
    }

    const [cardClass, setCardClass] = useState("hidden")

    const handleCloseCard = () => {
        setCardClass("hidden")
    }

    const handleOpenCard = () => {
        setCardClass("rounded-lg w-[93%] md:w-auto top-[125%] md:top-0 left-0 md:left-auto mx-4 md:mx-0 z-10 absolute md:right-0 font-bold bg-white md:mt-20 md:px-4 md:pb-8 md:pt-2")
    }


    return (
        <>
            <header className="relative container mx-auto py-4 px-6 md:py-0 md:px-10 flex aling-center gap-8">
                <button className="md:hidden " onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img className="md:mr-0 mr-auto h-5 my-auto " src={logoSnakers} alt="" />
                <nav className={navClass}>
                    <button className="md:hidden mb-10" onClick={handleCloseMenu}>
                        <IconClose />
                    </button>
                    <NavHeader text="Collection" />
                    <NavHeader text="Men" />
                    <NavHeader text="Women" />
                    <NavHeader text="About" />
                    <NavHeader text="Contact" />
                </nav>
                <div className="flex">
                    <button onClick={handleOpenCard} className="mr-3">
                        <CartIcon />
                    </button>
                    <img className="my-auto h-10" src={Avatar} alt="" />
                </div>
                <section className={cardClass} >
                    <div className="grid">
                        <h4 className="md:mb-6 mb-4 pt-2 pl-4 md:p-0">Card</h4>
                        <hr className="md:mb-4 mb-4" />
                        <div className="grid grid-cols-4 pb-4 md:pb-0 md:h-4">
                            <img src={imgSmall} 
                            alt=""
                            className="ml-4 md:ml-0 h-16 rounded-lg"
                            />
                            <div className="grid col-span-2">
                                <h6 className="font-bold ">Fall Limited Edition Snakers</h6>                                
                                <p>
                                    <span className="font-normal">125.00 x 3</span> <span className="font-bold">375.00</span>
                                </p>
                            </div>
                            <button className="ml-16">
                                <DeleteIcon />
                            </button>
                        </div>
                        <button className=" bg-orange-500 rounded-lg p-2 m-3 mt-0 md:mt-16 md:m-0">CheckOut</button>
                    </div>
                </section>
            </header>
            <hr className="hidden md:flex md:container md:mx-auto" />
        </>
    )
}

export default MainHeader