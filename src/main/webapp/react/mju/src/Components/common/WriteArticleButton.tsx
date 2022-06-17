import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WriteArticleButtonWrap = styled.div`
position: fixed;
right: 40px;
bottom: 40px;
z-index: 100;
width: 70px;
height: 70px;
border-radius: 50%;
background-color: ${props => props.theme.color.black};
color: ${props => props.theme.color.white};
font-size: 65px;
line-height: 80px;
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