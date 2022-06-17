import React from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 2px solid  ${props => props.theme.color.black};
  border-bottom: 2px solid  ${props => props.theme.color.black};
  background-color:  ${props => props.theme.color.black};
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color:  ${props => props.theme.color.gray};
  }
  &:focus::after {
    color:  ${props => props.theme.color.white};
    background-color:  ${props => props.theme.color.gray};
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: ${props => props.theme.color.black};
    background-color: ${props => props.theme.color.white};
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }:{postsPerPage:any; totalPosts:any; paginate:any}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav>
                <PageUl className="pagination">
                    {pageNumbers.map((number) => (
                        <PageLi key={number} className="page-item">
                            <PageSpan onClick={() => paginate(number)} className="page-link">
                                {number}
                            </PageSpan>
                        </PageLi>
                    ))}
                </PageUl>
            </nav>
        </div>
    );
};

export default Pagination;