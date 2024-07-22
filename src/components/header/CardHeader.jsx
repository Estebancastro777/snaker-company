import imgSmall from "@/assets/images/image-product-1-thumbnail.jpg"
import DeleteIcon from "@/components/icons/DeleteIcon"

import { useCartDetails } from "@/context/useCartDetails"
import { useContext } from "react"

const CardHeader =()=>{

    const {cartProducts,deleteCartProduct} = useContext(useCartDetails)

    return (
        <>
        <section className="shadow-xl rounded-lg w-[93%] md:w-auto top-[125%] md:top-0 left-0 md:left-auto mx-4 md:mx-0 z-10 absolute md:right-0 font-bold bg-white md:mt-20 md:px-4 md:pb-8 md:pt-2" >
                    <div className="grid">
                        <h4 className="md:mb-6 mb-4 pt-2 pl-4 md:p-0">Card</h4>
                        <hr className="md:mb-4 mb-4" />
                        {
                            cartProducts.length === 0 && <p className="py-16 md:mx-20 text-center text-gray-500">Your cart is empty</p>
                        }
                        {cartProducts.map((product)=> (
                                                    <article key={product} className="grid grid-cols-4 pb-4 md:pb-4">
                                                    <img src={imgSmall} 
                                                    alt=""
                                                    className="ml-4 md:ml-0 h-16 rounded-lg"
                                                    />
                                                    <article className="grid col-span-2">
                                                        <h6 className="font-bold ">{product.title}</h6>                                
                                                        <p>
                                                            <span className="font-normal ">${product.discountPrice} x {" "} {product.quantity}</span>
                                                            <span className="font-bold px-2">${(product.discountPrice*product.quantity).toFixed(2)}</span>
                                                        </p>
                                                    </article>
                                                    <button onClick={()=> deleteCartProduct(product.id)} className="ml-16">
                                                        <DeleteIcon />
                                                    </button>
                                                </article>
                        ))}
                            {cartProducts.length !== 0 && (
                                <button className=" bg-orange-500 rounded-lg p-2 m-3 mt-0 md:m-0">CheckOut</button>
                            )}
                    </div>
                </section>
        </>
    )
}

export default CardHeader