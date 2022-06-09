import styled from 'styled-components';
import { Link } from "react-router-dom";


const SLink = styled(Link)`
  text-decoration: none;
  color: #3a3a3a;
  :visited{
      color: #3a3a3a;
  }
`;

const CategoryBarWrap = styled.div``;
const CategoryList = styled.li`
list-style: none;
font-size: 18px;
border-bottom: 1px solid #3a3a3a;
padding: 5px;
`

const CategoryBar = (props: any) => {
    return (
        <CategoryBarWrap>
            {props.options.map((data: any) => (
                <CategoryList key={data.id}>
                    <SLink to={{pathname: `/article/${data.id}`}}> {data.name} 게시판</SLink>
                </CategoryList>
            ))}
        </CategoryBarWrap>
    );
};


export default CategoryBar;