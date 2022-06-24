import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux"

const ItemsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`

const StyledItem = styled.div`
  display: flex;
  min-height: 200px;
  border: solid 1px gray;
  border-radius: 6px;
  margin: 0 10px 20px;
  padding: 25px;
`

const StyledImage = styled.img`
  height: 120px;
  border-radius: 6px;
  margin: auto 25px auto 0;
`

const Flex = styled.div`
  display: flex;
  height: ${props => props.height};
  margin: ${props => props.margin};
  flex-grow: ${props => props.flex_grow};
  margin: ${props => props.margin};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

const Block = styled.div`
  display: block;
  flex: 1;
  position: relative;
`

const ItemHeader = styled.h6`
  color: 08090a;
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.03em;
`

const CartDiv = styled.div`
  position: absolute;
  bottom: 0;
`

export const CartButton = styled.button`
  min-height: 45px;
  justify-content: center;
  border-radius: 6px;
  background: #35b8bc;
  padding: 9px 15px;
  border: 0;
  color: white;
`

const StyledInput = styled.input`
  type: number;
  defaultValue: 1;
  min: 1;
  max: 10;
  padding: 8px 6px 8px 12px;
  margin-right: 8px;
  line-height: 20px;
  border-radius: 6px;
  background-color: #fafafa;
  border: 1px solid #ddd;
  min-height: 45px;
`

function MenuItems( {items} ) {
    const itemsRef = useRef([]);
    const dispatch = useDispatch();
    const addToCart = (id) => {
        dispatch({type:"INCREMENT", payload: +itemsRef.current[id].value});
        dispatch({type:"ADD_PRODUCT", payload: {id: id, value: itemsRef.current[id].value}})
        //TODO add product (if product already exist change only value)
    }

    return (
        <>
            <ItemsArea>
                {
                    items.map((items, i) => {
                        const {id, title, category, price, image, description} = items;
                        return (
                            <StyledItem key={id}>
                                <StyledImage src={image}/>
                                <Block>
                                    <Flex justifyContent={'space-between'} margin={'10px 0'} >
                                        <ItemHeader>{title}</ItemHeader>
                                        <p color={'#35b8be'}>$ {price} USD</p>
                                    </Flex>
                                    <p>{description}</p>
                                    <CartDiv>
                                        <StyledInput
                                            ref={el => itemsRef.current[id] = el}
                                            type={'number'}
                                            defaultValue={1}
                                            min={1} max={10}/>
                                        <CartButton onClick={() => addToCart(id)}>Add To Cart</CartButton>
                                    </CartDiv>
                                </Block>
                            </StyledItem>
                        );
                    })
                }
            </ItemsArea>
        </>
    );
}

export default MenuItems;