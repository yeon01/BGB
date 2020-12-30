import React, {useEffect, useState} from 'react';
import Users from './Users';
import Business from './Business';
import './Signup.css';
import { getTest, lalala } from './api/user.api';



const Signup = () =>{

    const [ active, setActive ] = useState('1');
    const addActive = (id) => setActive(id);

    // 첫 로딩시 getTest 함수 실행
    useEffect(() => {
        getTest("root", "BGB")
            .then(res => {
                console.log('성공');
                console.log(res);
            })
            .catch(error => {
                console.log("실패");
                console.log(error);
            });
    }, [])
    
    return (
        <>
        <div className="Signup">
            <h2>Sign Up</h2>
            <span onClick={() => addActive('2')} className={active === '2' && `active`}>비지니스 회원</span>
            <span onClick={() => addActive('1')} className={active === '1' && `active`}>일반 회원</span>
            {active === '1' ? <Users/> : <Business/>}
        </div>
        </>
    );
};

export default Signup;


