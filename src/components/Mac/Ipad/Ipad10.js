import React, { useState } from "react"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import ipad10data from "../data/ipad10"

function Ipad10() {

    const [color, setColor] = useState("black")
    const handleClick = (img, id) => {
        setColor(img)
        var x = document.getElementById(`${id}`)
        var im = img
        x.src = `${im}`
    }
    const dispatch = useDispatch()
    const cartData = useSelector(state => state.cartReducer)
    const handleAddCart = (index) => {
        const addedItem = cartData.find(i => Number(i.id) === Number(index.id))
        const currentColor = index.color.map(index => index)
        if (addedItem && currentColor.src === color) {
            addedItem.quantity += 1
        } else {
            dispatch({ type: "ADD_CART", payload: { ...index, color: color } })
        }
        console.log(index)
    }

    return (
        <div>
            <nav className="chapternav99">
                <div className="chapternav-wrapper">
                    <ul className="chapternav-items">

                        <li className="chapternav-item2 chapternav-item-ipadpro">
                            <NavLink to="/ipadpro">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon99"> </figure>
                                    <span class="chapternav-label1">iPad Pro</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item2 chapternav-item-ipadair">
                            <NavLink to="/">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon99"> </figure>
                                    <span class="chapternav-label1">iPad Air</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item2 chapternav-item-ipad8">
                            <NavLink to="/">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon99"> </figure>
                                    <span class="chapternav-label1">iPad</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item2 chapternav-item-accessories">
                            <NavLink to="/appleacc">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon99"> </figure>
                                    <span class="chapternav-label1">Accessories</span>
                                </a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {ipad10data.map((index, key) =>
                <div key={key} className="item1">
                    <div className="image22">
                        <img id={index.model} src={index.color[0].src} alt="" />
                    </div>
                    <div className="item-info">
                        <a className="item-name" href="#"> {index.name} </a>
                        <p className="item-sku"> Artikul: {index.model} </p>
                        <div className="color-selector">
                            {
                                index.color.map((itemColor, keydok) =>
                                    <div key={keydok} className="colors">
                                        <img
                                            onClick={() => handleClick(itemColor.src, index.model)}
                                            src={itemColor.palette} alt="" />
                                    </div>
                                )}


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
                        <input className="quantity" defaultValue='1' onChange={(e) => dispatch({ type: "ARTIR", payload: index, val: e.target.value })} type="number" />
                    </div>
                    <div onClick={() => handleAddCart(index)} className="item-button22">
                        <img src="https://cdn0.it4profit.com/files/7/catalog-add-cart-icon.svg" alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Ipad10
