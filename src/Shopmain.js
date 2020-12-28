import React from 'react';
import {Link} from 'react-router-dom'; 
import Slider from "react-slick";
import jQuery from "jquery";
import $ from 'jquery';
window.$ = window.jQuery = jQuery;
import "./Shopmain.css";

const Shopmain = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const settingsView = {
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };

    $(function(){

        var i = 1;
        $('.hamburger').on('click', function(){
            if(i === 1){
            i--;
            $('.gnb').css('animation-name','gnbOpen');
            $('.gnb').css('animation-duration','1s');
            $('.gnb').css('animation-fill-mode','forwards');
            $(this).children('img').attr({'src':'/images/gnbClose.png'});
            }else{
            i++;
            $('.gnb').css('animation-name','gnbClose');
            $('.gnb').css('animation-duration','1s');
            $('.gnb').css('animation-fill-mode','forwards');
            $(this).children('img').attr({'src':'/images/gnbOpen.png'});
            }
            console.log(i);
        });

    });

    return (
        <div className="Shopmain">
            {/* <div className="shop"><img src="/images/shopmain.jpg" alt=""/></div> */}
            <div className="wrap">
                <p>
                    <Slider {...settings}>
                        <img src="/images/shop4.jpg" alt=""/>
                        <img src="/images/shop5.jpg" alt=""/>
                        <img src="/images/shop1.jpg" alt=""/>
                    </Slider>
                    <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam illo voluptatibus dignissimos amet velit, nemo possimus maxime praesentium voluptates molestias nihil voluptate aspernatur hic, doloremque quaerat rerum eum consequatur?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam illo voluptatibus dignissimos amet velit, nemo possimus maxime praesentium voluptates molestias nihil voluptate aspernatur hic, doloremque quaerat rerum eum consequatur?
                    </span>
                </p>
                <section>
                    
                    <div className="viewBox">
                        <Slider {...settingsView} className="animal">
                            <Link to="shopList"><p>지오스토어</p><img src="./images/animal1.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
                            <Link to="shopList"><p>핏펫</p><img src="./images/animal2.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
                            <Link to="shopList"><p>펫드라이룸</p><img src="./images/animal3.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
                            <Link to="shopList"><p>프리라이프펫</p><img src="./images/animal1.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
                            <Link to="shopList"><p>이퓨펫</p><img src="./images/animal2.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
                            <Link to="shopList"><p>야미스토리</p><img src="./images/animal3.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
                        </Slider>
                        <Slider {...settingsView} className="baby">
                            <Link to="shopList"><p>에시앙</p><img src="./images/baby1.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
                            <Link to="shopList"><p>유비윈</p><img src="./images/baby2.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
                            <Link to="shopList"><p>피그비</p><img src="./images/baby3.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
                            <Link to="shopList"><p>피에고</p><img src="./images/baby1.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
                            <Link to="shopList"><p>닥터바이오</p><img src="./images/baby2.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
                            <Link to="shopList"><p>베베스킨</p><img src="./images/baby3.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
                        </Slider>
                        <Slider {...settingsView} className="food">
                            <Link to="shopList"><p>비비고</p><img src="./images/food1.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
                            <Link to="shopList"><p>삼양</p><img src="./images/food2.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
                            <Link to="shopList"><p>오뚜기</p><img src="./images/food3.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
                            <Link to="shopList"><p>리빙패밀리</p><img src="./images/food1.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
                            <Link to="shopList"><p>연안식당</p><img src="./images/food2.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
                            <Link to="shopList"><p>온푸드</p><img src="./images/food3.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
                        </Slider>
                        <Slider {...settingsView} className="products">
                            <Link to="shopList"><p>삼성전자</p><img src="./images/products1.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
                            <Link to="shopList"><p>LG</p><img src="./images/products2.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
                            <Link to="shopList"><p>쿠쿠</p><img src="./images/products3.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
                            <Link to="shopList"><p>위니아전자</p><img src="./images/products1.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
                            <Link to="shopList"><p>홈마블</p><img src="./images/products2.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
                            <Link to="shopList"><p>부토</p><img src="./images/products3.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
                        </Slider>
                    </div>
                    <div className="gnb">
                        {/* <p>카테고리</p>
                        <Link to="/">애완용품</Link>
                        <Link to="/">유아용품</Link>
                        <Link to="/">식품</Link>
                        <Link to="/">의류</Link>
                        <Link to="/">가구, 가전제품</Link>
                        <Link to="/">스포츠용품</Link> */}
                        <div>
                            <Link to="/shopEventList">⏰ EVENT</Link>
                        </div>
                        <div>
                            <Link to="/shopNotice">📌 공지사항</Link>
                        </div>
                        <span className="hamburger">
                            <img src="/images/gnbOpen.png" alt=""/>
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Shopmain;
