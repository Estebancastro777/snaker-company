import MainHeader from "@/components/header/MainHeader"
import MainProduct from "@/components/products/MainProducts"

import CartDetailsProvider from "@/context/useCartDetails"

function App() {
  return (
    <CartDetailsProvider>
      <MainHeader/>
      <MainProduct/>
    </CartDetailsProvider>
  )
}

export default App
