import React from 'react'
import { NavLink } from "react-router-dom"
import logo from "../image/logo.png"
import '../Header/Header.css'
import { BsBag } from 'react-icons/bs';
import { VscAccount } from "react-icons/vsc";
function Header() {
    return (
        <div className="nav">
            <ul className="navbar">
                <li><NavLink to="/"><img className="logo" src={logo} alt="" /></NavLink></li>
                <li className="drop">
                    <NavLink to="/apple">Apple </NavLink>
                </li>
                <li className="drop">
                    <NavLink to="/samsung">Samsung</NavLink>
                </li>
                <li className="drop">
                    <NavLink to="/xiaomi">Xiaomi</NavLink>
                </li>
                <li className="drop">
                    <NavLink to="/huawei">Huawei</NavLink>
                </li>
                <li>
                    <NavLink to="/appleacc">Accessories</NavLink>
                </li>
                <li><NavLink to="/cart"><BsBag /></NavLink></li>
                <li><NavLink to="/signin"><VscAccount /></NavLink></li>
            </ul>
        </div>
    )
}
export default Header;