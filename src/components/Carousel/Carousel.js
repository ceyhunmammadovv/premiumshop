import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import icon1 from "../Carousel/icons/icon1.jpg"
import icon2 from "../Carousel/icons/icon2.png"
import icon3 from "../Carousel/icons/icon3.png"
import icon4 from "../Carousel/icons/icon4.png"
import icon5 from "../Carousel/icons/icon5.png"
import icon6 from "../Carousel/icons/icon6.jpg"
import icon7 from "../Carousel/icons/icon7.jpg"
import icon8 from "../Carousel/icons/icon8.png"
import icon9 from "../Carousel/icons/icon9.jpg"
import icon10 from "../Carousel/icons/icon10.png"
import icon11 from "../Carousel/icons/icon11.png"
import icon12 from "../Carousel/icons/icon12.png"
import icon13 from "../Carousel/icons/icon13.png"
import icon14 from "../Carousel/icons/icon14.png"
import icon15 from "../Carousel/icons/icon15.png"
import icon16 from "../Carousel/icons/icon16.png"
import icon17 from "../Carousel/icons/icon17.png"
import icon18 from "../Carousel/icons/icon18.png"
import icon19 from "../Carousel/icons/icon19.jpeg"
import icon20 from "../Carousel/icons/icon20.png"
import icon21 from "../Carousel/icons/icon21.png"
import icon22 from "../Carousel/icons/icon22.png"
import icon23 from "../Carousel/icons/icon23.jpg"
import icon24 from "../Carousel/icons/icon24.png"
import icon25 from "../Carousel/icons/icon25.jpg"
import icon26 from "../Carousel/icons/icon26.png"
import icon27 from "../Carousel/icons/icon27.png"
import icon28 from "../Carousel/icons/icon28.png"
import icon29 from "../Carousel/icons/icon29.png"
import icon30 from "../Carousel/icons/icon30.png"
import icon31 from "../Carousel/icons/icon31.png"
import icon32 from "../Carousel/icons/icon32.png"
import icon33 from "../Carousel/icons/icon33.png"
import React from 'react'
// import ReactPlayer from 'react-player';
function Slider() {

  const contentStyle = {
    height: '624px',
    width: "100%",
    lineHeight: '624px',
    textAlign: 'center',
  };
  return (
    <div>
      <Carousel autoplay>

        <div>
          <img style={contentStyle} src={icon1} alt="#" />
        </div>

        <div>
          <img style={contentStyle} src={icon2} alt="" />
        </div>

        <div>
          <img style={contentStyle} src={icon3} alt="" />
        </div>

        <div>
          <Link to="/iphone12pro"><img style={contentStyle}  src={icon4} alt="#" /></Link>
        </div>
        <div>
          <img style={contentStyle} src={icon5} alt="" />
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
        <div>
          <img style={contentStyle} src={icon12} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon13} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon14} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon15} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon16} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon17} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon18} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon19} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon20} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon21} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon22} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon23} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon24} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon25} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon26} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon27} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon28} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon29} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon30} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon31} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon32} alt="#" />
        </div>
        <div>
          <img style={contentStyle} src={icon33} alt="#" />
        </div>

      </Carousel>

    </div>
  )
}

export default Slider
