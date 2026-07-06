import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Store from './Components/Store/Store'
import Product from './Components/Product'
import { Route, Routes } from 'react-router-dom'
import products from './data/products'
import ProductPage from './Components/ProductPage'
import Cart from './Components/Cart'


export default function App() {
  const [cartItem,setCartitem]=useState([])
  const [searchText,setSearchtext]=useState('');
  const [alertCart,setAlert]=useState(false)
   const [total, setTotal] = useState(() => {
    return Number(localStorage.getItem("totalAmt")) || 0; //refresh hone pr bhi it will not remove the total to 0
});
  return (

    <div>
      <Navbar searchText={searchText} setSearchtext={setSearchtext} alertCart={alertCart} setAlert={setAlert}  />
      <Routes>
        <Route exact path='/' element={<Store />} />
        <Route path="/products/mac" element={<Product category="mac" searchText={searchText} />} />
        <Route path="/products/iphone" element={<Product category="iphone" searchText={searchText} />} />
        <Route path="/products/ipad" element={<Product category="ipad" searchText={searchText} />} />
        <Route path="/products/watch" element={<Product category="watch" searchText={searchText} />} />
        <Route path="/products/airpods" element={<Product category="airpods" searchText={searchText} />} />
        <Route path="/products/accessories" element={<Product category="accessories" searchText={searchText} />} />
        <Route path="/products/:id" element={<ProductPage cartItem={cartItem} setCartitem={setCartitem} total={total} setTotal={setTotal} alertCart={alertCart} setAlert={setAlert} />}/>
        <Route exact path="/cart" element={<Cart products={products[0]} cartItem={cartItem} setCartitem={setCartitem} total={total} setTotal={setTotal} />}/>
      </Routes>
      
    </div>

  )
}
