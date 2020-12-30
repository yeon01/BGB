import React from 'react'

const CashBack = () => {
    const Confirm = () => {

        var result = confirm("환급 하시겠습니까?");
        if(result){
            alert("환급신청이 완료되었습니다.");
        }else{
            alert("환급신청이 취소되었습니다.")
        }
    };
    return(
        <div className="cashback">
                <form action="">
                    <p>
                        <h3>회원님 포인트</h3>
                        " <span>50,000</span><span>BP</span> "
                        <hr/>
                    </p>
                    <p>
                        <h3>환급 받을 포인트</h3>
                        <input type="text" required="true" name="" id="" placeholder="BGB POINT"/>
                        <span>BP</span>
                        <span>※ 천원단위씩 10000BP부터 환급 가능</span>
                    </p>
                    <p>
                        <h3>예금주</h3>
                        <input type="text" required="true" name="" id="" placeholder="예금주명"/>
                        <span>※ 예금주와 은행명이 다를 시 환급이 불가능 합니다.</span>
                    </p>
                    <p>
                        <h3>은행명</h3>
                        <select name="account_bank_id">
                            <option value="">은행명을 선택하세요</option>
                            <option value="35">경남은행</option>
                            <option value="29">광주은행</option>
                            <option value="7">국민은행</option>
                            <option value="5">기업은행</option>
                            <option value="15">농협중앙회</option>
                            <option value="17">농협회원조합</option>
                            <option value="25">대구은행</option>
                            <option value="47">도이치은행</option>
                            <option value="27">부산은행</option>
                            <option value="3">산업은행</option>
                            <option value="41">상호저축은행</option>
                            <option value="37">새마을금고</option>
                            <option value="11">수협중앙회</option>
                            <option value="36">신한금융투자</option>
                            <option value="60">신한은행</option>
                            <option value="39">신협중앙회</option>
                            <option value="9">외환은행</option>
                            <option value="19">우리은행</option>
                            <option value="56">우체국</option>
                            <option value="33">전북은행</option>
                            <option value="31">제주은행</option>
                            <option value="68">카카오뱅크</option>
                            <option value="67">케이뱅크</option>
                            <option value="59">하나은행</option>
                            <option value="23">한국씨티은행</option>
                            <option value="45">HSBC은행</option>
                            <option value="21">SC제일은행</option>
                        </select>
                    </p>
                    <p>
                        <h3>계좌번호</h3>
                        <input type="text" required="true" name="" id="" placeholder=" - 없이 숫자로만 작성해주세요"/>
                    </p>
                    <div className="cashbackBtn">
                        <button type="submit" onClick={Confirm} >환급신청</button>
                    </div>
                </form>
            </div>
    );
};

export default CashBack;