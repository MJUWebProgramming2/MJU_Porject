import styled from "styled-components";


const CovidNoticeWrap = styled.div`
display: flex;
justify-content: center;
border-bottom: 1px solid ${props => props.theme.color.lightgray};
`;

const ItemBox = styled.div`
font-size: 20px;
margin: 30px 10px 80px 10px;
text-align: center;
width: 120px;
box-shadow:0 1px 1px rgba(0,0,0,0.25),0 2px 2px rgba(0,0,0,0.2),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.05);
div{
padding: 5px 0px;
}
`;

const LodingBox = styled.div`
font-size: 30px;
color: gray;
height: 200px;
line-height: 200px;
`;

const CovidNotice = (data: { total_cases: string; total_fatalities: string; change_fatalities: string; change_cases: string; total_vaccinated: string; last_updated: string; }) => {
    return (
        <>
            {data != null ?
                <CovidNoticeWrap>
                    <ItemBox>
                        <div>누적 확진자</div>
                        <div>{data.total_cases}</div>
                    </ItemBox>
                    <ItemBox>
                        <div>누적 사망자</div>
                        <div>{data.total_fatalities}</div>
                    </ItemBox>
                    <ItemBox>
                        <div>일일 확진자</div>
                        <div>{data.change_cases}</div>
                    </ItemBox>
                    <ItemBox>
                        <div>일일 사망자</div>
                        <div>{data.change_fatalities}</div>
                    </ItemBox>
                    <ItemBox>
                        <div>접종 완료</div>
                        <div>{data.total_vaccinated}</div>
                    </ItemBox>
                </CovidNoticeWrap>
                :
                <CovidNoticeWrap> <LodingBox>Loding...</LodingBox></CovidNoticeWrap>
            }
        </>
    )
};

export default CovidNotice;