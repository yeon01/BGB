import React from 'react';
import './Coupon.css';

const Coupon = () => {
    return (
        <div className="Coupon">
            <h2>BGB Coupon</h2>
            <ul>
                <li>
                    <div><img src="/images/coupon.png" alt=""/><span>BGB COUPON</span><span>10% 할인쿠폰</span><span>유효기간 ~ 2021.01.31</span></div>
                </li>
                <li>
                    <div><img src="/images/coupon.png" alt=""/><span>BGB COUPON</span><span>20% 할인쿠폰</span><span>유효기간 ~ 2021.01.31</span></div>
                </li>
                <li>
                    <div><img src="/images/coupon.png" alt=""/><span>BGB COUPON</span><span>배송비 무료쿠폰</span><span>유효기간 ~ 2021.01.31</span></div>
                </li>
                <li>
                    <div><img src="/images/coupon.png" alt=""/><span>BGB COUPON</span><span>10% 할인쿠폰</span><span>유효기간 ~ 2021.01.31</span></div>
                </li>
                <li>
                    <div><img src="/images/coupon.png" alt=""/><span>BGB COUPON</span><span>10% 할인쿠폰</span><span>유효기간 ~ 2021.01.31</span></div>
                </li>
            </ul>
        </div>
    );
};

export default Coupon;
