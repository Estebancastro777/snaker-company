import NetxIcon from "@/components/icons/NetxIcon"
import PrevIcon from "@/components/icons/PrevIcon"

import img1 from "@/assets/images/image-product-1.jpg"
import img2 from "@/assets/images/image-product-2.jpg"
import img3 from "@/assets/images/image-product-3.jpg"
import img4 from "@/assets/images/image-product-4.jpg"
import { useState } from "react"

const ARRAY_IMGS = [img1, img2, img3, img4]


const SlideProduct = () => {

    const [index, setIndex] = useState(0)

    const handleClickPrev = () => {
        if (index===0) return setIndex(ARRAY_IMGS.length - 1);
        setIndex(index - 1)
    }

    const handleClickNetx = () => {
        if (index===ARRAY_IMGS.length - 1) return setIndex(0);
        setIndex(index + 1)
    }

    return (
        <section className="grid md:grid-cols-4 gap-4">
            <div className="relative grid col-span-4">
                <img src={ARRAY_IMGS[index]} alt="" className="aspect-[16/13] w-full" />
                <div className="absolute top-1/2 -transalte-y-1/2 flex w-full justify-between px-4 md:hidden">
                    <button onClick={handleClickPrev}>
                        <PrevIcon />
                    </button>
                    <button onClick={handleClickNetx}>
                        <NetxIcon />
                    </button>
                </div>
            </div>

            <img src="src\assets\images\image-product-1-thumbnail.jpg" alt="" className="hidden md:block" />
            <img src="src\assets\images\image-product-2-thumbnail.jpg" alt="" className="hidden md:block" />
            <img src="src\assets\images\image-product-3-thumbnail.jpg" alt="" className="hidden md:block" />
            <img src="src\assets\images\image-product-4-thumbnail.jpg" alt="" className="hidden md:block" />
        </section>
    )
}

export default SlideProduct