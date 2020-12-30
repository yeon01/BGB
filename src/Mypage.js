import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import CashBack from './components/myPage/CashBack'
import ShoppingList from './components/myPage/ShoppingList'
import Card from './components/myPage/Card'
import "./styles/Mypage.css";


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
                    <CashBack />
                </div>
            </div>
        </div>
    );
};

export default Mypage;







