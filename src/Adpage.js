import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "./Adpage.css";
import jQuery from "jquery";
import $ from 'jquery';
window.$ = window.jQuery = jQuery;

const Adpage = () => {

    const settingsDe = {
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        pauseOnHover: true
      };

    return(
        <div className="Adpage">
            <div>
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/Jc6ja0wErJ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <span>※ 영상 재생 중 나오는 몬스터를 잡으면 그에 따른 포인트가 적립됩니다.</span>
            </div>
            <div>
                <Link to="/shopmain">쇼핑몰 보러가기</Link>
            </div>
        </div>
    );
};

export default Adpage;