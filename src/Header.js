import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  
    return (
        <header>
          <h1><Link to="/"><img src="./images/logo.png" alt="BGB"/></Link></h1>
          <div className="money"><p> 50,000,000원</p></div>
          <div className="login"><img src="./images/login.png" alt="login"/><span>Login</span></div>
          <Link to="/Mypage">Mypage</Link>
          <div className="search">
            <form action="">
              <input type="text" name="" id="" placeholder="검색하기"/>
              <input type="submit" name="" id="" value="🍳"/>
            </form>
          </div>
        </header>
    )
};

export default Header;