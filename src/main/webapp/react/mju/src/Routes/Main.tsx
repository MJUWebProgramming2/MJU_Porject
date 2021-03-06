import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {getKoreaData, getTorontoData, getVancouverData} from '../lib/weather';
import {getCovidData} from "../lib/covid19";
import {getItemsData} from "../lib/getItemsData";


import WeatherBox from '../Components/main/WeatherBox';
import CategoryBar from "../Components/main/CategoryBar";
import TimeBox from "../Components/main/TimeBox";
import ArticleList from "../Components/main/ArticleList";
import CovidNotice from "../Components/main/CovidNotice";
import Footer from "../Components/common/Footer";
import WriteArticleButton from "../Components/common/WriteArticleButton";

interface MainProps {
    state: string;
}

const MainWrap = styled.div`
color: ${props => props.theme.color.black};
margin: auto;
`;

const Title = styled.div`
text-align: center;
font-size: 32px;
font-weight: 700;
margin-top: 50px;
color: ${props => props.theme.color.black};
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
color: ${props => props.theme.color.black};
margin-bottom: 100px;
`;

const BestArticleList = styled.div`
margin-right: 30px;
`;
const AllArticleList = styled.div``;
const CategoryBarWrap = styled.div``;

const SubTitle = styled.div`
font-size: 25px;
font-weight: 600;
margin-bottom: 20px;
`;
const Wrap = styled.div`
display: flex;
justify-content:space-around;
padding: 0px 10px;
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
    const [covidData, setCovidData] = useState<any>();


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
            const data = await getCovidData();
            setCovidData(data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const data = await getItemsData();
            setItemsData(data);
        })();
    }, []);


    return (
        <>
            <WriteArticleButton/>
            <MainWrap>
                {/*<img src="../../../../../../../ItemPhoto/image.png"/>*/}
                <Title>캐나다 코로나 19 현황</Title>
                {CovidNotice(covidData)}

                <Title>Weather</Title>
                <WeatherContainer>
                    {WeatherBox(koreaData)}
                    {WeatherBox(torontoData)}
                    {WeatherBox(vancouverData)}
                </WeatherContainer>

                <Title>Time</Title>
                <TimeContainer>
                    <TimeBox list={TIME_LIST}/>
                </TimeContainer>

                <NoticeBoardWrap>
                    <Wrap>
                        <BestArticleList>
                            <SubTitle>| Best 게시글</SubTitle>
                            {itemsData != null ?
                                <ArticleList categorys={CATEGORY_OPTIONS} items={itemsData} sorting={true}/> :
                                <div>null</div>}
                        </BestArticleList>

                        <CategoryBarWrap>
                            <SubTitle>| 게시판 카테고리</SubTitle>
                            <CategoryBar items={itemsData} options={CATEGORY_OPTIONS}/>
                        </CategoryBarWrap>
                    </Wrap>

                    {/*<AllArticleList>*/}
                    {/*    <SubTitle>| 전체 게시글 </SubTitle>*/}
                    {/*</AllArticleList>*/}
                </NoticeBoardWrap>
                <Footer/>
            </MainWrap>
        </>
    );
}

export default Main;