import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "./ShopList.css";
import jQuery from "jquery";
import $ from 'jquery';
window.$ = window.jQuery = jQuery;


const ShopList = () => {



    // 옵션 선택 및 삭제 기능구현
    const [nav1, setNav1] = React.useState(null)
    const [nav2, setNav2] = React.useState(null)
    let slider1 = []
    let slider2 = []

    React.useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])

    $('select').on('change', function() {
        var layer = $('select option:selected').attr('class');
        $('.layer .'+ layer).css('display','block');
    });

    $('.layer .del').on('click', function() {
        $(this).parent('div').css('display','none');
    });

    const [count, setCount] = useState(1);

    const onClickMinusHandler = (e) => {
        e.preventDefault();
        setCount(count-1)
        if(count < 2){
            setCount(1)
        }
    };
    const onClickPlusHandler = (e) => {
        e.preventDefault();
        setCount(count+1)
    };


    // 관심상품 담기 (데이터 넘기기)
    const [isWishAdd, setIsWishAdd] = useState(false);
    const [wishCount, setWishCount] = useState(808); 

    const wishCountHandler = () => {
        wishAddHandler()
        if (!siWishAdd) {
          setWishCount(wishCount +1)
          fetch("", {
            method: "POST", 
            body: JSON.stringify({
              "user_id": 8,
              "product_id": 2
            })
          })
        } else if (isWishAdd) {
          setWishCount(wishCount -1)
          fetch("", {
            method: "POST",
            body: JSON.stringify({
              "user_id": 8,
              "product_id": 2
            })
          })
        }
      };    

   

    return(
        <div className="ShopList">
            <div>
                <Slider asNavFor={nav2} 
                ref={slider => (slider1 = slider)} >
                    <img src="/images/shop1.jpg" alt=""/>
                    <img src="/images/shop2.jpg" alt=""/>
                    <img src="/images/shop3.jpg" alt=""/>
                    <img src="/images/shop4.jpg" alt=""/>
                    <img src="/images/shop5.jpg" alt=""/>
                </Slider>
                <Slider
                asNavFor={nav1}
                ref={slider => (slider2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                >
                    <img src="/images/shop1.jpg" alt=""/>
                    <img src="/images/shop2.jpg" alt=""/>
                    <img src="/images/shop3.jpg" alt=""/>
                    <img src="/images/shop4.jpg" alt=""/>
                    <img src="/images/shop5.jpg" alt=""/>
                </Slider>
            </div>
            <div className="listInfo">
              <form action="">  
                <p>[앤드지 바이 지오지아] 앤드지 BY지오지아 20 F/W 실버폭스퍼 구스 맥스다운</p>
                <p>
                    <span className="title">실구매가</span>
                    <span className="sale">36</span>%
                    <span className="delete">20,000</span> →
                    <span>12,900</span>원
                </p>
                <p className="option">
                    <span className="title">선택옵션</span>
                    <div>
                        <select name="" id="">
                            <option value="">-- 선택하세요 --</option>
                            <option value="" className="outer01">가디건 - S</option>
                            <option value="" className="outer02">가디건 - M</option>
                            <option value="" className="outer03">가디건 - L</option>
                            <option value="" className="outer04">가디건 - XL</option>
                            <option value="" className="outer05">가디건 - 2XL</option>
                            <option value="" className="outer06">가디건 - 3XL</option>
                        </select>
                    </div>
                </p>
                {/* <p><span className="title">배송비</span><span>2,500</span>원</p> */}
                <div className="layer">
                    <div>-- 선택하세요 --</div>
                    <div className="outer01"><span>가디건 - S</span><span>12,900</span>원 <div className="val"><button onClick= {onClickMinusHandler} className="minus">➖</button>{count}<button onClick= {onClickPlusHandler} className="plus">➕</button></div> <button className="del">✖</button></div>
                    <div className="outer02"><span>가디건 - M</span><span>12,900</span>원 <div className="val"><button onClick= {onClickMinusHandler} className="minus">➖</button>{count}<button onClick= {onClickPlusHandler} className="plus">➕</button></div> <button className="del">✖</button></div>
                    <div className="outer03"><span>가디건 - L</span><span>12,900</span>원 <div className="val"><button onClick= {onClickMinusHandler} className="minus">➖</button>{count}<button onClick= {onClickPlusHandler} className="plus">➕</button></div> <button className="del">✖</button></div>
                    <div className="outer04"><span>가디건 - XL</span><span>12,900</span>원 <div className="val"><button onClick= {onClickMinusHandler} className="minus">➖</button>{count}<button onClick= {onClickPlusHandler} className="plus">➕</button></div> <button className="del">✖</button></div>
                    <div className="outer05"><span>가디건 - 2XL</span><span>12,900</span>원 <div className="val"><button onClick= {onClickMinusHandler} className="minus">➖</button>{count}<button onClick= {onClickPlusHandler} className="plus">➕</button></div> <button className="del">✖</button></div>
                    <div className="outer06"><span>가디건 - 3XL</span><span>12,900</span>원 <div className="val"><button onClick= {onClickMinusHandler} className="minus">➖</button>{count}<button onClick= {onClickPlusHandler} className="plus">➕</button></div> <button className="del">✖</button></div>
                </div>
                <p className="money">총 가격 <span>12,900</span>원</p>
                <div className="sns">
                    SNS 공유하기
                    <ul>
                        <li><img src="/images/youtube.png" alt=""/></li>
                        <li><img src="/images/facebook.png" alt=""/></li>
                        <li><img src="" alt=""/></li>
                        <li><img src="" alt=""/></li>
                    </ul>
                </div>
                <div>
                        <button type="submit" onClick={wishCountHandler}>관심상품담기</button>
                        <button type="submit">장바구니 담기</button>
                        <button type="submit">구매하기</button>
                </div>
              </form>
            </div>
        </div>
    );
};

export default ShopList;