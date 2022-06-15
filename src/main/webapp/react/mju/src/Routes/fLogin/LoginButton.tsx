import styled from "styled-components";

export default function LoginButton({ content="any" }) {
    return (
        <StyledButton>
        <UserImage src={require(`../../assets/user.png`)} />
        {content}</StyledButton>
    );
}

const UserImage = styled.img`
    height: 30px; width: 30px; align-items: center; margin: 0 10px 0 0;
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