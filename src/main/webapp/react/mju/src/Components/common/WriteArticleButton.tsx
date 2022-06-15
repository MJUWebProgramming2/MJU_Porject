import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WriteArticleButtonWrap = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background-color: #3a3a3a;
color: #fcfcfc;
font-size: 65px;
text-align: center;
cursor: pointer;
`;

const SLink = styled(Link)`
  text-decoration: none;
  :visited{
      color: ${props => props.theme.color.white};
  }
`;

function WriteArticleButton(){
    return (
        <WriteArticleButtonWrap>
            <SLink to="/article/write">+</SLink>
        </WriteArticleButtonWrap>
    );
}

export default WriteArticleButton;