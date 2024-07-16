import DetailsProduct from "@/components/products/col-details/DetailsProduct"
import MainImg from "@/components/products/col-img/MainImg"

import img1 from "@/assets/images/image-product-1.jpg"
import img2 from "@/assets/images/image-product-2.jpg"
import img3 from "@/assets/images/image-product-3.jpg"
import img4 from "@/assets/images/image-product-4.jpg"

import imgSmall1 from "@/assets/images/image-product-1-thumbnail.jpg"
import imgSmall2 from "@/assets/images/image-product-2-thumbnail.jpg"
import imgSmall3 from "@/assets/images/image-product-3-thumbnail.jpg"
import imgSmall4 from "@/assets/images/image-product-4-thumbnail.jpg"

const ARRAY_IMGS = [img1, img2, img3, img4]
const ARRAY_IMGS_SMALL = [imgSmall1, imgSmall2, imgSmall3, imgSmall4]



const MainProduct = ()=>{
    return(
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center md:max-w-3xl md:mx-auto md:mt-10">
      <MainImg
       ARRAY_IMGS = {ARRAY_IMGS}
       ARRAY_IMGS_SMALL = {ARRAY_IMGS_SMALL}
      />
      <DetailsProduct/>
    </main>
    )
}

export default MainProduct