import React, {useState} from 'react';
import axios from 'axios';
import { checkPasswordPattern } from './Validator.js';
import { checkPasswordPatternSpan } from './Validator.js';
import UserAddress from './UserAddress';

const Users = (props) => {
    axios.post('users', {
            usersName,
            usersGender,
            usersId,
            usersPassword,
            usersAddressNumber,
            usersAddress1,
            usersAddress2
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))

    // axios
    // axios.post('/user', {
    //     usersName,
    //     usersGender,
    //     usersId,
    //     usersPassword,
    //     usersAddressNumber,
    //     usersAddress1,
    //     usersAddress2
    // })
    //     .then(function (response) {
    //     console.log(response);
    // })
    //     .catch(function (error) {
    //     console.log(error);
    // });


    const [usersName,setUsersName] = useState('');
    const [usersGender,setUsersGender] = useState('');
    const [usersId,setUsersId] = useState('');
    const [usersPassword,setUsersPassword] = useState('');
    const [usersPasswordCheck,setUsersPasswordCheck] = useState('');
    const [usersTerm,setUsersTerm] = useState(false);
    const [usersPasswordError,setUsersPasswordError] = useState(false);
    const [usersTermError,setUsersTermError] = useState(false);
    const [usersAddressNumber,setUsersAddressNumber] = useState('');
    const [usersAddress1,setUsersAddress1] = useState('');
    const [usersAddress2,setUsersAddress2] = useState('');

    


    const onSubmit = (e) => {
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         * 2. 약관 동의를 확인한다.
         */
        if(usersPassword !== usersPasswordCheck){
            return setUsersPasswordError(true);
        }
        if(!usersTerm){
            return setUsersTermError(true);
        }
        if(checkPasswordPattern(usersPassword)) {
            console.log({
                usersName,
                usersGender,
                usersId,
                usersPassword,
                usersPasswordCheck,
                usersTerm,
                usersAddressNumber,
                usersAddress1,
                usersAddress2
            });
            // 최종적으로 등록완료
            // axios..... 액션이 일어나는곳
        }
        
    };


    // Coustom Hook 이전
    const onChangeName = (e) => {
        setUsersName(e.target.value);
    };
    const onChangeGender = (e) => {
        setUsersGender(e.target.value);
    };
    const onChangeId = (e) => {
        setUsersId(e.target.value);
    };
    const onChangePassword = (e) => {
        setUsersPassword(e.target.value);
        checkPasswordPatternSpan(usersPassword);
    };
    const onChangePasswordChk = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setUsersPasswordError(e.target.value !== usersPassword);
        setUsersPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        //체크박스 초기화
        setUsersTermError(false);
        setUsersTerm(e.target.checked);
    }

    return(
        <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="usersName">이름</label><br/>
                    <input name="usersName" placeholder="이름을 입력하세요." value={usersName} required onChange={onChangeName} />
                </div>
                <div>
                    <label htmlFor="usersGender">성별</label><br/>
                    <div className="gender">
                        <label htmlFor="usersGenderM">
                            <input type="radio" id="usersGenderM" name="usersGender" value="male" onChange={onChangeGender} /> 남자
                        </label>
                        <label htmlFor="usersGenderW">
                            <input type="radio" id="usersGenderW" name="usersGender" value="female" onChange={onChangeGender} /> 여자 
                        </label>
                    </div>
                </div>
                <div>
                    <label htmlFor="usersId">아이디</label><br/>
                    <input name="usersId" placeholder="아이디를 입력하세요." value={usersId} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="usersPassword">비밀번호</label><br/>
                    <input name="usersPassword" type="password" placeholder="비밀번호를 입력하세요." value={usersPassword} required  onChange={onChangePassword} />
                    <span id="password"></span>
                </div>
                <div>
                    <label htmlFor="usersPasswordCheck">비밀번호체크</label><br/>
                    <input className="pw" name="usersPasswordCheck" type="password" placeholder="비밀번호 한번 더 입력하세요." value={usersPasswordCheck} required onChange={onChangePasswordChk} />
                    {usersPasswordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <UserAddress usersAddressNumber={usersAddressNumber} setusersAddressNumber={setUsersAddressNumber} setUsersAddress1={setUsersAddress1} setUsersAddress2={setUsersAddress2} />
                <div>
                    <input type="checkbox" name="userTerm" value={usersTerm} onChange={onChangeTerm} />동의 합니까?
                    {usersTermError && <div style={{color : 'red'}}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={{marginTop:10}}>
                    <button Type="submit" >가입하기</button>
                </div>
            </form>
    )
}


export default Users