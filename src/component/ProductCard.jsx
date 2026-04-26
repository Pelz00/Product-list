import increment from "/public/assets/images/icon-increment-quantity.svg"
import decrement from "/public/assets/images/icon-decrement-quantity.svg"
import toCart from "/public/assets/images/icon-add-to-cart.svg"

export default function ProductCard({product, cart, addToCart,decreaseCart,active,setActive}) {
    const itemInCart = cart.find((item) => item.name === product.name);
    return (
        
            <div key={product.name} className="product-list">
            <img className={`product-Img ${active ? 'active' : ''}`} 
                 src={product.img} alt="" />

            {!itemInCart ? (
                   <div onClick={setActive}>
                    <div onClick={() => {addToCart(product)}} className="cartBtn">
                        <img src={toCart} alt="" /> 
                        <p>Add to cart</p>
                   </div>
                   </div>) :  (
                   <div className="actions"  onClick={setActive}>
                        <div className="assign" onClick={() => decreaseCart(product.name)}>
                        <img src={decrement} alt="" /></div>
                        <p>{itemInCart.qty}</p>
                        <div className="assign" onClick={() => addToCart(product)}>
                        <img src={increment} alt="" /></div>
                  </div> )
            }

            <div className="product-details">
                <p>{product.name}</p>
                <h3>{product.category}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
            </div>

          </div>
        
       
    )
}

