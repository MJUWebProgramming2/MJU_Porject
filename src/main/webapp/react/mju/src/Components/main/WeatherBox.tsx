import styled from 'styled-components';


const WeatherItem = styled.div`
margin:0px 20px;
padding: 15px;
border-radius: 10px;
width: 250px;
background-color: #3a3a3a;
color: #fcfcfc;
box-shadow:0 1px 1px rgba(0,0,0,0.25),0 2px 2px rgba(0,0,0,0.2),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.05);
`;

const LocationName = styled.div`
font-size: 30px;
text-align: center;
`;
const WeatherTemp = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
line-height: 120px;

div{
    margin-left: 10px;
    height: 120px;
}

`;

const WeatherDetail = styled.div`
display: flex;
justify-content: space-around;
font-size: 15px;
`;

const WeatherLodingContainer = styled.div`
width: 250px;
height: 170px;

border-radius: 10px;
margin:0px 20px;
padding: 15px;

font-size: 40px;
text-align: center;
line-height: 180px;

background-color: #fcfcfc;
color: #606060;
box-shadow:0 1px 1px rgba(0,0,0,0.25),0 2px 2px rgba(0,0,0,0.2),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.05);
`;

const Weatherbox = (weather: { name: any; temp: string; tempFeel: string; tempMin: string; tempMax: string; hum: any; main: any; wind: any; id: any; rain: any; icon: any; }) => {

    return (
        <>
            {weather != null ?
                <WeatherItem>
                    <LocationName>{weather.name}</LocationName>
                    <WeatherTemp>
                        <img src={require(`../../assets/main_weather/${weather.icon}.png`)} />
                        <div>{weather.temp}°</div>
                    </WeatherTemp>
                    <WeatherDetail>
                        <div>체감 {weather.tempFeel}° </div>
                        <div>습도 {weather.hum}% </div>
                        <div>바람 {weather.wind}m/s </div>
                    </WeatherDetail>
                </WeatherItem>
                : <WeatherLodingContainer>Loding...</WeatherLodingContainer>}

        </>
    )
};

export default Weatherbox;