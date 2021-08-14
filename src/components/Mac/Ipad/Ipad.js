import { NavLink, Link}  from 'react-router-dom'
import React from 'react'
import "./Ipad.css"

function Ipad() {
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
                            <NavLink to="/ipadair">
                                <a class="chapternav-link" href="#">
                                    <figure class="chapternav-icon99"> </figure>
                                    <span class="chapternav-label1">iPad Air</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item2 chapternav-item-ipad8">
                            <NavLink to="/ipad10">
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

            <div className="section-ipadpro">
            <div className="section-content">
            <div className="row123">
                <div className="ipad-left">
                    <h1 className="txt321"> iPad Pro</h1>
                    <p className="txt123">
                        Apple M1 çipindən
                            <br />
                        süperguc alır.
                    </p>
                    <Link to="/ipadpro"><button className="button111">Indi alın</button></Link>
                </div>
                <div className="ipad-right">
                <img className="ipadproimg" src="https://www.apple.com/v/ipad/home/bo/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large_2x.jpg" alt="" />
                </div>
                </div>
                </div>
                </div>
        </div>
    )
}

export default Ipad
