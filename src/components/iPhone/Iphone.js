
import "../iPhone/Iphone.css"
import { NavLink, Link } from 'react-router-dom'
import React, { useState } from 'react'
import img1 from '../image/iphone12prohero_1.jpg'
import img2 from '../image/iphone12prohero_2.jpg'
import img3 from '../image/iphone12prohero_3.jpg'
import img4 from '../image/iphone12prohero_4.jpg'
import icon_gray from "../image/icon_gray.png"
import icon_blue from "../image/icon_blue.png"
import icon_gold from "../image/icon_gold.png"
import icon_silver from "../image/icon_silver.png"

function Iphone() {
    const [color, setColor] = useState("")

    const handleChangeColor = (color) => {
        // console.log(color)
        if (color === "blue") {
            setColor(img4)
        } else if (color === "gray") {
            setColor(img2)
        } else if (color === "silver") {
            setColor(img3)
        } else if (color === "gold") {
            setColor(img1)

        }
    }
    return (
        <div className="body">
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

            <div className="lift-transition-sticky-content">
                <div className="container">
                    <h1 class="hero-eyebrow">iPhone 12 Pro and iPhone 12 Pro Max</h1>
                    <h2 className="text2">Bir sıçrayış ilidir.</h2>
                    <p className="text1">İndiyə qədərki ən sürətli smartfon çipinə salam deyin. 5G sürəti. İnkişaf etmiş ikili kamera sistemi. 4 qat daha yaxşı düşmə performansı üçün Seramik Qalxan. Və daha parlaq, daha rəngli OLED ekran. iPhone 12, iki böyük ölçüdə ümumi bir güc mərkəzidir.</p>
                    <Link to="/iphone12promax"><button className="btn55">Indi alın</button></Link>
                </div>
            </div>

            <div className="hero">
                <div className="gallery">
                    <img className="container1" src={color === "" ? img4 : color} alt="#" />
                </div>
            </div>
            <br />
            <br />
            <div className="color-selector">
                <div onClick={() => handleChangeColor("gray")} className="colorss"><img src={icon_gray} alt="" /></div>
                <div onClick={() => handleChangeColor("silver")} className="colorss"><img src={icon_silver} alt="" /><a href="#"></a></div>
                <div onClick={() => handleChangeColor("gold")} className="colorss"><img src={icon_gold} alt="" /><a href="#"></a></div>
                <div onClick={() => handleChangeColor("blue")} className="colorss"><img src={icon_blue} alt="" /></div>

            </div>
        </div>
    )
}

export default Iphone
