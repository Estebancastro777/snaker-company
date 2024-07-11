const DetailsProduct = () => {
    return (
        <section className="container p-4 pt-0">
            <p className="text-gray-400 font-bold mb-4">SNEAKER COMPANY</p>
            <h2 className="text-3xl font-bold mb-4">Fall Limited Edition Snakers</h2>
            <p className="text-gray-400 font-bold mb-4">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="flex justify-between mb-4">
                <span className="text-3xl font-bold">$125.00</span>
                <span className="text-white h-6 bg-black px-2 mr-16 my-auto rounded-lg">50%</span>
                <span className="font-bold text-gray-400 line-through">250.00</span>
            </div>
            <div className="grid md:grid-cols-3 md:gap-2 md:place-items-center font-bold">
                <div className="grid grid-cols-3 container mx-auto bg-gray-200 mb-3 md:mb-0 p-2 pb-3 rounded-xl">
                <button className="text-3xl text-orange-500 ">-</button>
                <span className="m-auto mt-2">0</span>
                <button className="text-3xl text-orange-500 ">+</button>
                </div>
                <div className="grid md:col-span-2 place-item-center container mx-auto font-bold bg-orange-500 p-4 rounded-xl">
                <button className="">Add to cart</button>
                </div>
            </div>
            
        </section>
    )
}

export default DetailsProduct