import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';

const NavWrap = styled.div`
display: flex;
justify-content: center;
background-color:  #3a3a3a;
z-index: 10;
`;

const List = styled.ul`
display: flex;
`;

const Item = styled.li`
display: block;
list-style: none;
font-size: 30px;
color: #fcfcfc;
margin: 10px 40px;
`;

const SLink = styled(Link)`
  text-decoration: none;
 :visited{
      color: #fcfcfc;
  }`;

export default withRouter(({ location: { pathname } }) => (
    <NavWrap>
        <List>
            <Item>
                <SLink to="/">MAIN</SLink>
            </Item>
            <Item>
                <SLink to="/news">NEWS</SLink>
            </Item>
            <Item>
                <SLink to="/mypage">MY PAGE</SLink>
            </Item>
        </List>
    </NavWrap>
        ));