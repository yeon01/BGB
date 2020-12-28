import React from 'react';
import Slider from "react-slick";   
import { Link } from 'react-router-dom';
import "./Event.css";

const Event = () => {
    const settingsView = {
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        pauseOnHover: true
      };
    return (
        <div className="Event">
            <p>2020. 12. 01 (월) ~ 2020. 12. 31 (목)</p>
            <Link to="/shopList">
                <img src="/images/food1.jpg" alt=""/>
                <h2>상수네 과일상점 딸기 "20%" Sale</h2>
            </Link>
            <span>100% 무농약으로 재배한 딸기 입니다.<br />
                크고 달달한 상수네 과일상점 딸기 20% 할인된 가격으로 판매합니다 !<br />
            </span>
            <Slider className="eventSlider" {...settingsView}>
                <img src="./images/strawberry1.jpg" alt=""/>
                <img src="./images/strawberry2.jpg" alt=""/>
                <img src="./images/strawberry3.jpg" alt=""/>
                <img src="./images/strawberry4.jpg" alt=""/>
                <img src="./images/strawberry5.jpg" alt=""/>
                <img src="./images/strawberry1.jpg" alt=""/>
                <img src="./images/strawberry2.jpg" alt=""/>
                <img src="./images/strawberry3.jpg" alt=""/>
                <img src="./images/strawberry4.jpg" alt=""/>
                <img src="./images/strawberry5.jpg" alt=""/>
            </Slider> 
            <Link className="eventList" to="/eventList">목록으로 ></Link>   
        </div>
    )
}

export default Event;
