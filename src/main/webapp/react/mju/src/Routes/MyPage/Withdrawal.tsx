import styled from 'styled-components';

const WithdrawalWrap = styled.div`
    .form {margin: 50px auto 0; padding: 50px; width: 600px; color: ${props => props.theme.color.white}; border-radius: 10px; background: ${props => props.theme.color.black};}
    .form-title {padding-left: 10px; border-left: 3px solid ${props => props.theme.color.white};}
    .form-section {margin-top: 20px; }
    .form-label {display: block;}
    .form-content {display: block; margin-top: 10px; padding: 5px; width: 100%; font-size: 18px; border: none; border-radius: 5px; background:${props => props.theme.color.white};}
    .form-button {display: block; margin: 50px auto 0; padding: 10px 50px; border-radius: 25px; background: ${props => props.theme.color.white};}
`;

function Withdrawal(){
    return (
        <WithdrawalWrap>
            <div className="form">
                <h2 className="form-title">회원 탈퇴</h2>
                <form action="">
                    <div className="form-section">
                        <label className="form-label" htmlFor="">계정 비밀번호</label>
                        <input className="form-content" type="text" placeholder="계정 비밀번호" />
                    </div>
                    <button className="form-button">회원 탈퇴하기</button>
                </form> 
            </div>
        </WithdrawalWrap>
    );
}
export default Withdrawal;