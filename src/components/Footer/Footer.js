import React from 'react'
import { Link } from 'react-router-dom'
import "../Footer/Footer.css"
import logo from "../image/logo.png"
import { ImFacebook2 } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-left">
                            <img className="icons" src={logo} alt="" />
                        </div>
                        <div className="footer-right">
                            <span> Biz sosial şəbəkələrdə: </span>
                            <ul className="social">
                                <li>
                                    <a href="https://www.facebook.com/premiumshop.az">
                                        <div className="faicon"><ImFacebook2 /></div>
                                    </a>

                                </li>

                                <li>
                                    <a href="https://www.instagram.com/premiumshop.az/">
                                        <div className="insta"><SiInstagram /></div>
                                    </a>

                                </li>
                                <li>
                                    <a href="https://twitter.com/premiumshop.az">
                                        <div className="twit"><FaTwitter /></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="rows">
                        <div className="footer-list">
                            <ul className="foot-nav-list">
                                <Link to="melumat"><li className="first"> Məlumat</li> </Link>
                                <Link to="/haqqimizda"><li className="list-item">Haqqımızda</li> </Link>
                                <Link to="/mexfilik"><li className="list-item"> Məxfilik siyasəti </li> </Link>
                                <Link to="/sertler"><li className="list-item"> Satış şərtləri </li> </Link>
                            </ul>
                        </div>
                        <div className="footer-list">
                            <ul className="foot-nav-list">
                                <Link to="/mac">  <li className="first"> Mac </li> </Link>
                                <Link to="/macbookpro13">    <li className="list-item"> MacBook Pro 13" </li> </Link>
                                <Link to="/macbookpro16">    <li className="list-item"> MacBook Pro 16" </li> </Link>
                                <Link to="/macbookair">    <li className="list-item"> MacBook Air </li> </Link>
                                <Link to="/imac">  <li className="list-item"> iMac </li> </Link>
                                <Link to="/macmini">   <li className="list-item"> Mac Mini </li> </Link>
                            </ul>
                        </div>
                        <div className="footer-list">
                            <ul className="foot-nav-list">
                                <Link to="/iphone">    <li className="first">iPhone</li> </Link>
                                <Link to="/iphone12promax">   <li className="list-item"> iPhone 12 Pro Max</li> </Link>
                                <Link to="/iphone12pro">   <li className="list-item">iPhone 12 Pro</li> </Link>
                                <Link to="/iphone12">    <li className="list-item">iPhone 12</li> </Link>
                                <Link to="/iphone12mini">    <li className="list-item"> iPhone 12 mini </li> </Link>
                                <Link to="/iphone11">    <li className="list-item">iPhone 11</li> </Link>
                                <Link to="/iphonese">   <li className="list-item">iPhone SE</li> </Link>
                            </ul>
                        </div>
                        <div className="footer-list">
                            <ul className="foot-nav-list">
                                <Link to="/watch">   <li className="first">Apple Watch</li> </Link>
                                <Link to="/watch">  <li className="list-item">Apple Watch Series 6</li> </Link>
                                <Link to="/watch">   <li className="list-item">Apple Watch SE</li> </Link>
                                <Link to="/watch"> <li className="list-item">Apple Watch Series 3</li> </Link>
                            </ul>
                        </div>
                        <div className="footer-list">
                            <ul className="foot-nav-list">
                                <Link to="/samsung">  <li className="first">Samsung</li> </Link>
                                <Link to="/galaxynote20">   <li className="list-item">Galaxy Note 20</li> </Link>
                                <Link to="/galaxys21">   <li className="list-item">Galaxy S21</li> </Link>
                                <Link to="/galaxya">   <li className="list-item">Galaxy A Series</li> </Link>
                                <Link to="/galaxybuds">     <li className="list-item">Galaxy Buds</li> </Link>
                                <Link to="/galaxywatch">   <li className="list-item">Galaxy Watch</li> </Link>
                            </ul>
                        </div>
                        <div className="footer-list">
                            <ul className="foot-nav-list">
                                <Link to="xiaomi">  <li className="first">Xiaomi</li> </Link>
                                <Link to="/mi11"> <li className="list-item">Mi 11</li> </Link>
                                <Link to="/mi11lite">   <li className="list-item">Mi 11 Lite</li> </Link>
                                <Link to="/mi10t">    <li className="list-item">Mi 10T</li> </Link>
                                <Link to="/pocox3">   <li className="list-item">Poco X3 Pro</li> </Link>
                                <Link to="/pocom3">   <li className="list-item">Poco M3</li> </Link>
                                <Link to="/reminote10">   <li className="list-item">Redmi Note 10</li> </Link>
                                <Link to="/redminote9">    <li className="list-item">Redmi Note 9</li> </Link>
                                <Link to="/amazfit">   <li className="list-item">Amazfit Watch</li> </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="containersss">
                        <div className="rowsss">
                            <div className="contact">
                                <ul>
                                    <li className="tel">Tel: </li>
                                    <li><a className="tel" href="tel:+994514041155">+994 51 404 11 55</a></li>
                                    <li><a className="tel" href="tel:+994704041155">+994 70 404 11 55</a></li>
                                    <li><a className="tel" href="tel:+994557271155">+994 55 727 11 55</a></li>
                              </ul>
                                <p className="unvan">Baki ş. M.Hadi küç.</p>
                                <p className="email">support@premiumshop.az</p>
                            </div>
                            <div className="payment">
                                <p className="payment-title">Biz qəbul edirik:</p>
                                <img className="visa" src="https://almastore.az/assets/images/accept-visa.svg" alt="" />
                                <img className="master" src="https://almastore.az/assets/images/accept-mc.svg" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
