import styled from "styled-components";

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
            <ArticleWrap>
                <DescWrap>
                    {result.data.content.split('\n').map((line:any, idx:any) => (
                        <Desc key={idx}>
                            {line.includes('//')
                                ? line.split('//').map((line:any, idx:any) =>
                                        idx % 2 === 1 ? (
                                            <span id="bold" key={idx}>
                        {line}
                      </span>
                                        ) : (
                                            line
                                        ),
                                )
                                : line}
                            <br />
                        </Desc>
                    ))}
                </DescWrap>
            </ArticleWrap>
        </ArticleDetailWrap>
    );

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

const ArticleWrap = styled.div`
display: flex;
width: 1000px;
margin: auto;
`;

const DescWrap = styled.div`
  padding-top: 40px;
  line-height: 30px;
  letter-spacing: 0.06rem;
  font-size: 20px;
`;
const Desc = styled.div` 
  #bold {
    font-weight: 700;
  }
`;

export default ArticleDetailPresenter;

