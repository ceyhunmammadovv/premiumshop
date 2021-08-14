import React from 'react'
import "../Cart/Cart.css"
import { useSelector, useDispatch } from "react-redux"
function Cart() {

    const selector = useSelector(state => state.cartReducer)



    // const subtotal = (items) => {
    //     let total = item.price * item.quantity
    //     return total.toFixed(2)
    // }
    const toplam = (items) => {
        let total = 0
        for (var item of items) {
            total += item.price * item.quantity
        }
        return total.toFixed(2)

    }

    const dispatch = useDispatch()



    return (
        <div className="checkout-page">
            <div className="page-top">
                <div className="container">
                    <div className="rowsss">
                        <h1 className="top-text"> Mənim səbətim. </h1>z
                    </div>
                </div>
            </div>
            {
                selector.map((index, key) =>
                    <div className="checkout" key={key}>
                        <div className="product-list-item">
                            <div className="row no-gutters">
                                <div className="product-details">
                                    <div className="product-image">
                                        <img className="product-image" src={index.src} />
                                        {/* <img className="product-image" id={index.model} src={index.color[0].src} alt="" /> */}
                                    </div>

                                    <div className="product-description">
                                        <p className="product-name11">{index.name}</p>
                                        <p className="product-sku">Artikul: {index.model}</p>
                                    </div>
                                </div>
                                <div className="quantity-selector">
                                    <div className="product-quantity">
                                        <div className="quantity-inner">
                                            <p className="label">sayi: </p>
                                            <div className="input-group">
                                                <p>{index.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-selector">
                                    <div className="product-prices">
                                        <div className="prices-inner">
                                            <p className="label"> Qiymət: </p>
                                            <div className="prices-wrapper">
                                                <div className="price">{index.price} AZN</div>
                                            </div>
                                            <button className="del" onClick={() => dispatch({ type: "DELETTE_ITEM", payload: index.id })} >X</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
            <div className="total">
                <div className="cart-products-total">Ümumi qiymət: {`${toplam(selector)}AZN`}</div>
                <p>Qiymətə ƏDV daxildir</p>
            </div>
            <div className="btn111">Indi al</div>
        </div>
    )
}

export default Cart
