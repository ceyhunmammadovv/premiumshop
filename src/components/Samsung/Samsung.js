import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import samsungdata from "../data/Samsung/samsung"
import "../Samsung/Samsung.css"

function Samsung() {
    const handleClick = (img, id) => {
        // setColor(img)
        var x = document.getElementById(`${id}`)
        var im = img
        x.src = `${im}`
         }
        const dispatch = useDispatch()
        const cartData = useSelector(state => state.cartReducer)
        const handleAddCart = (index) => {
        const addedItem = cartData.find(i => Number(i.id) === Number(index.id))
        // const currentItem = index.map(index => index)

        if (addedItem ) {
            addedItem.quantity += 1
        } else {
            dispatch({ type: "ADD_CART", payload: { ...index } })
        }

        console.log(index)
    }
    return (
        <div>
                        {samsungdata.map((index, key) =>
                <div key={key} className="item1">
                    <div className="image22">
                        <img className="imgs" id={index.model} src={index.src} alt="phone" />
                    </div>
                    <div className="item-info">
                        <a className="item-name" href="#"> {index.name} </a>
                        <p className="item-sku"> Artikul: {index.model} </p>
                        <div className="color-selector">
                        {
                                index.color === undefined ? false : index.color.map((itemColor, keydok) =>
                                    <div key={keydok} className="colors">
                                        <img
                                            onClick={() => handleClick(itemColor.src, index.model)}
                                            src={itemColor.palette} alt="" />
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    <div className="item-bottom-info">
                        <div className="item-prices">
                            <div className="prices-wrapper">
                                <p className="price">{index.price} AZN</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <input className="quantity" defaultValue='1' onChange={(e) => dispatch({ type: "ARTIR", payload: index, val: e.target.value })}  type="number" />
                    </div>
                    <div onClick={() => handleAddCart(index)} className="item-button22">
                        <img src="https://cdn0.it4profit.com/files/7/catalog-add-cart-icon.svg" alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Samsung
