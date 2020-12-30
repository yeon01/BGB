import React from 'react'

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

export default ShoppingList;