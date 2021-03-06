import styled from 'styled-components';

const HeaderWrap = styled.div`
margin: 40px 0;
`;

const Logo = styled.div`
font-size: 50px;
text-align: center;
font-weight: 600;
color: #3a3a3a;
`;

const SubTitle = styled.div`
font-size: 25px;
text-align: center;
color: ${props => props.theme.color.gray};
`;

const ImageWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const HeaderImage = styled.img`
    width: 300px;
`;

function Header() {

    return (
        <HeaderWrap>
            <ImageWrap>
                <HeaderImage src={require('../../assets/logo/headerLogo.png')}/>
            </ImageWrap>
            {/*<Logo>H!CANADA</Logo>*/}
            <SubTitle>KOREAN COMMUNITY</SubTitle>
        </HeaderWrap >
    );
}

export default Header;