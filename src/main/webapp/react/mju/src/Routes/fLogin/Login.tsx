import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import bgimage from './assets/canada.jpg';
// import client from "../MJU_Porject/src/main/java/com/mju/mobile/Controller/AuthController"

// // 로그인
// export const login = ({username, password}) => 
//     client.post('/api/auth/login', {username,password});

// // 회원가입
// export const register = ({username,password}) => 
//     client.post('/api/auth/register',{username,password});

// // 로그인 상태 확인
// export const check = () => client.get('/api/auth/check');

const MainContainer = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    flex-direction: column;
    height: 40vh;
    width: 50vw;
    background: rgba(0, 0, 0, 0.83);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 10px;

    color: #000; // text
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    @media only screen and (max-width: 320px) {
        width: 40vw;
        height: 60vh;
        hr {
        margin-bottom: 0.3rem;
        }
        h4 {
        font-size: small;
        }
    }
    @media only screen5and (min-width: 360px) {
        width: 30vw;
        height: 60vh;
        h4 {
        font-size: small;
        }
    }
    @media only screen and (min-width: 411px) {
        width: 50vw;
        height: 60vh;
    }
    @media only screen and (min-width: 768px) {
        width: 40vw;
        height: 60vh;
    }
    @media only screen and (min-width: 1024px) {
        width: 40vw;
        height: 60vh;
    }
    @media only screen and (min-width: 1280px) {
        width: 30vw;
        height: 60vh;
    }
`;

const WelcomeText = styled.h3`
    margin: 1rem 0 4rem 0;
    color: #fff;
`;

const WarningText = styled.h3`
    margin: 3rem 0 1rem 0;
    text-align: center;
    color: #fff;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
`;

const ButtonContainer = styled.div`
    margin: 3rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginWith = styled.h5`
    cursor: pointer;
`;

const HorizontalRule = styled.hr`
    width: 90%;
    height: 0.3rem;
    // border-radius: 0.8rem;
    border: none;
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    background-color: #ebd0d0;
    margin: 1.5rem 0 1rem 0;
    backdrop-filter: blur(25px);
`;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 2rem 0 3rem 0;
//   width: 80%;
// `;

const INTRO_IMAGE = '../assets/canada.jpg'
function Login(){
    // const [inputId, setInputId] = useState('')
    // const [inputPw, setInputPw] = useState('')
 
	// // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    // const handleInputId = (e) => {
    //     setInputId(e.target.value)
    // }
 
    // const handleInputPw = (e) => {
    //     setInputPw(e.target.value)
    // }
 
	// // login 버튼 클릭 이벤트
    // const onClickLogin = () => {
    //     console.log('click login')
    // }
 
	// // 페이지 렌더링 후 가장 처음 호출되는 함수
    // useEffect(() => {
    //     axios.get('/user_inform/login')
    //     .then(res => console.log(res))
    //     .catch()
    // },
    // [])
    return (
//     <img src={bgimage} className='App-logo' alt='React' />
        <MainContainer>
            <WarningText>로그인한 회원만 이용 가능합니다.</WarningText>
            <WelcomeText>login</WelcomeText>
            <InputContainer>
                <LoginInput type="text" placeholder="ID" />
                <LoginInput type="password" placeholder="Password" />
            </InputContainer>
            <ButtonContainer>
{/*                 <img src="../assets/user.jpg"> */}
                <LoginButton content="Sign Up" />
            </ButtonContainer>
        </MainContainer>
      );
}

export default Login;