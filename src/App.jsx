import { useState } from "react"

import MainContent from "./component/MainContent"
import Cart from "./component/cart"
import ConfirmOrder from "./component/ConfirmOrder"


import waffleImg from '/public/assets/images/image-waffle-desktop.jpg'
import cremeBruleeImg from '/public/assets/images/image-creme-brulee-desktop.jpg'
import macaronImg from '/public/assets/images/image-macaron-desktop.jpg'
import tiramisuImg from '/public/assets/images/image-tiramisu-desktop.jpg'
import baklavaImg from '/public/assets/images/image-baklava-desktop.jpg'
import meringueImg from '/public/assets/images/image-meringue-desktop.jpg'
import cakeImg from '/public/assets/images/image-cake-desktop.jpg'
import brownieImg from '/public/assets/images/image-brownie-desktop.jpg'
import pannaCottaImg from '/public/assets/images/image-panna-cotta-desktop.jpg'

import waffleImgThumb from "/public/assets/images/image-waffle-thumbnail.jpg"
import cremeBruleeImgThumb from "/public/assets/images/image-creme-brulee-thumbnail.jpg"
import macaronImgThumb from "/public/assets/images/image-macaron-thumbnail.jpg"
import tiramisuImgThumb from "/public/assets/images/image-tiramisu-thumbnail.jpg"
import baklavaImgThumb from "/public/assets/images/image-baklava-thumbnail.jpg"
import meringueImgThumb from "/public/assets/images/image-meringue-thumbnail.jpg"
import cakeImgThumb from "/public/assets/images/image-cake-thumbnail.jpg"
import brownieImgThumb from "/public/assets/images/image-brownie-thumbnail.jpg"
import pannaCottaImgThumb from "/public/assets/images/image-panna-cotta-thumbnail.jpg"

const data = [
  { id: 1, name: "Waffle with Berries", category: "Waffle", price: 6.50, img: waffleImg, thumbnail: waffleImgThumb },
  { id: 2, name: "Vanilla Bean Crème Brûlée", category: "Crème Brûlée", price: 7.00, img: cremeBruleeImg, thumbnail: cremeBruleeImgThumb },
  { id: 3, name: "Macaron Mix of Five", category: "Macaron", price: 8.00, img: macaronImg, thumbnail: macaronImgThumb },
  { id: 4, name: "Classic Tiramisu", category: "Tiramisu", price: 5.50, img: tiramisuImg, thumbnail: tiramisuImgThumb },
  { id: 5, name: "Pistachio Baklava", category: "Baklava", price: 4.00, img: baklavaImg, thumbnail: baklavaImgThumb },
  { id: 6, name: "Lemon Meringue Pie", category: "Pie", price: 5.00, img: meringueImg, thumbnail: meringueImgThumb },
  { id: 7, name: "Red Velvet Cake", category: "Cake", price: 4.50, img: cakeImg, thumbnail: cakeImgThumb },
  { id: 8, name: "Salted Caramel Brownie", category: "Brownie", price: 5.50, img: brownieImg, thumbnail: brownieImgThumb },
  { id: 9, name: "Vanilla Panna Cotta", category: "Panna Cotta", price: 6.50, img: pannaCottaImg, thumbnail: pannaCottaImgThumb },
]




export default function App() {
 
  const [cart, setCart] = useState([])
  const [order, setOrder] = useState(false)

  function addToCart(product) {
    const existing = cart.find(item => item.name === product.name)
    if (existing) {
      setCart(prevCart => prevCart.map(item => item.name === product.name ? {...item, qty: item.qty + 1} : item))
    } else {setCart([...cart, {...product, qty: 1}])}

  }

  function decreaseCart(name) {
    setCart((prevCart) => prevCart
             .map((item) => item.name === name ? {...item, qty: item.qty - 1} : item)
             .filter((item) => item.qty > 0)
    )
  }

  function removeCart(name) {
    setCart(prevCart => prevCart.filter(item => item ? item.name !== name : item))
  }

  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0)

  function reset() {
    setCart([])
    setOrder(false)
    alert('Order completed')
  }
  

  return(
    
    <>
      <main>
       <div>

          
          <MainContent  
            products={data}
            cart={cart}
            addToCart={addToCart}
            decreaseCart={decreaseCart} />
         
        
       </div>
       
        <Cart 
        cart={cart}
        addToCart={addToCart}
        removeCart={removeCart}
        total={total}
        confirmOrder={() => setOrder(true)} />
    </main>

        {order === true && <ConfirmOrder 
        cart={cart}
        reset={reset}
        total={total} />}
    </>
  )
}
