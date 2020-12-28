import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import jQuery from "jquery";
import $ from 'jquery';
window.$ = window.jQuery = jQuery;



const Main = () => {

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

  
  // 

  $(function(){
    $('.login').on("click", function(){
      $('body').css('height','100vh');

      $('.login_modal').css('animation-name', 'loginOnM');
      $('.login_modal').css('animation-duration', '0.5s');
      $('.login_modal').css('animation-fill-mode', 'forwards');

      $('.login_box').css('animation-name', 'loginOn');
      $('.login_box').css('animation-duration', '0.5s');
      $('.login_box').css('animation-fill-mode', 'forwards');
    });

    $('.close').on("click", function(){
      $('body').css('height','auto');
      
      $('.login_modal').css('animation-name', 'loginCloseM');
      $('.login_modal').css('animation-duration', '0.5s');
      $('.login_modal').css('animation-fill-mode', 'forwards'); 

      $('.login_box').css('animation-name', 'loginClose');
      $('.login_box').css('animation-duration', '0.5s');
      $('.login_box').css('animation-fill-mode', 'forwards'); 
    }); 

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

 

  return(
    <div className="Main">
        
        <div className="login_modal">
          <input type="checkbox" name="" id="close"/>
          <div className="login_box">
            <div className="close">✖</div>
            <form action="">
              <h2>Login</h2>
              <p>ID :<input type="text" name="" id=""/></p>
              <p>PW :<input type="password" name="" id=""/></p>
              <p><input type="submit" value="LOGIN"/></p>
              <hr/>
              <p>
                <Link to="/signup">회원가입</Link>
                <Link to="/">아이디 찾기</Link>
                <Link to="/">비밀번호 찾기</Link>
              </p>
            </form>
          </div>
        </div>
        <section>
          <div className="banner box">
            <video autoPlay muted loop src="./video/bgv.mp4"></video>  
            <div className="bgv"></div>
            <Slider className="slider" {...settings}>
              <Link to="/ShopList"><div><span>당도 높은 딸기<br />겨울철 필수 과일<br />특가찬스 "20%" SALE</span><img src="./images/food1.jpg" alt="딸기"/></div></Link>
              <Link to="/ShopList"><div><span>자극적인 물티슈 BYE <br />순한 향균 물티슈<br />특가찬스 "10%" SALE</span><img src="./images/baby1.jpg" alt="물티슈"/></div></Link>
              <Link to="/ShopList"><div><span>반려견,반려묘<br />필수템 모음<br />특가찬스 최대 "30%" SALE</span><img src="./images/animal1.jpg" alt="애완용품"/></div></Link>
            </Slider>
          </div>
          <div className="viewBox box">
            <h2>| 애완용품</h2>
            <Slider {...settingsView} className="animal">
              <Link to="/adpage"><p>지오스토어</p><img src="./images/animal1.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
              <Link to="/adpage"><p>핏펫</p><img src="./images/animal2.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
              <Link to="/adpage"><p>펫드라이룸</p><img src="./images/animal3.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
              <Link to="/adpage"><p>프리라이프펫</p><img src="./images/animal1.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
              <Link to="/adpage"><p>이퓨펫</p><img src="./images/animal2.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
              <Link to="/adpage"><p>야미스토리</p><img src="./images/animal3.jpg" alt=""/><p>고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</p><p>46,390원</p></Link>
            </Slider>
            <Link to="/">더보기</Link>
            <h2>| 유아용품</h2>
            <Slider {...settingsView} className="baby">
              <Link to="/adpage"><p>에시앙</p><img src="./images/baby1.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
              <Link to="/adpage"><p>유비윈</p><img src="./images/baby2.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
              <Link to="/adpage"><p>피그비</p><img src="./images/baby3.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
              <Link to="/adpage"><p>피에고</p><img src="./images/baby1.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
              <Link to="/adpage"><p>닥터바이오</p><img src="./images/baby2.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
              <Link to="/adpage"><p>베베스킨</p><img src="./images/baby3.jpg" alt=""/><p>유아용변기 아기 배변훈련 캐릭터 아이 의자형 소변기</p><p>58,260원</p></Link>
            </Slider>
            <Link to="/">더보기</Link>
            <h2>| 식품</h2>
            <Slider {...settingsView} className="food">
              <Link to="/adpage"><p>비비고</p><img src="./images/food1.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
              <Link to="/adpage"><p>삼양</p><img src="./images/food2.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
              <Link to="/adpage"><p>오뚜기</p><img src="./images/food3.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
              <Link to="/adpage"><p>리빙패밀리</p><img src="./images/food1.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
              <Link to="/adpage"><p>연안식당</p><img src="./images/food2.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
              <Link to="/adpage"><p>온푸드</p><img src="./images/food3.jpg" alt=""/><p>신세계푸드(SHINSEGAE FOOD) 신세계푸드 밀크앤허니 호두파이(대)</p><p>14,610원</p></Link>
            </Slider>
            <Link to="/">더보기</Link>
            <h2>| 가구 및 전자제품</h2>
            <Slider {...settingsView} className="products">
              <Link to="/adpage"><p>삼성전자</p><img src="./images/products1.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
              <Link to="/adpage"><p>LG</p><img src="./images/products2.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
              <Link to="/adpage"><p>쿠쿠</p><img src="./images/products3.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
              <Link to="/adpage"><p>위니아전자</p><img src="./images/products1.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
              <Link to="/adpage"><p>홈마블</p><img src="./images/products2.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
              <Link to="/adpage"><p>부토</p><img src="./images/products3.jpg" alt=""/><p>쿠쿠(가전) 초특가 6인용 쿠쿠 고화력 풀스텐 압력밥솥 6인용 CRP-P067F</p><p>159,100원</p></Link>
            </Slider>
            <Link to="/">더보기</Link>
            <h2>| 의류</h2>
            <Slider {...settingsView} className="dress">
              <Link to="/adpage"><p>무신사</p><img src="./images/pants1.jpg" alt=""/><p>[앤드지 바이 지오지아] 앤드지 BY지오지아 20 F/W 실버폭스퍼 구스 맥스다운</p><p>128,880원</p></Link>
              <Link to="/adpage"><p>위너스코리아</p><img src="./images/pants2.jpg" alt=""/><p>[앤드지 바이 지오지아] 앤드지 BY지오지아 20 F/W 실버폭스퍼 구스 맥스다운</p><p>128,880원</p></Link>
              <Link to="/adpage"><p>유니클로</p><img src="./images/pants3.jpg" alt=""/><p>[앤드지 바이 지오지아] 앤드지 BY지오지아 20 F/W 실버폭스퍼 구스 맥스다운</p><p>128,880원</p></Link>
              <Link to="/adpage"><p>나이키</p><img src="./images/shirts1.jpg" alt=""/><p>[앤드지 바이 지오지아] 앤드지 BY지오지아 20 F/W 실버폭스퍼 구스 맥스다운</p><p>128,880원</p></Link>
              <Link to="/adpage"><p>잭시믹스</p><img src="./images/shirts2.jpg" alt=""/><p>[앤드지 바이 지오지아] 앤드지 BY지오지아 20 F/W 실버폭스퍼 구스 맥스다운</p><p>128,880원</p></Link>
              <Link to="/adpage"><p>크림치즈마켓</p><img src="./images/shirts3.jpg" alt=""/><p>[앤드지 바이 지오지아] 앤드지 BY지오지아 20 F/W 실버폭스퍼 구스 맥스다운</p><p>128,880원</p></Link>
            </Slider>
            <Link to="/">더보기</Link>
            <h2>| 스포츠 용품</h2>
            <Slider {...settingsView} className="sports">
              <Link to="/adpage"><p>아이위너</p><img src="./images/sports1.jpg" alt=""/><p>배드민턴라켓 스포츠 채 가방 세트 알루미늄 일체형</p><p>36,570원</p></Link>
              <Link to="/adpage"><p>스타</p><img src="./images/sports2.jpg" alt=""/><p>배드민턴라켓 스포츠 채 가방 세트 알루미늄 일체형</p><p>36,570원</p></Link>
              <Link to="/adpage"><p>스포빅스</p><img src="./images/sports3.jpg" alt=""/><p>배드민턴라켓 스포츠 채 가방 세트 알루미늄 일체형</p><p>36,570원</p></Link>
              <Link to="/adpage"><p>멜킨스포츠</p><img src="./images/sports1.jpg" alt=""/><p>배드민턴라켓 스포츠 채 가방 세트 알루미늄 일체형</p><p>36,570원</p></Link>
              <Link to="/adpage"><p>힐링팩토리</p><img src="./images/sports2.jpg" alt=""/><p>배드민턴라켓 스포츠 채 가방 세트 알루미늄 일체형</p><p>36,570원</p></Link>
              <Link to="/adpage"><p>잠스트</p><img src="./images/sports3.jpg" alt=""/><p>배드민턴라켓 스포츠 채 가방 세트 알루미늄 일체형</p><p>36,570원</p></Link>
            </Slider>
            <Link to="/">더보기</Link>
          </div>
          <div className="gnb">
            <p>카테고리</p>
            <Link to="/">애완용품</Link>
            <Link to="/">유아용품</Link>
            <Link to="/">식품</Link>
            <Link to="/">의류</Link>
            <Link to="/">가구, 가전제품</Link>
            <Link to="/">스포츠용품</Link>
            <div>
              <Link to="/guide">📄 이용가이드</Link>
            </div>
            <div>
              <Link to="/eventList">⏰ EVENT</Link>
            </div>
            <div>
              <Link to="/notice">📌 공지사항</Link>
            </div>
            <span className="hamburger">
              <img src="/images/gnbOpen.png" alt=""/>
            </span>           
          </div>
        </section>
    </div>
    );
}

export default Main;