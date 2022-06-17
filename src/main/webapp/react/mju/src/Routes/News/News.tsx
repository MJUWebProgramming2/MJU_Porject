import styled from "styled-components";

const NewsWrap = styled.div`
display: flex;
justify-content: center;
font-size: 40px;
font-weight: 600;
background-color: ${props => props.theme.color.black};
height: 70vh;
line-height: 70vh;
color: ${props => props.theme.color.white};
`;

function News(){
    return (
        <NewsWrap>
        News Page 준비중
        </NewsWrap>
    );
}

export default News;