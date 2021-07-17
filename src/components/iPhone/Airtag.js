import React from 'react'
import { NavLink } from 'react-router-dom'

function Airtag() {
    return (
        <div>
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

                        <li className="chapternav-item chapternav-item-iphone-xr">
                            <NavLink to="/iphonexr">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">iPhone XR</span>
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
                            <NavLink to="/accessories">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon"> </figure>
                                    <span class="chapternav-label">Accessories</span>
                                </a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Airtag
