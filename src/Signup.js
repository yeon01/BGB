import React, {useEffect, useState} from 'react';
import Users from './Users';
import Business from './Business';
import './Signup.css';
import axios from 'axios';



const Signup = () =>{

    const [ active, setActive ] = useState('1');
    const addActive = (id) => {
        setActive(id)
    };

    axios.post('http://192.168.0.24:8080', {
        id: "root",
        password: "BGB"
    })

    

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


