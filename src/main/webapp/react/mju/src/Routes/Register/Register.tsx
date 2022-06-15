import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import RegisterInput from "./RegisterInput";
import RegisterButton from "./RegisterButton";
// import client from "../MJU_Porject/src/main/java/com/mju/mobile/Controller/AuthController"

const MainContainer = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    flex-direction: column;
    height: 120vh;
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
        height: 120vh;
        hr {
        margin-bottom: 0.3rem;
        }
        h4 {
        font-size: small;
        }
    }
    @media only screen5and (min-width: 360px) {
        width: 30vw;
        height: 120vh;
        h4 {
        font-size: small;
        }
    }
    @media only screen and (min-width: 411px) {
        width: 50vw;
        height: 120vh;
    }
    @media only screen and (min-width: 768px) {
        width: 40vw;
        height: 120vh;
    }
    @media only screen and (min-width: 1024px) {
        width: 40vw;
        height: 120vh;
    }
    @media only screen and (min-width: 1280px) {
        width: 1325px;
        height: 120vh;
    }
`;

const AccountText = styled.h5`
    margin: 0.5rem 200px 0 0;
    color: #fff;
    text-align: left;
`;

const InputContainer = styled.div`
    padding: 0 0 0 0;
    margin: 1rem 0 1rem 0;
    display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
    height: 20%;
    width: 100%;
`;

const ButtonContainer = styled.div`
    position: relative;
    margin: 2rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Register(){
    return (
        <MainContainer>

        <AccountText>아이디</AccountText>
            <InputContainer>
                <RegisterInput type="text" placeholder="ID" />
                <RegisterButton content="아이디 중복확인" />
            </InputContainer>

        <AccountText>비밀번호</AccountText>
            <InputContainer>
                <RegisterInput type="password" placeholder="Password" />
            </InputContainer>

        <AccountText>비밀번호 확인</AccountText>
            <InputContainer>
                <RegisterInput type="password" placeholder="Password 확인" />
            </InputContainer>

        <AccountText>이름</AccountText>
            <InputContainer>
                <RegisterInput type="text" placeholder="이름" />
            </InputContainer>

        <AccountText>생년월일</AccountText>
            <InputContainer>
                 <RegisterInput type="text" placeholder="년(4자)" />
                 <RegisterInput type="text" placeholder="월" />
                 <RegisterInput type="text" placeholder="일" />
            </InputContainer>

        <AccountText>전화번호</AccountText>
            <InputContainer>
                  <RegisterInput type="text" placeholder="휴대전화" />
            </InputContainer>

        <AccountText>이메일</AccountText>
            <InputContainer>
                  <RegisterInput type="text" placeholder="이메일" />
            </InputContainer>

            <ButtonContainer>
                <RegisterButton content="Sign Up" />
            </ButtonContainer>
        </MainContainer>
      );
}

export default Register;