import styled from 'styled-components';
import {text} from "stream/consumers";
import { ReactChild, ReactFragment, ReactPortal } from 'react';


const WriteArticleWrap = styled.div`
display: flex;
justify-content: center;
margin: 50px 0px;
`;

const Container = styled.div`
`;


const InputTitle = styled.input`
display: block;
width: 600px;
font-size: 25px;
padding: 10px 0px 10px 20px;
border-radius: 10px;
margin-top: 10px;
`;
const InputArticle = styled.textarea`
display: block;
border-radius: 10px;
width: 600px;
height: 500px;
font-size: 18px;
margin: 30px 0px;
padding: 10px 0px 10px 20px;
`;
const RegisterButton = styled.button`
margin: auto;
display: block;
font-size: 25px;
background-color:${props => props.theme.color.black};
color:${props => props.theme.color.white};
border-radius: 25px;
width: 150px;
padding: 5px 0px;
`;

const SelectBoxWrap = styled.div`
select{
background-color: ${props => props.theme.color.black};
color: ${props => props.theme.color.white};
padding: 0px 10px;
text-align: center;
border-radius: 5px;
font-size: 15px;
}
`;

const CATEGORY_OPTIONS = [
    {id: "1", name: "전체"},
    {id: "2", name: "자유"},
    {id: "3", name: "직업"},
    {id: "4", name: "공부"},
    {id: "5", name: "운동"},
    {id: "6", name: "요리"},
];

const SelectBox = (props: any) => {
    return (
        <SelectBoxWrap>
            <select>
                <option>카테고리</option>
                {props.options.map((data: any) => (
                    <option key={data.id} value={data.id}>{data.name} 게시판</option>
                ))}
            </select>
        </SelectBoxWrap>
    );
};

function WriteArticle(){
    return (
        <>
        <WriteArticleWrap>
            <Container>
                {/*<SelectBox options = {CATEGORY_OPTIONS} ></SelectBox>*/}
            <InputTitle type='text' placeholder="제목을 입력해주세요."/>
            <InputArticle placeholder="글 쓰기" />
            <RegisterButton>등록하기</RegisterButton>
            </Container>
        </WriteArticleWrap>
        </>
    );
}

export default WriteArticle;