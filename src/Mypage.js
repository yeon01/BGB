import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import jQuery from "jquery";
import $ from 'jquery';
import "./Mypage.css";


const Mypage = () => {

    const [ active, setActive ] = useState('1');
    const addActive = (id) => {
        setActive(id)
    };
    
    
    return(
        <div className="Mypage">
            <h2>MYPAGE</h2>
            <div className="retouch">
                <Link to="/">회원정보수정</Link>
            </div>
            <div className="myinfo">
                <div className="level">
                    <img src="/images/level1.png" alt=""/>
                </div>
                <p><span>아이디</span> : <span>Gildong2021</span></p>
                <p><span>이름</span> : <span>홍길동</span></p>
                <p><span>성별</span> : <span>남</span></p>
                <p><span>전화번호</span> : <span>010-1234-5678</span></p>
                <p><span>주소</span> : <span>서울시 00구 00동</span></p>
            </div>
            <div className="myBtn">
                <Link to="/coupon"><img src="/images/heart_icon.png" alt=""/><span>관심상품</span></Link>
                <Link to="/coupon"><img src="/images/coupon_icon.png" alt=""/><span>쿠폰함</span></Link>
            </div>

            <h2>MANAGEMENT</h2>
            <div className="table">
                <div onClick={() => addActive('1')} className={active === '1' && `active`}>주문내역
                    <ShoppingList />
                </div>
                <div onClick={() => addActive('2')} className={active === '2' && `active`}>카드관리
                    <Card />
                </div>
                <div onClick={() => addActive('3')} className={active === '3' && `active`}>환급하기
                    <Cashback />
                </div>
            </div>
        </div>
    );
};

export default Mypage;



const Cashback = () => {
    const Confirm = () => {

        var result = confirm("환급 하시겠습니까?");
        if(result){
            alert("환급신청이 완료되었습니다.");
        }else{
            alert("환급신청이 취소되었습니다.")
        }
    };
    return(
        <div className="cashback">
                <form action="">
                    <p>
                        <h3>회원님 포인트</h3>
                        " <span>50,000</span><span>BP</span> "
                        <hr/>
                    </p>
                    <p>
                        <h3>환급 받을 포인트</h3>
                        <input type="text" required="true" name="" id="" placeholder="BGB POINT"/>
                        <span>BP</span>
                        <span>※ 천원단위씩 10000BP부터 환급 가능</span>
                    </p>
                    <p>
                        <h3>예금주</h3>
                        <input type="text" required="true" name="" id="" placeholder="예금주명"/>
                        <span>※ 예금주와 은행명이 다를 시 환급이 불가능 합니다.</span>
                    </p>
                    <p>
                        <h3>은행명</h3>
                        <select name="account_bank_id">
                            <option value="">은행명을 선택하세요</option>
                            <option value="35">경남은행</option>
                            <option value="29">광주은행</option>
                            <option value="7">국민은행</option>
                            <option value="5">기업은행</option>
                            <option value="15">농협중앙회</option>
                            <option value="17">농협회원조합</option>
                            <option value="25">대구은행</option>
                            <option value="47">도이치은행</option>
                            <option value="27">부산은행</option>
                            <option value="3">산업은행</option>
                            <option value="41">상호저축은행</option>
                            <option value="37">새마을금고</option>
                            <option value="11">수협중앙회</option>
                            <option value="36">신한금융투자</option>
                            <option value="60">신한은행</option>
                            <option value="39">신협중앙회</option>
                            <option value="9">외환은행</option>
                            <option value="19">우리은행</option>
                            <option value="56">우체국</option>
                            <option value="33">전북은행</option>
                            <option value="31">제주은행</option>
                            <option value="68">카카오뱅크</option>
                            <option value="67">케이뱅크</option>
                            <option value="59">하나은행</option>
                            <option value="23">한국씨티은행</option>
                            <option value="45">HSBC은행</option>
                            <option value="21">SC제일은행</option>
                        </select>
                    </p>
                    <p>
                        <h3>계좌번호</h3>
                        <input type="text" required="true" name="" id="" placeholder=" - 없이 숫자로만 작성해주세요"/>
                    </p>
                    <div className="cashbackBtn">
                        <button type="submit" onClick={Confirm} >환급신청</button>
                    </div>
                </form>
            </div>
    );
};

const ShoppingList = () => {
    return(
        <div className="shoppingList">
            <ul>
                <li>주문날짜</li>
                <li>제품명</li>
                <li>갯수</li>
                <li>가격</li>
            </ul>
            <ul>
                <li>
                    <ul>
                        <li><span>2020.12.22</span></li>
                        <li><img src="/images/animal2.jpg" alt=""/><span><Link to="/shopList">고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</Link></span></li>
                        <li><span>1</span>개</li>
                        <li><span>46,390</span>원</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><span>2020.12.22</span></li>
                        <li><img src="/images/animal2.jpg" alt=""/><span><Link to="/shopList">고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</Link></span></li>
                        <li><span>1</span>개</li>
                        <li><span>46,390</span>원</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><span>2020.12.22</span></li>
                        <li><img src="/images/animal2.jpg" alt=""/><span><Link to="/shopList">고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</Link></span></li>
                        <li><span>1</span>개</li>
                        <li><span>46,390</span>원</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><span>2020.12.22</span></li>
                        <li><img src="/images/animal2.jpg" alt=""/><span><Link to="/shopList">고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</Link></span></li>
                        <li><span>1</span>개</li>
                        <li><span>46,390</span>원</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><span>2020.12.22</span></li>
                        <li><img src="/images/animal2.jpg" alt=""/><span><Link to="/shopList">고양이하우스 쉼터 애완묘 애묘 냥이 캣 실내 반려 동물</Link></span></li>
                        <li><span>1</span>개</li>
                        <li><span>46,390</span>원</li>
                    </ul>
                </li>
            </ul>
            <Link to="/">더보기</Link>
        </div>
    );
};

const Card = () => {
    return(
        <div className="card">
            <h3>카드등록 및 삭제</h3>
            <ul>
                <li><p>➕</p></li>
                <li><p>➕</p></li>
                <li><p>➕</p></li>
                <li><p>➕</p></li>
                <li><p>➕</p></li>
                <li><p>➕</p></li>
            </ul>
        </div>
    );
};