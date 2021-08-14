import { NavLink, } from 'react-router-dom'
import React from 'react'
import "../Apple/Apple.css"
import iphone12pro from "../image/iphone12pro_hero.jpg"
import ipadpro from "../Carousel/icons/icon1.jpg"
import iphone12 from "../Carousel/icons/icon6.jpg"


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
                <div className="iphone12pro_featuress">
                <img className="heroimg" src={iphone12} alt="" />
                <img className="heroimg9" src={ipadpro} alt="" />
                    <img className="heroimg9" src="https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:1400:600:0/q:100/dpr:2/plain/s3://complex-images/13/2290/2100-ru-1.png@webp" alt="" />

                    <img className="heroimg9" src="https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:1400:600:0/q:100/dpr:2/plain/s3://complex-images/13/2292/2100-ru.png@webp" alt="" />
                    
                </div>
            </div>
        </div>
    )
}

export default Apple
