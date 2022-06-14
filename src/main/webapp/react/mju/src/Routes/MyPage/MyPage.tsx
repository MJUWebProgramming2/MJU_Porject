import { Link } from "react-router-dom";
import styled from 'styled-components';

const MyPageWrap = styled.div`
    .content {padding: 100px; background: #000;}
    .content-box {margin: 30px auto 0; padding: 30px 50px 50px; width: 300px; border-radius: 10px; background: #fff;}
    .content-box:first-child {margin-top: 0;}
    .content-group {margin: 0; padding: 0; list-style: none;}
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #333
`;

function MyPage(){
    return (
        <MyPageWrap>
            <div className="content">
                <div className="content-box">
                    <h2 className="content-title">계정</h2>
                    <ul className="content-group">
                        <li className="content-item">
                            <SLink to="mypage/email">이메일 변경</SLink>
                        </li>
                        <li className="content-item">
                            <SLink to="mypage/password">비밀번호 변경</SLink>
                        </li>
                        <li className="content-item">
                            <SLink to="mypage/withdrawal">회원 탈퇴</SLink>
                        </li>
                    </ul>
                </div>
                <div className="content-box">
                    <h2 className="content-title">커뮤니티</h2>
                    <ul className="content-group">
                        <li className="content-item">
                            <SLink to="mypage/myarticle">내가 쓴 글 보기</SLink>
                        </li>
                        <li className="content-item">
                            <SLink to="mypage/myrecommend">내가 추천한 글 보기</SLink>
                        </li>
                    </ul>
                </div>
            </div>
        </MyPageWrap>
    );
}

export default MyPage;