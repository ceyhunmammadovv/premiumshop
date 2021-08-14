import React, { useState } from "react"
import "../Accessories/Appleacc.css"
import accdata from "../data/accessories"
import { NavLink, } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

function Appleacc() {
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
        console.log(index);
        const addedItem = cartData.find(i => Number(i.id) === Number(index.id))
        const currentColor = index.color.map(index => index)
       
        if (addedItem && currentColor.src === color) {
            addedItem.quantity += 1
        } else {
            dispatch({ type: "ADD_CART", payload: { ...index, color: color } })
        }
    }
    return (
        <div className="row">
            <nav className="chapternav1">
                <div className="chapternav-wrapper">
                    <ul className="chapternav-items">

                        <li className="chapternav-item1 chapternav-item-mac">
                            <NavLink to="/mac">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">Mac</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item1 chapternav-item-ipad">
                            <NavLink to="/ipad">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">iPad</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item1 chapternav-item-iphone">
                            <NavLink to="/iphone">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">iPhone</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item1 chapternav-item-watch">
                            <NavLink to="/watch">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">Watch</span>
                                </a>
                            </NavLink>
                        </li>
                        <li className="chapternav-item1 chapternav-item-tv">
                            <NavLink to="/tv">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">TV</span>
                                </a>
                            </NavLink>
                        </li>
                        {/* <li className="chapternav-item1 chapternav-item-tv">
                            <NavLink to="/appleacc">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label1">Accessories</span>
                                </a>
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </nav>

            {accdata.map((index, key) =>
                <div key={key} className="items">
                    <div className="image">
                        <img id={index.model} src={index.color === undefined ? index.src : index.color[0].src} alt="phone" />
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
export default Appleacc
