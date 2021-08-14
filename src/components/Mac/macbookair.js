import React, { useState } from "react"
import { NavLink } from 'react-router-dom'
import "../Mac/Macbookair.css"
import macbookair from "../data/macbookair"
import { useDispatch, useSelector } from "react-redux"


function Macbookair() {
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
        console.log(currentColor)

        if (addedItem && currentColor.src === color) {
            addedItem.quantity += 1
        } else {
            dispatch({ type: "ADD_CART", payload: { ...index, color: color } })
        }

        console.log(index)
    }
    return (
        <div>
            <nav className="chapternav1">
                <div className="chapternav-wrapper">
                    <ul className="chapternav-items">

                        <li className="chapternav-item1 chapternav-item-macbookair">
                            <NavLink to="/macbookair">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">MacBook Air</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item1 chapternav-item-macbookpro13">
                            <NavLink to="/macbookpro13">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">MacBook Pro 13"</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item1 chapternav-item-macbookpro16">
                            <NavLink to="/macbookpro16">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">MacBook Pro 16"</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item1 chapternav-item-imac24">
                            <NavLink to="/imac24">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">iMac 24"</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item1 chapternav-item-macmini">
                            <NavLink to="/macmini">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">Mac mini</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item1 chapternav-item-accessories2">
                            <NavLink to="/appleacc">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">Accessories</span>
                                </a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {macbookair.map((index, key) =>
                <div key={key} className="items55">
                    <div className="image22">
                        <img id={index.model} src={index.color[0].src} alt="phone" />
                    </div>
                    <div className="item-info">
                        <a className="item-name" href="#"> {index.name} </a>
                        <p className="item-sku"> Artikul: {index.model} </p>
                        <div className="color-selector">
                            {index.color.map((itemColor, keydok) =>
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

export default Macbookair
