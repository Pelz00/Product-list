import { useState } from "react";
import ProductCard from "./ProductCard";

export default function MainContent({products, cart, addToCart,decreaseCart}) {
    const [active, setActive] = useState(false)
    return (
          
        <>
        <h2>Desserts</h2>
        <div className="products"> 
            {products.map(product => (
                <ProductCard 
               key={product.name}
               cart={cart}
               product={product}
               addToCart={addToCart}
               decreaseCart={decreaseCart}
               active={active === product.name}
               setActive={() => setActive(product.name)}
            />))}
        </div>
         </>
       
    )
}