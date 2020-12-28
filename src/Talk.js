import React from 'react'

const Talk = () => {
    return (
        <div className="Talk">
            <img src="images/talk.png" alt=""/>
            <div>
                <h2>BGB Talk</h2>
                <span>http://www.begeby.com</span>
                <div className="talk_content">
                    <ul>
                        <li>B Point가 무엇인가요?
                            <p>
                                B Point란 BGB Point의 줄임말로, 현재 홈페이지 또는 모바일 앱에서 <br/>
                                광고영상에 임의적으로 나오는 몬스터들을 잡아 획득하는 포인트를 말합니다.<br/>
                                <br/>
                                B Point는 매월마다 총 금액이 갱신되며,<br/>
                                선착순으로 화면에 나오는 몬스터를 잡아 포인트를 가져가는 시스템입니다.
                            </p>
                        </li>
                        <li>B Point 사용방법
                            <p>
                                홈페이지 혹은 모바일 앱에서 회원가입 후 정보 기입란에 필수정보 상세 기입 한 다음,<br/>
                                환급을 신청하면 심의를 본 후 계좌로 입금되어 현금으로 사용 가능합니다.<br/>
                                <br/>
                                -환급 할 수 있는 날은 따로 정해져 있지 않으며, 환급 신청이후 빠른 시일내에 환급 해 드립니다.<br/>
                                <br/>
                                -환급 이외에도 포인트로 물품도 구매 할 수 있습니다.
                            </p>
                        </li>
                        <li>B Point 환급시 유의사항
                            <p>
                                정보 기입란에 정확한 계좌번호와 은행명을 작성해야하며,<br/>
                                예금주명과 은행명이 동일해야 환급이 가능합니다.<br/>
                                <br/>
                                -B Point를 부당한 방법으로 취득시 포인트 전액 회수 및 계정 영구탈퇴,<br/>
                                회원 재가입 불가능 등 불이익이 발생 될 수 있으니, 유의하시기 바랍니다.
                            </p>
                        </li>
                        <li>B Point 환급방법 안내
                            <p>
                                회원가입 > 로그인 후 마이페이지에 들어가서 중간 항목에<br/>
                                환급하기 버튼을 입력하면 신청이 완료되며, 일괄적으로 계좌에 입금됩니다.
                            </p>
                        </li>
                        <li>BGB 레벨에 따른 혜택
                            <p>
                                레벨에 따라 전품목
                                [Lv.1 : 2%] > [Lv.2 : 4%] > [Lv.3 : 6%] > [Lv.4 : 8%] > [Lv.5: 10%] 할인이 적용됩니다.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Talk
