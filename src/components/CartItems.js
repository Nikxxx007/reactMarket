import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Menu from './MenuData';
import items from './MenuData';

import styled from 'styled-components';

import {ItemHeader, StyledInput} from './MenuItems';

const ItemTitle = styled(ItemHeader)`
    font-size: 16px;
`

const ItemInput = styled(StyledInput)`
    width: 60px;
`

const CartItem = styled.div`
  padding: 15px 0;
  display: flex;
`

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 15px;
  align-items: center;
  justify-content: space-between;
`

function CartItems(props) {
    const dispatch = useDispatch();

    const selectedProducts = useSelector(state => state.products.products);
    console.log(items);

    return (
        <>
            {
                items.map((items, i) => {
                    const {id, title, category, price, image, description} = items;
                    if (!selectedProducts[id - 1])
                        return;
                    return (
                        <CartItem key={i}>
                            <img height={'60px'} src={image}/>
                            <InfoContainer>
                                <div>
                                    <ItemTitle>{title}</ItemTitle>
                                    <p>$ {price} USD</p>
                                    remove
                                </div>
                                <ItemInput value={selectedProducts[id - 1]} onBlur={(e) => console.log('k3k')}/>
                            {/*    TODO onBlur finish*/}
                            </InfoContainer>
                        </CartItem>
                    );
                })
            }
        </>
    );
}

export default CartItems;