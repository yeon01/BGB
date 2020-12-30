import React, {useEffect} from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from "./Main";
import Guide from "./Guide";
import Adpage from "./Adpage";
import ShopList from "./ShopList";
import Mypage from "./Mypage";
import Event from "./Event";
import EventList from "./EventList";
import Notice from "./Notice";
import Coupon from "./Coupon";
import Signup from "./Signup";
import Shopmain from "./Shopmain";
import Shopevent from "./Shopevent";
import ShopEventList from "./ShopEventList";
import Shopnotice from "./Shopnotice";
import ScrollTop from "./ScrollTop";
import Header from './Header';
import Footer from './Footer';
import './App.css';
import axios from 'axios';


function App() {

  const USER_API_BASE_URL = "http://192.168.0.24:8080";

  // useEffect(() => {

  //   axios.get(`${USER_API_BASE_URL}`)
  //         .then(res => console.log(res.data))
  //         .catch(error => console.log(error))


  // }, []) 
  
  
  return (
    <>
        <Router>
          <ScrollTop>
          <Header />
            <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/guide" exact component={Guide}/>
              <Route path="/adpage" exact component={Adpage}/>
              <Route path="/shopList" exact component={ShopList}/>
              <Route path="/mypage" exact component={Mypage}/>
              <Route path="/event" exact component={Event}/>
              <Route path="/eventList" exact component={EventList}/>
              <Route path="/notice" exact component={Notice}/>
              <Route path="/coupon" exact component={Coupon}/>
              <Route path="/signup" exact component={Signup}/>
              <Route path="/shopmain" exact component={Shopmain}/>
              <Route path="/shopEvent" exact component={Shopevent}/>
              <Route path="/shopEventList" exact component={ShopEventList}/>
              <Route path="/shopList" exact component={ShopList}/>
              <Route path="/shopNotice" exact component={Shopnotice}/>
            </Switch>
          <Footer />
          </ScrollTop>
        </Router>
    </>  
  );
}

export default App;
