import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import icon0 from "../Carousel/Carousel icons/icon0.jpg"
import icon13 from "../image/note20ultra.jpg"
import icon14 from "../image/mi10t.jpg"
import icon1 from "../Carousel/Carousel icons/icon1.jpg"
import icon2 from "../Carousel/Carousel icons/icon2.png"
import icon3 from "../image/pocox3.jpg"
import icon4 from "../Carousel/Carousel icons/icon3.jpg"
import icon12 from "../image/pocom3.jpg"
import icon5 from "../Carousel/Carousel icons/icon5.jpg"
import icon6 from "../Carousel/Carousel icons/icon6.jpg"
import icon7 from "../Carousel/Carousel icons/icon7.jpg"
import icon8 from "../Carousel/Carousel icons/icon8.jpg"
import icon9 from "../Carousel/Carousel icons/icon9.jpg"
import icon10 from "../Carousel/Carousel icons/icon10.jpg"
import icon11 from "../Carousel/Carousel icons/icon11.png"
import React from 'react'
// import ReactPlayer from 'react-player';
function Slider() {

  const contentStyle = {
    height: '600px',
    width: "100%",
    lineHeight: '600px',
    textAlign: 'center',
  };
  return (
    <div>
      <Carousel autoplay>

        <div>
          <img style={contentStyle} src={icon0} alt="#" />
        </div>

        <div>
          <img style={contentStyle} src={icon13} alt="" />
        </div>

        <div>
          <img style={contentStyle} src={icon14} alt="" />
        </div>

        <div>
          <Link to="/airpods"><img style={contentStyle} src={icon1} alt="#" /></Link>
        </div>
        <div>
          <img style={contentStyle} src={icon12} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={icon2} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon3} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon4} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon5} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon6} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon7} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon8} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon9} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon10} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon11} alt="#" />
        </div>
      </Carousel>

    </div>
  )
}

export default Slider
