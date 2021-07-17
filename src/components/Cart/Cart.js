import React from 'react'
import { useSelector, useDispatch } from "react-redux"
function Cart() {

    const selector = useSelector(state => state.cartReducer)
    
    
    const dispatch = useDispatch()
    console.log(selector)
    return (
        <div className="cart_main">
            <div className="cart_content">
                <div className="cart_button_header">
                    
                    <h1>Total: AZN</h1>
                    <span></span>
                </div>
                <ol className="cart_items"></ol>
                <div className="summary"></div>
                <div className="checkout_button"></div>
                <div></div>
            </div>
            {
                selector.map((index, key) => <div key={key}>
                    <img style={{ width:"350px", height:"400px"}} src={index.src} alt="" />
                    <img src={index.color} />
                    <h2>{index.name}</h2>
                    <h5> Artikul: {index.model}</h5>
                    <h4> Sayi: {index.quantity}</h4>
                    <h3>Qiymet: {index.price} AZN</h3>
                    {/* {(index.price) * (index.quantity)} */}
                    
                    <button onClick={() => dispatch({ type: "DELETTE_ITEM", payload: index.id })} >delete</button>
                </div>)
            }
        </div>
    )
}

export default Cart
