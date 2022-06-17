import styled from 'styled-components';

const FooterWrap = styled.div`
.footer {
    //border-top: 1px black;
    padding: 20px;
    background: ${props => props.theme.color.black};
    color: ${props => props.theme.color.white};;
    font: 7px 'arial';
    letter-spacing: 1px;
    text-align: left;
    justify-content: center;
    transform: translateY(-0%);  
     position: relative;
}
`;

const FooterImage = styled.img`
    width: 100px;
`;

function Footer(){
    return (
        <FooterWrap>
                <div className="footer">
                    <FooterImage src={require('../../assets/logo/footerLogo.png')}/>
                    <h2>Copyright 2022-2022 H!CANADA © All rights reserved.</h2>
                    <h2>E-mail:H!CANADA@gmail.com 전화:0100-1010-1010</h2>
                </div>
        </FooterWrap>
    );
}

export default Footer;