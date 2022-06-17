import ArticleList from "../../Components/main/ArticleList";
import styled from "styled-components";

import React, {useState, useEffect} from "react";
import Pagination from "../../Components/main/Pagination";


const ArticleSortListPresenter = ({result, loading, error}: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    const currentPosts = (list:any) => {
        let currentPosts = 0;
        currentPosts = list.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };

    function sortByNewest(arr: any){
        const reverseArr = [];
        for(let i=arr.length-1; i>=0; i--){
            reverseArr.push(arr[i]);
        }
        return reverseArr;
    }

    return (
        loading ? (
            <div>loding...</div>
        ) : (
            <Wrap>
                <div>
                    <CategoryName>| 전체 게시판</CategoryName>
                    <ListItemBox>
                    {result.list != null ? <ArticleList items={currentPosts(sortByNewest(result.list))} sorting={false}/> : <div>null</div>}
                    </ListItemBox>
                    <Pagination postsPerPage={postsPerPage} totalPosts={result.list.length} paginate={setCurrentPage}></Pagination>
                </div>
            </Wrap>
        ));
}

const Wrap = styled.div`
display: flex;
justify-content: center;
background-color: ${props => props.theme.color.white};
border: 2px solid ${props => props.theme.color.black};
border-radius: 20px;
width: 900px;
height: 500px;
margin: auto;
margin-top: 80px;
margin-bottom: 80px;
padding: 30px 0px;
`;

const ListItemBox = styled.div`
height:350px;
`;

const CategoryName = styled.div`
font-size: 30px;
font-weight: 500;
margin-bottom: 40px;

`;

export default ArticleSortListPresenter;