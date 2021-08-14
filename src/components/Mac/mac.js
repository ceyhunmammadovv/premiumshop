import React from 'react'
import "../Mac/mac.css"
import { NavLink,Link } from 'react-router-dom'

function mac() {
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
            <div className="content">
                <span className="new">Yeni</span>
                <h2 className="product-name">iMac</h2>
                <p className="hero_text">Say Hello.</p>
                <p className="hero_price">from 3259 AZN </p>
                <Link to="/imac24">
                <button className="product_links">Buy</button>
                </Link>
                <div className="mac_hero">
                    <figure className="hero-imac-24-image"></figure>
                </div>
            </div>
        </div>
    )
}

export default mac
