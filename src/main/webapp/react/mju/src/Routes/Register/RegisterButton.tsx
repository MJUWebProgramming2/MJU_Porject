import styled from "styled-components";

export default function RegisterButton({ content="any" }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: WHITE;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 30%;
  height: 3rem;
  border: none;
  color: #000;
  border-radius: 10px;
  cursor: pointer;
`;