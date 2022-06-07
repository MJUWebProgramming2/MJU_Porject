import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getKoreaData, getTorontoData, getVancouverData } from '../lib/weather';
import {getItemsData} from "../lib/getItemsData";

import Clock from 'react-live-clock';
import WeatherBox from '../Components/main/WeatherBox';
import CategoryBar from "../Components/main/CategoryBar";

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

const TimeItem = styled.div`
.clock{
    display: block;
    width: 250px;
    margin: 0px 20px;
    height: 90px;
    background-color: #fcfcfc;
    box-shadow:0 1px 1px rgba(0,0,0,0.25),0 2px 2px rgba(0,0,0,0.2),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.05);
}

span{
    font-size: 30px;
}
`;

const NoticeBoardWrap = styled.div``;

const BestArticleList = styled.div``;
const AllArticleList = styled.div``;
const CategoryBarWrap = styled.div``;

const SubTitle = styled.h2``;
const Wrap = styled.div`
justify-content: space-around;
display: flex;
`;

const CATEGORY_OPTIONS = [
    {id: "1", name: "전체"},
    {id: "2", name: "자유"},
    {id: "3", name: "직업"},
    {id: "4", name: "공부"},
    {id: "5", name: "운동"},
    {id: "6", name: "요리"},
];

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

    console.log(itemsData);
    return (
        <MainWrap>
            <Title>Weather</Title>
            <WeatherContainer>
                {WeatherBox(koreaData)}
                {WeatherBox(torontoData)}
                {WeatherBox(vancouverData)}
            </WeatherContainer>

            <Title>Time</Title>
            <TimeContainer>
                <TimeItem><span>Korea</span><Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} /></TimeItem>
                <TimeItem><span>Toronto</span><Clock style={{ backgroundColor: '#3a3a3a', color: "#fcfcfc" }} className='clock' format={'HH:mm:ss'} ticking={true} timezone={'America/Toronto'} /></TimeItem>
                <TimeItem><span>Vancouver</span><Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'America/Vancouver'} /></TimeItem>
            </TimeContainer>

            <NoticeBoardWrap>
                <Wrap>
                    <BestArticleList>
                        <SubTitle>| Best 게시글</SubTitle>
                    </BestArticleList>

                    <CategoryBarWrap>
                    <SubTitle>| 게시판 카테고리</SubTitle>
                    <CategoryBar options = {CATEGORY_OPTIONS}/>
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