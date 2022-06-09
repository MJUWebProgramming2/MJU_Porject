import styled from "styled-components";


const ArticleDetailWrap = styled.div`
background-color: #fcfcfc;
width: 1300px;
`;

const Title = styled.h1`
font-size: 40px;
color: #3a3a3a;
text-align: center;
`

const InfoWrap = styled.div`
display: flex;
justify-content: flex-end;
`;

const Info = styled.div`
color: #606060;
margin-bottom: 30px;
margin-right: 50px;
`;
const Article = styled.div`
font-size: 25px;
padding: 40px;
`;

const ArticleDetailPresenter = ({result, loading, error}:any) =>
    loading ? (
        <div>loding...</div>
    ) : (
        <ArticleDetailWrap>
            {console.log(result)}
            <Title>{result.data.title}</Title>
            <InfoWrap>
                <Info>작성자 {result.data.ownerId} | 조회수 {result.data.views} | 추천수 {result.data.likes}</Info>
            </InfoWrap>
            <Article>{result.data.content}</Article>
        </ArticleDetailWrap>
    );

export default ArticleDetailPresenter;

