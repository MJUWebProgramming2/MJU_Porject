import ArticleList from "../../Components/main/ArticleList";
import styled from "styled-components";

const ArticleSortListPresenter = ({result, loading, error}:any) =>
    loading ? (
        <div>loding...</div>
    ) : (
        <Wrap>
            <div>
                <CategoryName>| 전체 게시판</CategoryName>
                { result.list != null ? <ArticleList  items={result.list} sorting={false} />  : <div>null</div>}
            </div>
        </Wrap>
    );

const Wrap = styled.div`
display: flex;
justify-content: center;
background-color: #fcfcfc;
border: 2px solid #3a3a3a;
border-radius: 20px;
width: 900px;
height: 500px;
margin: auto;
padding: 30px 0px;
`;

const CategoryName = styled.div`
font-size: 30px;
font-weight: 500;
margin-bottom: 40px;

`;

export default ArticleSortListPresenter;