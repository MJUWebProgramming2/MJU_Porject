import Clock from "react-live-clock";
import styled from "styled-components";

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

const TimeBox = (props: any) => {
    return(
        <>
            {props.list.map((data: any) => (
                <TimeItem key={data.id}><span>{data.name}</span> <Clock key={data.id} className='clock' format={'HH:mm:ss'} ticking={true} timezone={data.timezone} /></TimeItem>
            ))}
        </>
    )
};

export default TimeBox;