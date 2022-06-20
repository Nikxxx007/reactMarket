import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/5e865e09d8efa341ab76b5e7_Logo.svg';
import RightColumn from './RightColumn';

const FooterWrapper = styled.div`
  margin-top: 20px;
  height: 400px;

  display: flex;
  justify-content: center;
 
  background-color: #f5fbfc;
  background-image: url("./images/5e865e09d8efa326ac76b5fe_Pattern Footer.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0% 100%;
`

const FooterContainer = styled.div`
  max-width: 1200px;
  display: flex;
  padding: 40px 5%;
  
  .footer__left-column {
    margin-right: 10px;
  }
`

const LeftColumn = styled.div`
    
`


function Footer(props) {
    return (
        <>
            <FooterWrapper>
                <FooterContainer>
                    <div className="footer__left-column">
                        <img style={{height: '50px', marginBottom: '20px'}} src={Logo} alt={'Logo'} />
                        <p>Takeaway & Delivery template <br/>for small - medium businesses.</p>
                    </div>
                    <RightColumn />
                </FooterContainer>
            </FooterWrapper>
        </>
    );
}

export default Footer;