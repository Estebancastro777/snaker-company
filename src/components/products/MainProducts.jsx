import SlideProduct from "@/components/products/SlideProduct"
import DetailsProduct from "@/components/products/DetailsProduct"

const MainProduct = ()=>{
    return(
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-24">
      <SlideProduct/>
      <DetailsProduct/>
    </main>
    )
}

export default MainProduct