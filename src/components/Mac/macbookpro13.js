import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Mac/macbookpro13.css"
import macbook13 from "../data/macbookpro13"

function macbookpro13() {
    const handleClick = (img, id) => {
        var x = document.getElementById(`${id}`)
        var im = img
        x.src = `${im}`
    }
    return (
        <div className="row">

            
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

            {macbook13.map((index, key) =>
                <div key={key} className="item2">
                    <div className="image">
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
                    <div className="item-button">
                        <img src="https://cdn0.it4profit.com/files/7/catalog-add-cart-icon.svg" alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default macbookpro13
