import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import { CartButton } from './MenuItems';
import CartItems from './CartItems';
import items from './MenuData';

const BackgroundShadow = styled.div`
  transition: opacity 300ms ease 0s;
  ${props => !props.click && `opacity: 0; display: none;`}
  
  
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 2;
  top: 0;
`

const MenuContainer = styled.div`
  transition: opacity 300ms ease 0s;
  ${props => !props.click && `opacity: 0; display: none;`}
  
  
  width: 480px;
  height: 100vh;
  background: white;
  position: fixed;
  z-index: 3;
  right: 0;
  top: 0;
`

const MenuTitle = styled.div`
  display: flex;
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
  
  border-bottom: 1px solid #e6e6e6;
  h4 {
    font: 28px Inter, sans-serif;
    line-height: 1.1;
    font-weight: 700;
  }
`

const CheckoutContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 480px;
  border-top: 1px solid #e6e6e6;
  
  justify-content: space-between;
 
  padding: 16px 24px;
  
  
  .subtotal {
    color: #7e828f;
    font-size: 18px;
  }
  .total {
    font-weight: 700;
  }
`

const CheckoutButton = styled(CartButton)`
  display: block;
  width: 100%;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`

const ProductsContainer = styled.div`
  height: 100%;
  position: relative;
  padding: 12px 24px 192px 24px;
  overflow: auto;
`

const CloseIcon = styled(FaTimes)`
  cursor: pointer;
  height: 25px;
`

function CartMenu() {
    const dispatch = useDispatch();
    const selectedProducts = useSelector(state => state.products.products);
    const cartStatus = useSelector(state => state.cart.value);

    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += +items[i].price * selectedProducts[i];
    }

    return (
        <>
            <BackgroundShadow click={cartStatus} onClick={() => dispatch({type:"CLOSE"})}>
            </BackgroundShadow>
            <MenuContainer click={cartStatus}>
                <MenuTitle>
                    <h4>Your Order</h4>
                    <CloseIcon onClick={() => dispatch({type:"CLOSE"})}/>
                </MenuTitle>
                <ProductsContainer>
                    <CartItems />
                </ProductsContainer>
                <CheckoutContainer>
                    <Flex>
                        <span className={'subtotal'}>Subtotal</span>
                        <span className={'total'}>$ {total.toFixed(2)} USD</span>
                    </Flex>
                    <CheckoutButton onClick={() => alert('This function currenty unavailable')}>Continue to
                        Checkout</CheckoutButton>
                </CheckoutContainer>
            </MenuContainer>
        </>
    );
}

export default CartMenu;