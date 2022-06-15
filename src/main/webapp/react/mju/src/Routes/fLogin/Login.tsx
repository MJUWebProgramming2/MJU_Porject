import styled from 'styled-components';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";


const LoginWrap = styled.body`
    position: relative;
    margin: 0 0 45% 0;
`;

const MainContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 100;
    display: flex;
    margin: 150px auto;
    align-items: center;
    flex-direction: column;
    height: 50vh;
    width: 30vw;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 10px;

    color: #000; // text
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`;

const WarningText = styled.div`
    background: translate;
    margin: 4rem 0 1rem 0;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

const Wrap = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WelcomeText = styled.h1`
    margin: 2.5rem 0 4rem 0;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

const InputContainer = styled.div`
    margin: 1rem 0 0 0;
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
    text-align: center;
   
`;

const ImageWrap = styled.div`
      position: absolute;
      z-index: -1;
`;
const BackImage = styled.img`
//     height: 100%;
    width: 100%;
    filter: brightness(50%);
`;

const StyledInput = styled.div`
input{
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  margin: 0 0 20px 0;
  width: 60%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #606060;
    backdrop-filter: blur(12rem);
    border-radius: 10px;
  }
  &::placeholder {
    color: #606060;
    font-weight: 100;
    font-size: 1rem;
  }
 }
`;

const StyledButton = styled.button`
  background: WHITE;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 45%;
  height: 3rem;
  border: none;
  color: #000;
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
`;

const UserImage = styled.img`
    height: 30px; width: 30px; align-items: center; margin: 0 10px 0 0;
`;

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e: any) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e: any) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
        // console.log('click login')
        // console.log('ID : ', inputId)
        // console.log('PW : ', inputPw)
        axios.post('http://localhost:8080/auth/login', {
            id: inputId,
            password: inputPw
        })
            .then(res => {
                console.log(res)
                if (res.data.success === true) {
                    sessionStorage.setItem('user_id', inputId)
                }
                // 작업 완료 되면 페이지 이동(새로고침)
                document.location.href = '/'
            })
            .catch()
    }

    useEffect(() => {
        axios.get('http://localhost:8080/auth/login')
            .then(res => console.log(res))
            .catch()
    }, [])

    return (
        <LoginWrap>
            <ImageWrap>
                <BackImage src={require('../../assets/canada.jpg')}/>
            </ImageWrap>

            <Wrap><WarningText>로그인한 회원만 이용 가능합니다.</WarningText></Wrap>

            <MainContainer>
                <WelcomeText>login</WelcomeText>
                <InputContainer>
                    <StyledInput>
                        <input type='text' name='input_id' placeholder="ID" value={inputId} onChange={handleInputId}/>
                        <input type='password' name='input_pw' placeholder="Password" value={inputPw}
                               onChange={handleInputPw}/>
                    </StyledInput>
                </InputContainer>

                <ButtonContainer>
                    <StyledButton type='button' onClick={onClickLogin}>
                        <UserImage src={require(`../../assets/user.png`)} />
                        Login</StyledButton>
                </ButtonContainer>
            </MainContainer>

        </LoginWrap>
    );
}

export default Login;