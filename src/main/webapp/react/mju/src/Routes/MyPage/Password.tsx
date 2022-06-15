import React, { useRef,useState } from "react";
import styled from 'styled-components';

const PasswordWrap = styled.div`
    .form {margin: 50px auto 0; padding: 50px; width: 600px; color: #fff; border-radius: 10px; background: #000;}
    .form-title {padding-left: 10px; border-left: 3px solid #fff;}
    .form-section {margin-top: 20px; }
    .form-label {display: block;}
    .form-content {display: block; margin-top: 10px; padding: 5px; width: 100%; font-size: 18px; border: none; border-radius: 5px; background: #fff;}
    .form-button {display: block; margin: 50px auto 0; padding: 10px 50px; border-radius: 25px; background: #fff;}
`;

function Password(){
    const [password, setPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>('')
    const newPass = (e: any) => {
        const passwordCurrent = e.target.value;
        setPassword(passwordCurrent)
    }

    const compPass = (e: any) => {
        const passwordConfirmCurrent = e.target.value;
        setPasswordConfirm(passwordConfirmCurrent)
        if (password !== passwordConfirmCurrent) {
            alert('비밀번호가 서로 다릅니다.')
        }
    }
    return (
        <PasswordWrap>
            <div className="form">
                <h2 className="form-title">비밀번호 변경</h2>
                <form action="">
                    <div className="form-section">
                        <label className="form-label" htmlFor="">새 비밀번호</label>
                        <input className="form-content" type="text" onBlur={newPass} placeholder="새 비밀번호"/>
                        <input className="form-content" type="text" onBlur={compPass} placeholder="새 비밀번호 확인" />
                    </div>
                    <div className="form-section">
                        <label className="form-label" htmlFor="">현재 비밀번호</label>
                        <input className="form-content" type="text" placeholder="현재 비밀번호" />
                    </div>
                    <button className="form-button">비밀번호 변경하기</button>
                </form> 
            </div>
        </PasswordWrap>
    );
}
export default Password;