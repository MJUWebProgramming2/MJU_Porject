import styled from 'styled-components';

const EmailWrap = styled.div`
    .form {margin: 50px auto 0; padding: 50px; width: 600px; color: #fff; border-radius: 10px; background: #000;}
    .form-title {padding-left: 10px; border-left: 3px solid #fff;}
    .form-section {margin-top: 20px; }
    .form-label {display: block;}
    .form-content {display: block; margin-top: 10px; padding: 5px; width: 100%; font-size: 18px; border: none; border-radius: 5px; background: #fff;}
    .form-button {display: block; margin: 50px auto 0; padding: 10px 50px; border-radius: 25px; background: #fff;}

`;



function Email(){
    // 단순 형식검증, 실제 데이터 비교는 백엔드에서 값을 가져와 처리
    const checkEmail = (e: any) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        alert(regExp.test(e.target.value))
    }

    return (
        <EmailWrap>
            <div className="form">
                <h2 className="form-title">이메일 변경</h2>
                <form action="">
                    <div className="form-section">
                        <label className="form-label" htmlFor="">변경할 이메일</label>
                        <input className="form-content" type="text" onBlur={checkEmail} placeholder="변경할 이메일" />
                    </div>
                    <div className="form-section">
                        <label className="form-label" htmlFor="">계정 비밀번호</label>
                        <input className="form-content" type="text" placeholder="계정 비밀번호" />
                    </div>
                    <button className="form-button">이메일 인증하기</button>
                </form> 
            </div>
        </EmailWrap>
    );
}

export default Email;