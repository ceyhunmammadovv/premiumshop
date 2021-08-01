import React from 'react'
import 'antd/dist/antd.css';
import "../Home/Home.css"
// import img1 from "../image/iphone12pro_hero.jpg"
import Slider from '../Carousel/Carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CgShoppingCart } from 'react-icons/cg';
import { useDispatch, useSelector } from "react-redux"
import cardata from "../data/carousel"
import accdata from "../data/accdata"


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Home() {
    //    const [color, setColor] = useState("black")
    const handleClick = (id) => {
        // setColor(img)
        var x = document.getElementById(`${id}`)
        // var im = img
        // x.src = `${im}`
    }
    const dispatch = useDispatch()
    const cartData = useSelector(state => state.cartReducer)
    const handleAddCart = (index) => {
        const addedItem = cartData.find(i => i.id === index.id)
        // const currentColor = index.img.map(index => index)
        // console.log(currentColor)

        if (addedItem) {
            addedItem.quantity += 1
        } else {
            dispatch({ type: "ADD_CART", payload: { ...index, } })
        }

        console.log(index)
    }

    return (
        <div>
            <div>
                <Slider />
            </div>
            <br />
            <br />
            <Carousel responsive={responsive}>
                {cardata.map((index, key) =>
                    <div className="main">
                        <div key={key} className="card">
                            <div className="images">
                                <img id={index.model} src={index.src} alt="phone" />
                            </div>
                            <div className="name">
                                <a href="#"> {index.name} </a>
                            </div>
                            <p className="item-sku"> Artikul: {index.model} </p>
                            <div className="button1">
                                <div className="prices">
                                    <p>{index.price} AZN</p>
                                </div>
                                <div onClick={() => handleClick(index.src, index.model)} className="button" onClick={() => handleAddCart(index)}>
                                    <CgShoppingCart />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Carousel>
            <br />
            <br />

            <Carousel responsive={responsive}>
                {accdata.map((index, key) =>
                    <div className="main">
                        <div key={key} className="card">
                            <div className="images">
                                <img id={index.model} src={index.src} alt="phone" />
                            </div>
                            <div className="name">
                                <a href="#"> {index.name} </a>
                            </div>
                            <p className="item-sku"> Artikul: {index.model} </p>
                            <div className="button1">
                                <div className="prices">
                                    <p>{index.price} AZN</p>
                                </div>
                                <div onClick={() => handleClick(index.src, index.model)} className="button" onClick={() => handleAddCart(index)}>
                                    <CgShoppingCart />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Carousel>


            {/* 
            <div className="homepage_section">

                <div className="iphone12pro_features">

                    <img className="heroimg" src={img1} alt="" />
                </div>

            </div> */}


        </div>


    )
}
export default Home

