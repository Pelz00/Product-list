import emptyCart from "/public/assets/images/illustration-empty-cart.svg"
import remove from "/public/assets/images/icon-remove-item.svg"
import carbon from "/public/assets/images/icon-carbon-neutral.svg"

export default function Cart({cart,removeCart,total,confirmOrder}) {
    return (
        <div className="cart">
            <h2>Your Cart ({cart.length})</h2>
            {cart.length === 0 ? (<div className="emptyCart">
                <img src={emptyCart} alt="" />
                <p>Your added items will appear here</p>
            </div>) : (
                <>
                  {cart.map(item=> (
                <div key={item.name} >
                    <div className="cart-items" >
                        
                    <div style={{margin: '0', padding: '0'}}>
                        <p>{item.name}</p>
                        <p>x{item.qty}  <span>@&nbsp; ${item.price.toFixed(2)}</span></p>
                    </div>
                    <img className="cancel" onClick={() => removeCart(item.name)} src={remove} alt="" />
                    
                </div>
                <hr />
                </div>
            ))}
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>Order total</p>
                <h3 style={{alignSelf:'flex-end', color:'brown'}}>${total.toFixed(2)}</h3>
            </div>
            <div className="carbon">
                <img src={carbon} alt="" />
                <p>This is a <b>carbon-neutral</b> delivery</p>
            </div>
            <button onClick={confirmOrder} className="confirmBtn">Confirm Order</button>
                </>
            )}
        </div>
    )
}
