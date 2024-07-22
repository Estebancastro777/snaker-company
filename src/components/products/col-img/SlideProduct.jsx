import NetxIcon from "@/components/icons/NetxIcon"
import PrevIcon from "@/components/icons/PrevIcon"

import { useRef, useEffect, useState } from "react"


const SlideProduct = ({
    ARRAY_IMGS = [],
    ARRAY_IMGS_SMALL = [],
    isOpenModal = false,
    handleCloseModal = null,
    handleOpenModal = null,
     ...props }) => {

    const btnSlider = useRef(null);    
    const [index, setIndex] = useState(0)

    useEffect(()=> {
        isOpenModal && btnSlider.current.classList.remove("md:hidden")
        }, [isOpenModal]);

    const handleClickPrev = () => {
        if (index===0) return setIndex(ARRAY_IMGS.length - 1);
        setIndex(index - 1)
    }

    const handleClickNetx = () => {
        if (index===ARRAY_IMGS.length - 1) return setIndex(0);
        setIndex(index + 1)
    }

    return (
        <section {...props}>
            {isOpenModal && (<button onClick={handleCloseModal} className="md:text-right md:col-span-4 md:font-bold md:text-white">X</button>) }
            <div className="relative grid col-span-4">
                <img src={ARRAY_IMGS[index]} onClick={handleOpenModal} alt="" className="md:cursor-pointer md:rounded-xl aspect-[16/13] md:aspect-[18/18] w-full" />
                <div ref={btnSlider} className="md:hidden absolute top-1/2 -transalte-y-1/2 flex w-full justify-between px-4">
                    <button onClick={handleClickPrev}>
                        <PrevIcon />
                    </button>
                    <button onClick={handleClickNetx}>
                        <NetxIcon />
                    </button>
                </div>
            </div>
            {ARRAY_IMGS_SMALL.map((smallImg, i) => (
                <div key={i} onClick={()=>{setIndex(i);}} className="relative ">
                    <img  
                    src={smallImg}
                    alt="" 
                    className="hidden md:block md:rounded-xl" />
                    <span className={`absolute top-0 h-full w-full cursor-pointer hover:bg-[rgba(255,255,255,0.5)] rounded-xl ${i===index && "bg-[rgba(255,255,255,0.5)]"}`}></span>
                </div>
            ))}
        </section>
    )
}

export default SlideProduct