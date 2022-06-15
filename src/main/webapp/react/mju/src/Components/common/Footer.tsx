import styled from 'styled-components';

const FooterWrap = styled.div`
.footer {
    //border-top: 1px black;
    padding: 10px;
    background: #3a3a3a;
    color: #ccc;
    font: 7px 'arial';
    letter-spacing: 1px;
    margin: 150px 0 0 0;
    text-align: left;
        justify-content: center;
}
`;

const FooterImage = styled.img`
    width: 100px;
`;

function Footer(){
    return (
        <FooterWrap>
            <footer id="footer">
                <div className="footer">
                    <FooterImage src={require('../../assets/logo/footerLogo.png')}/>
                    <h2>Copyright 2022-2022 H!CANADA © All rights reserved.</h2>
                    <h2>E-mail:H!CANADA@gmail.com 전화:0100-1010-1010</h2>
                </div>
            </footer>
        </FooterWrap>
    );
}

export default Footer;