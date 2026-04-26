import completed from "/public/assets/images/icon-order-confirmed.svg"

export default function ConfirmOrder({cart,reset,total}) {
    return(
        <div className="modal">
           <div className="main-modal">
            <img src={completed} alt="" />
           <h1>Order Confirmed</h1>
           <p>We hope you enjoy yopur food!</p>
              <div className="all">
                {cart.map(item => (
            <div key={item.name} >
              <div className="modal-items">
                <div className="modal-subitems">
                    <img className="modal-img" src={item.thumbnail} alt="" />
                <div>
                    <p>{item.name}</p>
                    <p>x{item.qty} <span>@&nbsp;${item.price.toFixed(2)}</span></p>
                </div>
                </div>
                <h3>${(item.qty * item.price).toFixed(2)}</h3>
            </div>
            </div>
            
           ))}
           <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>Order total</p>
                <h3 style={{alignSelf:'flex-end', color:'brown'}}>${total.toFixed(2)}</h3>
            </div>
              </div>
              <button onClick={reset} className="confirmBtn">Start New Order</button>
           </div>
           
        </div>
    )
}