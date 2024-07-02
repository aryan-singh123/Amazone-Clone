import React from 'react'
import "./Checkout.css"
// export {("switch")}

function Checkout() {
  return (
    
    <div className="checkout">
        <div className="checkout_left">
          <img className="checkout_ads"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnQQiEtqHf5pW9mNTuwg77XKFLTdCVcPlfA&usqp=CAU"
             alt=""
         />
          <div>
          <h2 className="checkout_title">shopping Basket </h2>
          </div>
        </div>
        <div className="checkout_right">
            <h2>the subtotal will go here</h2>
        </div>
    </div>
  )
}

export default Checkout
