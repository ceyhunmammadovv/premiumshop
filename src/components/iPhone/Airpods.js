import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../iPhone/Airpods.css"
function Airpods() {
    return (
        <div>
            <nav className="chapternav3">
                <div className="chapternav-wrapper">
                    <ul className="chapternav-items">

                        <li className="chapternav-item chapternav-item-airpods">
                            <NavLink to="/airpods2">
                                <a class="chapternav-link2" href="#">
                                    <figure class="chapternav-icon2"> </figure>
                                    <span class="chapternav-label2">AirPods</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item chapternav-item-airpodspro">
                            <NavLink to="/airpodspro">
                                <a class="chapternav-link2" href="#">
                                    <figure class="chapternav-icon2"> </figure>
                                    <span class="chapternav-label2">AirPods Pro</span>
                                </a>
                            </NavLink>
                        </li>

                        <li className="chapternav-item chapternav-item-airpodsmax">
                            <NavLink to="/airpodsmax">
                                <a class="chapternav-link2" href="#">
                                    <figure class="chapternav-icon2"> </figure>
                                    <span class="chapternav-label2">AirPods Max</span>
                                </a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="airpods_main">
                <div className="section_max_width">
                    <h2>Magic runs in the family.</h2>
                    <p>AirPods deliver an unparalleled listening experience with all your devices. Every model connects effortlessly and packs rich, high-quality sound into an innovative wireless design.</p>
                </div>

                <div className="product_section">

                    <div className="tile_airpods">
                        <div className="airpods_text">
                            <h2 class="visuallyhidden"></h2>
                            <figure className="tile-headline"></figure>
                            <ul className="links-inline">
                                <li> <Link to="/airpods2"><button className="btn">Buy</button> </Link> </li>
                            </ul>
                        </div>
                        <div className="airpods_img">
                            <figure className="tile-image"></figure>
                        </div>
                    </div>

                    <div className="tile_airpods">
                        <div className="airpods_text">
                            <h2 class="visuallyhidden"></h2>
                            <figure className="tile-headline"></figure>
                            <ul className="links-inline">
                                <li> <Link to="/airpodspro"><button className="btn">Buy</button> </Link> </li>
                            </ul>
                        </div>
                        <div className="airpodspro_img">
                            <figure className="tile-image2"></figure>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="airpodsmax_main">
                    <div className="airpodsmax_hero">

                        <img className="airpodsmax_img" src="https://www.apple.com/v/airpods/o/images/overview/airpods_max__f265q4g4ddym_large_2x.png" alt="" />

                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Airpods
