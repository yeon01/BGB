import React, {useEffect, useState} from 'react';
import { checkPasswordPattern } from './Validator.js';
import { checkPasswordPatternSpan } from './Validator.js';
import Api from './Api';
import jQuery from "jquery";
import $ from 'jquery';
window.$ = window.jQuery = jQuery;
import './Signup.css';



const Signup = () =>{

    const [ active, setActive ] = useState('1');
    const addActive = (id) => {
        setActive(id)
    };

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


const Users = () => {


    const [name,setName] = useState('');
    const [gender,setGender] = useState('');
    const [nick,setNick] = useState('');
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [term,setTerm] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         * 2. 약관 동의를 확인한다.
         */
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        if(checkPasswordPattern(password)) {
            console.log({
                name,
                gender,
                nick,
                id,
                password,
                passwordCheck,
                term
            });
            // 최종적으로 등록완료
            // axios..... 액션이 일어나는곳
        }
        
    };


    // Coustom Hook 이전
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeGender = (e) => {
        setGender(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
        checkPasswordPatternSpan(password);
    };
    const onChangePasswordChk = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        //체크박스 초기화
        setTermError(false);
        setTerm(e.target.checked);
    }

    return(
        <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="USERS_NAME">이름</label><br/>
                    <input name="USERS_NAME" placeholder="이름을 입력하세요." value={name} required onChange={onChangeName} />
                </div>
                <div>
                    <label htmlFor="USERS_GENDER">성별</label><br/>
                    <div className="gender">
                        <label htmlFor="USERS_GENDERM">
                            <input type="radio" id="USERS_GENDERM" name="USERS_GENDER" value="male" onChange={onChangeGender} /> 남자
                        </label>
                        <label htmlFor="USERS_GENDERW">
                            <input type="radio" id="USERS_GENDERW" name="USERS_GENDER" value="female" onChange={onChangeGender} /> 여자 
                        </label>
                    </div>
                </div>
                <div>
                    <label htmlFor="USERS_NICKNAME">닉네임</label><br/>
                    <input name="USERS_NICKNAME" placeholder="특수문자를 제외한 닉네임을 입력하세요." value={nick} required onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="USERS_ID">아이디</label><br/>
                    <input name="USERS_ID" placeholder="아이디를 입력하세요." value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="USERS_PASWARD">비밀번호</label><br/>
                    <input name="USERS_PASWARD" type="password" placeholder="비밀번호를 입력하세요." value={password} required  onChange={onChangePassword} />
                    <span id="password"></span>
                </div>
                <div>
                    <label htmlFor="USERS_PASWARD_CHECK">비밀번호체크</label><br/>
                    <input className="pw" name="USERS_PASWARD_CHECK" type="password" placeholder="비밀번호 한번 더 입력하세요." value={passwordCheck} required onChange={onChangePasswordChk} />
                    {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <Api />
                <div>
                    <input type="checkbox" name="user_term" value={term} onChange={onChangeTerm} />동의 합니까?
                    {termError && <div style={{color : 'red'}}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={{marginTop:10}}>
                    <button Type="submit" >가입하기</button>
                </div>
            </form>
    )
}


const Business = () => {

    const [name,setName] = useState('');
    const [gender,setGender] = useState('');
    const [nick,setNick] = useState('');
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [term,setTerm] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         * 2. 약관 동의를 확인한다.
         */
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        if(checkPasswordPattern(password)) {
            console.log({
                name,
                gender,
                nick,
                id,
                password,
                passwordCheck,
                term
            });
            // 최종적으로 등록완료
            // axios..... 액션이 일어나는곳
        }
        
    };


    // Coustom Hook 이전
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeGender = (e) => {
        setGender(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
        checkPasswordPatternSpan(password);
    };
    const onChangePasswordChk = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        //체크박스 초기화
        setTermError(false);
        setTerm(e.target.checked);
    }

    return(
        <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="BUSINESS_NAME">이름</label><br/>
                    <input name="BUSINESS_NAME" placeholder="이름을 입력하세요." value={name} required onChange={onChangeName} />
                </div>
                <div>
                    <label htmlFor="BUSINESS_GENDER">성별</label><br/>
                    <div className="gender">
                        <label htmlFor="BUSINESS_GENDERM">
                            <input type="radio" id="BUSINESS_GENDERM" name="BUSINESS_GENDER" value="male" onChange={onChangeGender} /> 남자
                        </label>
                        <label htmlFor="BUSINESS_GENDERW">
                            <input type="radio" id="BUSINESS_GENDERW" name="BUSINESS_GENDER" value="female" onChange={onChangeGender} /> 여자 
                        </label>
                    </div>
                </div>
                <div>
                    <label htmlFor="BUSINESS_NICKNAME">닉네임</label><br/>
                    <input name="BUSINESS_NICKNAME" placeholder="특수문자를 제외한 닉네임을 입력하세요." value={nick} required onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="BUSINESS_ID">아이디</label><br/>
                    <input name="BUSINESS_ID" placeholder="아이디를 입력하세요." value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="BUSINESS_PASWARD">비밀번호</label><br/>
                    <input name="BUSINESS_PASWARD" type="password" placeholder="비밀번호를 입력하세요." value={password} required  onChange={onChangePassword} />
                    <span id="password"></span>
                </div>
                <div>
                    <label htmlFor="BUSINESS_PASWARD_CHECK">비밀번호체크</label><br/>
                    <input className="pw" name="BUSINESS_PASWARD_CHECK" type="password" placeholder="비밀번호 한번 더 입력하세요." value={passwordCheck} required onChange={onChangePasswordChk} />
                    {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <Api />
                <div>
                    <input type="checkbox" name="user_term" value={term} onChange={onChangeTerm} />동의 합니까?
                    {termError && <div style={{color : 'red'}}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={{marginTop:10}}>
                    <button Type="submit" >가입하기</button>
                </div>
            </form>
    )
}