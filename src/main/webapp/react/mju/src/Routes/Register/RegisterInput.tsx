import styled from "styled-components";
export default function RegisterInput({ type="any", placeholder="any" }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  margin: 0 0 0px 0;
  width: 20%;
  height: 1rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #606060;
  font-size: 0.7rem;
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
`;