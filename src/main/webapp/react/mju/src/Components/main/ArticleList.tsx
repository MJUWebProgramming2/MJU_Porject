import {Link} from "react-router-dom";
import styled from "styled-components";


const ArticleList = (props: any) => {
    function sortByHighLikes(arr: any) {
        const sortedArr = arr.slice();
        for (let i = 0; i < sortedArr.length; i++) {
            let swap;
            for (let j = 0; j < sortedArr.length - 1 - i; j++) {
                if (sortedArr[j].likes < sortedArr[j + 1].likes) {
                    swap = sortedArr[j];
                    sortedArr[j] = sortedArr[j + 1];
                    sortedArr[j + 1] = swap;
                }
            }
            if (!swap) {
                break;
            }
        }
        return sortedArr;
    }

    return (
        <div>

            {props.sorting ? sortByHighLikes(props.items).map((item: any) =>
                <SLink key={item.id} to={{pathname: `/article/detail/${item.id}`}}>
                    <ArticleListWrap key={item.id}>
                        <Title>
                            {/*<span>{item.id} | </span>*/}
                            <span>{item.title}</span>
                        </Title>
                        <Item>
                            <span>조회수 | {item.views}</span>
                            <span>추천수 | {item.likes}</span>
                        </Item>
                    </ArticleListWrap>
                </SLink>
            ) : <>
                {props.items.map((item: any) => (
                    <SLink key={item.id} to={{pathname: `/article/detail/${item.id}`}}>
                        <ArticleListWrap key={item.id}>
                            <Title>
                                {/*<span>{item.id} | </span>*/}
                                <span>{item.title}</span>
                            </Title>
                            <Item>
                                <span>조회수 | {item.views}</span>
                                <span>추천수 | {item.likes}</span>
                            </Item>
                        </ArticleListWrap>
                    </SLink>
                ))}
            </>}
        </div>
    );
}

const ArticleListWrap = styled.div`
width: 600px;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #3a3a3a;
padding: 5px 15px;

`;
const Title = styled.div`
font-size: 20px;
color: #3a3a3a;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
width: 400px;
height: 20px;
`;
const Item = styled.div`
display: flex;
justify-content: space-between;
color: #606060;
width: 180px;
`;

const SLink = styled(Link)`
  text-decoration: none;
`;

export default ArticleList;