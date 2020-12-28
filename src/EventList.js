import React from 'react';
import {Link} from 'react-router-dom';
import "./EventList.css";

const EventList = () => {
    return (
        <div className='EventList'>
            <h2>EVENT</h2>
            <ul>
                <li>
                    <Link to="/event">2020.12.01 ~ 2020.12.31 상수네 과일가게 딸기 20% 할인</Link>
                </li>
                <li>
                    <Link to="/event">2021.01.01 ~ 2021.01.15 상수네 옷가게 상의 20% 할인</Link>
                </li>
                <li>
                    <Link to="/event">2020.12.01 ~ 2020.12.31 상수네 전자마켓 전자레인지 10% 할인</Link>
                </li>
                <li>
                    <Link to="/event">2020.12.01 ~ 2020.12.31 상수네 가구마트 옷장 최대 20% 할인</Link>
                </li>
                <li>
                    <Link to="/event">2020.12.01 ~ 2020.12.31 상수네 펫몰 고양이, 강아지 사료 30% 할인</Link>
                </li>
                <li>
                    <Link to="/event">2020.12.01 ~ 2020.12.31 상수네 스포츠아울렛 런닝화 15% 할인</Link>
                </li>
                <li>
                    <Link to="/event">2020.12.01 ~ 2020.12.31 상수네 악세서리숍 은목걸이 25% 할인</Link>
                </li>
            </ul>
        </div>
    )
}

export default EventList;
