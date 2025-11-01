import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'

import Products from './Components/Products'



function App() {
  const  [carts, setCarts]= useState([]);

const handleCartUpdate = (product) =>{

  setCarts(prev => [...prev, product])

}
console.log(carts);

  return (
    <div className=' my-8 flex justify-center gap-10'>
    <div className=' bg-amber-200 w-[70%]'>
    <Products handleCartUpdate={handleCartUpdate}></Products>
    </div>
    <div className=' bg-amber-800 w-[30%]'>
     <Cart carts={carts}></Cart>
    </div>
    </div>
  )
}

export default App
