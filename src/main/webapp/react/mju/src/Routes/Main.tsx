import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { getKoreaData, getTorontoData, getVancouverData } from '../lib/weather';
import {getItemsData} from "../lib/getItemsData";



import Clock from 'react-live-clock';
import WeatherBox from '../Components/main/WeatherBox';
import CategoryBar from "../Components/main/CategoryBar";
import TimeBox from "../Components/main/TimeBox";
import ArticleList from "../Components/main/ArticleList";

interface MainProps {
    state: string;
}

const MainWrap = styled.div`
color: #3a3a3a;
width: 1400px;
margin: auto;
`;

const Title = styled.div`
text-align: center;
font-size: 35px;
font-weight: 700;
margin-top: 50px;
`;

const WeatherContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
border-bottom: 1px solid gray;
padding-bottom:50px;

`;
const TimeContainer = styled.div`
display: flex;
justify-content: center;
font-size: 40px;
text-align: center;
line-height: 90px;
margin-bottom: 150px;
`;

const NoticeBoardWrap = styled.div`
display: flex;
justify-content:center;
`;

const BestArticleList = styled.div``;
const AllArticleList = styled.div``;
const CategoryBarWrap = styled.div``;

const SubTitle = styled.h2``;
const Wrap = styled.div`
display: flex;
justify-content:space-around;
padding: 0px 10px;
width: 1000px;
`;

const CATEGORY_OPTIONS = [
    {id: "1", name: "전체"},
    // {id: "2", name: "자유"},
    // {id: "3", name: "직업"},
    // {id: "4", name: "공부"},
    // {id: "5", name: "운동"},
    // {id: "6", name: "요리"},
];

const TIME_LIST = [
    {id: 1, name: "Korea", timezone: "Asia/Seoul"},
    {id: 2, name: "Toronto", timezone: "America/Toronto"},
    {id: 3, name: "Vancouver", timezone: "America/Vancouver"}
]

function Main() {
    const [koreaData, setKoreaData] = useState<any>();
    const [torontoData, setTorontoData] = useState<any>();
    const [vancouverData, setVancouverData] = useState<any>();
    const [itemsData, setItemsData] = useState<any>();

    async function postData() {
        try {
            //응답 성공 
            const response = await axios.post('http://localhost:8080/auth/login', {
                //보내고자 하는 데이터 
                id: "test",
                password: "test"
            });
            console.log(response);
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    }

    useEffect(() => {
        (async () => {
            await postData();
        })();
    }, []);


    useEffect(() => {
        (async () => {
            const korea = await getKoreaData();
            const vancouver = await getVancouverData();
            const toronto = await getTorontoData();
            setKoreaData(korea);
            setTorontoData(toronto);
            setVancouverData(vancouver);
        })();
    }, []);

    useEffect(() => {
        (async () => {
           const data = await getItemsData();
           setItemsData(data);
        })();
    }, []);



    return (
        <MainWrap>
            {/*<img src="../../../../../../../ItemPhoto/image.png"/>*/}
            <Title>Weather</Title>
            <WeatherContainer>
                {WeatherBox(koreaData)}
                {WeatherBox(torontoData)}
                {WeatherBox(vancouverData)}
            </WeatherContainer>

            <Title>Time</Title>
            <TimeContainer>
                <TimeBox list ={TIME_LIST}/>
            </TimeContainer>

            <NoticeBoardWrap>
                <Wrap>
                    <BestArticleList>
                        <SubTitle>| Best 게시글</SubTitle>
                        { itemsData != null ? <ArticleList categorys ={CATEGORY_OPTIONS} items={itemsData} />  : <div>null</div>}
                    </BestArticleList>

                    <CategoryBarWrap>
                    <SubTitle>| 게시판 카테고리</SubTitle>
                    <CategoryBar items={itemsData} options = {CATEGORY_OPTIONS}/>
                    </CategoryBarWrap>
                </Wrap>

                {/*<AllArticleList>*/}
                {/*    <SubTitle>| 전체 게시글 </SubTitle>*/}
                {/*</AllArticleList>*/}

            </NoticeBoardWrap>
        </MainWrap>
    );
}

export default Main;