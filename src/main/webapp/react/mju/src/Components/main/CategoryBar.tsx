import styled from 'styled-components';
import { Link } from "react-router-dom";

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

const SLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.black};
  :visited{
      color: ${props => props.theme.color.black};
  }
`;

const CategoryBarWrap = styled.div``;
const CategoryList = styled.li`
list-style: none;
font-size: 18px;
border-bottom: 1px solid ${props => props.theme.color.black};
padding: 5px;
`


export default CategoryBar;