import iphone12pro from "../data/iphone12pro"
import "./Iphone12pro.css"
import { NavLink } from 'react-router-dom'



function Iphone12pro() {

    const handleClick = (img, id) => {
        var x = document.getElementById(`${id}`)
        var im = img
        x.src = `${im}`
    }

return (

    <div className="row">
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

        {iphone12pro.map((index, key) =>
            <div key={key} className="item1">
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


export default Iphone12pro
