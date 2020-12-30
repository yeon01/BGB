import React, {useState} from 'react';
import axios from 'axios';
import { checkPasswordPattern } from './Validator.js';
import { checkPasswordPatternSpan } from './Validator.js';
import ClientAddress from './ClientAddress';

const Business = (props) => {

    // axios
    axios.post('/client', {
        clientName,
        clientGender,
        clientId,
        clientPassword,
        clientAddressNumber,
        clientAddress1,
        clientAddress2
    })
        .then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
        console.log(error);
    });

    const [clientName,setClientName] = useState('');
    const [clientGender,setClientGender] = useState('');
    const [clientId,setClientId] = useState('');
    const [clientPassword,setClientPassword] = useState('');
    const [clientPasswordCheck,setClientPasswordCheck] = useState('');
    const [clientTerm,setClientTerm] = useState(false);
    const [clientPasswordError,setClientPasswordError] = useState(false);
    const [clientTermError,setClientTermError] = useState(false);
    const [clientAddressNumber,setClientAddressNumber] = useState("");
    const [clientAddress1,setClientAddress1] = useState("");
    const [clientAddress2,setClientAddress2] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         * 2. 약관 동의를 확인한다.
         */
        if(clientPassword !== clientPasswordCheck){
            return setClientPasswordError(true);
        }
        if(!clientTerm){
            return setClientTermError(true);
        }
        if(checkPasswordPattern(clientPassword)) {
            console.log({
                clientName,
                clientGender,
                clientId,
                clientPassword,
                clientPasswordCheck,
                clientTerm,
                clientAddressNumber,
                clientAddress1,
                clientAddress2
            });
            // 최종적으로 등록완료
            // axios..... 액션이 일어나는곳
        }
        
    };


    // Coustom Hook 이전
    const onChangeName = (e) => {
        setClientName(e.target.value);
    };
    const onChangeGender = (e) => {
        setClientGender(e.target.value);
    };
    const onChangeId = (e) => {
        setClientId(e.target.value);
    };
    const onChangePassword = (e) => {
        setClientPassword(e.target.value);
        checkPasswordPatternSpan(clientPassword);
    };
    const onChangePasswordChk = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setClientPasswordError(e.target.value !== clientPassword);
        setClientPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        //체크박스 초기화
        setClientTermError(false);
        setClientTerm(e.target.checked);
    }

    

    return(
        <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="clientName">이름</label><br/>
                    <input name="clientName" placeholder="이름을 입력하세요." value={clientName} required onChange={onChangeName} />
                </div>
                <div>
                    <label htmlFor="clientGender">성별</label><br/>
                    <div className="gender">
                        <label htmlFor="clientGenderM">
                            <input type="radio" id="clientGenderM" name="clientGender" value="male" onChange={onChangeGender} /> 남자
                        </label>
                        <label htmlFor="clientGenderW">
                            <input type="radio" id="clientGenderW" name="clientGender" value="female" onChange={onChangeGender} /> 여자 
                        </label>
                    </div>
                </div>
                <div>
                    <label htmlFor="clientId">아이디</label><br/>
                    <input name="clientId" placeholder="아이디를 입력하세요." value={clientId} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="clientPassword">비밀번호</label><br/>
                    <input name="clientPassword" type="password" placeholder="비밀번호를 입력하세요." value={clientPassword} required  onChange={onChangePassword} />
                    <span id="password"></span>
                </div>
                <div>
                    <label htmlFor="clientPasswordCheck">비밀번호체크</label><br/>
                    <input className="pw" name="clientPasswordCheck" type="password" placeholder="비밀번호 한번 더 입력하세요." value={clientPasswordCheck} required onChange={onChangePasswordChk} />
                    {clientPasswordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <ClientAddress clientAddressNumber={clientAddressNumber} setClientAddressNumber={setClientAddressNumber} setClientAddress1={setClientAddress1} setClientAddress2={setClientAddress2} />
                <div>
                    <input type="checkbox" name="user_term" value={clientTerm} onChange={onChangeTerm} />동의 합니까?
                    {clientTermError && <div style={{color : 'red'}}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={{marginTop:10}}>
                    <button Type="submit" >가입하기</button>
                </div>
            </form>
    )
}

export default Business