import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import RegisterInput from "./RegisterInput";
import RegisterButton from "./RegisterButton";

const MainContainer = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    height: 140vh;
    width: 50vw;
    background: rgba(0, 0, 0, 0.83);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 10px;

    color: #000; // text
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`;

const Wrap = styled.div`
    margin: auto;
`;

const AccountText = styled.h4`
    margin: 0 0 1rem 0;
    color: #fff;
`;

const InputContainer = styled.div`
    margin: 0 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 400px;
`;

const ButtonContainer = styled.div`
    margin: 2rem 0 2rem 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

function Register(){
    return (
        <MainContainer>
        <Wrap>
        <AccountText>아이디</AccountText>
            <InputContainer>
                <RegisterInput type="text" placeholder="ID" />
                <RegisterButton content="중복확인" />
            </InputContainer>
        </Wrap>
        <Wrap>
        <AccountText>비밀번호</AccountText>
            <InputContainer>
                <RegisterInput type="password" placeholder="Password" />
            </InputContainer>
        </Wrap>
        <Wrap>
        <AccountText>비밀번호 확인</AccountText>
            <InputContainer>
                <RegisterInput type="password" placeholder="Password 확인" />
            </InputContainer>
        </Wrap>
        <Wrap>
        <AccountText>이름</AccountText>
            <InputContainer>
                <RegisterInput type="text" placeholder="이름" />
            </InputContainer>
        </Wrap>
        <Wrap>
        <AccountText>생년월일</AccountText>
            <InputContainer>
                 <RegisterInput type="text" placeholder="년(4자)" />
                 <RegisterInput type="text" placeholder="월" />
                 <RegisterInput type="text" placeholder="일" />
            </InputContainer>
        </Wrap>
        <Wrap>
        <AccountText>전화번호</AccountText>
            <InputContainer>
                  <RegisterInput type="text" placeholder="휴대전화" />
            </InputContainer>
        </Wrap>

        <Wrap>
        <AccountText>이메일</AccountText>
            <InputContainer>
                  <RegisterInput type="text" placeholder="이메일" />
            </InputContainer>
        </Wrap>
            <ButtonContainer>
                <RegisterButton content="Sign Up" />
            </ButtonContainer>

        </MainContainer>
      );
}

export default Register;