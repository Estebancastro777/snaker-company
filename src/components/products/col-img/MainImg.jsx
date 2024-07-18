import SlideProduct from "@/components/products/col-img/SlideProduct"
import ModalProduct from "@/components/products/col-img/SlideProduct"
import { useState } from "react"


const MainImg = ({ ARRAY_IMGS, ARRAY_IMGS_SMALL }) => {

    const [isOpenModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        if (window.innerWidth > 767) return setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <>
            <SlideProduct
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
                className="grid md:grid-cols-4 gap-4"
                handleOpenModal={handleOpenModal}
            />
            {isOpenModal && (
                <>
                    <ModalProduct
                        ARRAY_IMGS={ARRAY_IMGS}
                        ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
                        isOpenModal={isOpenModal}
                        className="hidden md:z-10 md:grid md:grid-cols-4 gap-4 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-md"
                        handleCloseModal={handleCloseModal}
                    />
                    <span className="fixed md:h-full md:w-full md:top-0 md:left-0 md:bg-black/70"></span>
                </>
            )}
        </>
    )
}

export default MainImg