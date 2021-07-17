import { NavLink, } from 'react-router-dom'
import React from 'react'
import "../Apple/Apple.css"
import iphone12pro from "../image/iphone12pro_hero.jpg"
import ipadpro from "../image/ipad_pro_hero.jpeg"

function Apple() {
    return (
        <div>
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

            <div className="apple_hero">
                <div className="iphone12pro_features">
                    <img className="heroimg" src="https://www.apple.com/v/home/ab/images/heroes/iphone-12/iphone_12_updated__jepm2xpxncuy_large_2x.jpg" alt="" />
                    <img className="heroimg" src={iphone12pro} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Apple
