import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return(
        <footer>
          <img src="./images/logo.png" alt="BGB"/>
            <p>
            <strong>회사정보</strong><br />
            상호 : 시냇물이엔티<br/>
            대표 : 김병선<br/>
            주소 : 서울 마포구<br/>
            개인정보관리 책임자 : 홍길동 (gildong@email.com)<br/>
            사업자 등록번호 : 000-00-00000<br/>
            </p>
        </footer>
    );
};

export default Footer;