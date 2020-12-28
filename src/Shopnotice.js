import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import jQuery from "jquery";
import $ from 'jquery';
window.$ = window.jQuery = jQuery;
import './Notice.css';

const Shopnotice = () => {

    const [ active, setActive ] = useState('1');
    const addActive = (id) => {
        setActive(id)
    };

    return (
        <div className="Notice">
            <div onClick={() => addActive('1')} className={active === '1' && `active`}>공지사항
                <NoticeList />
            </div>
            <div onClick={() => addActive('2')} className={active === '2' && `active`}>Q&A
                <Qna />
            </div>
            <div onClick={() => addActive('3')} className={active === '3' && `active`}>FAQ
                <Faq />
            </div>
        </div>
    )
}

export default Shopnotice;


const NoticeList = () => {
    return(
        <div className="NoticeList">
            <ul>
                <li>
                    <ul>
                        <li>NO.</li>
                        <li>제목</li>
                        <li>작성자</li>
                        <li>등록일</li>
                        <li>조회수</li>
                    </ul>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>08.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>07.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>06.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>05.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>04.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>03.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>02.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>01.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
const Qna = () => {
    return(
        <div className="Qna">
            <ul>
                <li>
                    <ul>
                        <li>NO.</li>
                        <li>제목</li>
                        <li>작성자</li>
                        <li>등록일</li>
                        <li>조회수</li>
                    </ul>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>08.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>07.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>06.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>05.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>04.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>03.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>02.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <ul>
                            <li>01.</li>
                            <li>안녕하세요, 홍길동입니다.</li>
                            <li>홍길동</li>
                            <li>20.12.23</li>
                            <li>1</li>
                        </ul>
                    </Link>
                </li>
            </ul>
            <div className="uploadBtn">
                <button>글쓰기</button>
            </div>
        </div>
    );
};
const Faq = () => {

    $('.q').on('click', function(){
        var faq = 0;
        if (faq === 0){
            $(this).siblings('div').slideDown();
            $(this).parents('li').siblings('li').children('div.a').slideUp();
            faq++;
        }else{
            $(this).siblings('div').slideUp();
            faq--;
        }
        console.log(faq);
        return false;
    });

    return(
        <div className="Faq">
            <ul>
                <li>
                    <div className="q"><span className="faq">Q .</span><span>BGB약자의 뜻이 무슨 뜻 인가요?</span></div>
                    <div className="a"><span className="faq">A .</span><span>Behold + Get + Buy가 합쳐진 것이며, 광고를 보고 포인트를 얻어 환급 및 상품 구매가 가능하다는 뜻입니다.</span></div>
                </li>
                <li>
                    <div className="q"><span className="faq">Q .</span><span>BGB약자의 뜻이 무슨 뜻 인가요?</span></div>
                    <div className="a"><span className="faq">A .</span><span>Behold + Get + Buy가 합쳐진 것이며, 광고를 보고 포인트를 얻어 환급 및 상품 구매가 가능하다는 뜻입니다.</span></div>
                </li>
                <li>
                    <div className="q"><span className="faq">Q .</span><span>BGB약자의 뜻이 무슨 뜻 인가요?</span></div>
                    <div className="a"><span className="faq">A .</span><span>Behold + Get + Buy가 합쳐진 것이며, 광고를 보고 포인트를 얻어 환급 및 상품 구매가 가능하다는 뜻입니다.</span></div>
                </li>
                <li>
                    <div className="q"><span className="faq">Q .</span><span>BGB약자의 뜻이 무슨 뜻 인가요?</span></div>
                    <div className="a"><span className="faq">A .</span><span>Behold + Get + Buy가 합쳐진 것이며, 광고를 보고 포인트를 얻어 환급 및 상품 구매가 가능하다는 뜻입니다.</span></div>
                </li>
                <li>
                    <div className="q"><span className="faq">Q .</span><span>BGB약자의 뜻이 무슨 뜻 인가요?</span></div>
                    <div className="a"><span className="faq">A .</span><span>Behold + Get + Buy가 합쳐진 것이며, 광고를 보고 포인트를 얻어 환급 및 상품 구매가 가능하다는 뜻입니다.</span></div>
                </li>
                <li>
                    <div className="q"><span className="faq">Q .</span><span>BGB약자의 뜻이 무슨 뜻 인가요?</span></div>
                    <div className="a"><span className="faq">A .</span><span>Behold + Get + Buy가 합쳐진 것이며, 광고를 보고 포인트를 얻어 환급 및 상품 구매가 가능하다는 뜻입니다.</span></div>
                </li>
                <li>
                    <div className="q"><span className="faq">Q .</span><span>BGB약자의 뜻이 무슨 뜻 인가요?</span></div>
                    <div className="a"><span className="faq">A .</span><span>Behold + Get + Buy가 합쳐진 것이며, 광고를 보고 포인트를 얻어 환급 및 상품 구매가 가능하다는 뜻입니다.</span></div>
                </li>
            </ul>
        </div>
    );
};


const qnaWrite = () => {
    return(
        <div className="qnaWrite">
            
        </div>
    );
};