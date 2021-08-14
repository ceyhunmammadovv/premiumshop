import { NavLink } from 'react-router-dom'
import "../iPhone/Iphonese.css"
import iphonese from "../data/iphonese"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function Iphonese() {
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
        <div className="row">
            <nav className="chapternav">
                <div className="chapternav-wrapper">
                    <ul className="chapternav-items">

                        <li className="chapternav-item chapternav-item-iphone-12-pro">
                            <NavLink to="/iphone12promax">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">iPhone 12 Pro Max</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item chapternav-item-iphone-12-pro">
                            <NavLink to="/iphone12pro">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">iPhone 12 Pro</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item chapternav-item-iphone-12">
                            <NavLink to="/iphone12">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">iPhone 12</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item chapternav-item-iphone-12">
                            <NavLink to="/iphone12mini">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">iPhone 12 mini</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item chapternav-item-iphone-se">
                            <NavLink to="/iphonese">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">iPhone SE</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item chapternav-item-iphone-11">
                            <NavLink to="/iphone11">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">iPhone 11</span>
                                </a>
                            </NavLink>
                        </li>
                        <li className="chapternav-item chapternav-item-airpods">
                            <NavLink to="/airpods">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">AirPods</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item chapternav-item-airtag ">
                            <NavLink to="/airtag">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">AirTag</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item chapternav-item-accessories">
                            <NavLink to="/appleacc">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">Accessories</span>
                                </a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {iphonese.map((index, key) =>
                <div key={key} className="item1">
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

export default Iphonese
