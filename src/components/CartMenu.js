import React from 'react';
import styled from 'styled-components';

const BackgroundShadow = styled.div`
  pacity: 0;
  transition: opacity 300ms ease 0s;
  display: none;
  
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 2;
  top: 0;
`

const MenuContainer = styled.div`
  width: 480px;
  height: 100vh;
  background: aqua;
  position: fixed;
  z-index: 3;
  right: 0;
  top: 0;
`

function CartMenu(props) {
    return (
        <>
            <BackgroundShadow>
            </BackgroundShadow>
            <MenuContainer>
            </MenuContainer>
        </>
    );
}

export default CartMenu;