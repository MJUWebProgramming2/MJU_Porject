import styled from "styled-components";
import WriteArticleButton from "../../Components/common/WriteArticleButton";
import React from "react";

const ArticleDetailPresenter = ({result, loading, error}: any) =>
    loading ? (
        <div>loding...</div>
    ) : (
        <>
            <WriteArticleButton />
            <ArticleDetailWrap>
                <Title>{result.data.title}</Title>
                <InfoWrap>
                    <Info>작성자 {result.data.ownerId} | 조회수 {result.data.views} | 추천수 {result.data.likes}</Info>
                </InfoWrap>
                <ArticleWrap>
                    <DescWrap>
                        {result.data.content.split('\n').map((line: any, idx: any) => (
                            <Desc key={idx}>
                                {line.includes('//')
                                    ? line.split('//').map((line: any, idx: any) =>
                                            idx % 2 === 1 ? (
                                                <span id="bold" key={idx}>
                        {line}
                      </span>
                                            ) : (
                                                line
                                            ),
                                    )
                                    : line}
                                <br/>
                            </Desc>
                        ))}
                    </DescWrap>
                </ArticleWrap>
            </ArticleDetailWrap>
        </>
    );

const ArticleDetailWrap = styled.div`
margin: 100px 0px;
background-color: ${props => props.theme.color.white};
width: 1000px;
`;

const Title = styled.h1`
font-size: 30px;
font-weight: 600;
color: ${props => props.theme.color.black};
text-align: center;
margin-bottom: 50px;
`

const InfoWrap = styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 20px;

`;

const Info = styled.div`
color: ${props => props.theme.color.gray};
margin-bottom: 30px;
margin-right: 50px;
`;

const ArticleWrap = styled.div`
display: flex;
margin: auto;
`;

const DescWrap = styled.div`
  padding-top: 40px;
  line-height: 30px;
  letter-spacing: 0.06rem;
  font-size: 18px;
`;
const Desc = styled.div` 
  #bold {
    font-weight: 700;
  }
`;

export default ArticleDetailPresenter;

