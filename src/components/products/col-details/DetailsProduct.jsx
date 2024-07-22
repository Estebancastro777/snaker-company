import { useCartDetails } from "@/context/useCartDetails"
import { useContext, useState } from "react"

const DetailsProduct = ({objetProduct}) => {

    const {addCartProduct} = useContext(useCartDetails);
    const [count,setCount] = useState(0);

    const decrementCount =()=>{
        if (count === 0) return
        setCount(count - 1)
    }

    const handleAddToCart =()=>{
        {addCartProduct({
            img: objetProduct.imagesSmall[0],
            id: objetProduct.id,
            discountPrice: (objetProduct.price *(1-objetProduct.discount)).toFixed(2),
            title: objetProduct.title,
            quantity: count || 1,
            })
            setCount(0)
        }
    }

    return (
        <section className="container p-4 pt-0 md:p-0">
            <p className="text-gray-400 font-bold mb-4">{objetProduct.subtitle}</p>
            <h2 className="text-3xl font-bold mb-4">{objetProduct.title}</h2>
            <p className="text-gray-400 font-bold mb-4">{objetProduct.description}</p>
            <div className="flex gap-5 mb-6 md:mb-8">
                <span className="md:relative text-3xl font-bold">${(objetProduct.price *(1-objetProduct.discount)).toFixed(2)}</span>
                <span className="text-white h-6 bg-black px-2 mr-16 my-auto rounded-lg">{objetProduct.discount * 100}%</span>
                <span className="md:absolute md:mt-9 md:pl-6 font-bold text-gray-400 line-through">${objetProduct.price.toFixed(2)}</span>
            </div>
            <div className="grid md:grid-cols-3 md:gap-2 md:place-items-center font-bold">
                <div className="grid grid-cols-3 container mx-auto bg-gray-200 mb-3 md:mb-0 p-2 pb-3 rounded-xl">
                <button onClick={decrementCount} className="text-3xl text-orange-500 ">-</button>
                <span className="m-auto mt-2">{count}</span>
                <button onClick={()=>{setCount(count + 1)}} className="text-3xl text-orange-500 ">+</button>
                </div>
                <div className="grid md:col-span-2 place-item-center container mx-auto font-bold bg-orange-500 p-4 rounded-xl">
                <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
            
        </section>
    )
}

export default DetailsProduct