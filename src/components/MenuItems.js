import React from 'react';
import styled from 'styled-components';

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
  margin: ${props => props.margin};
  justify-content: ${props => props.justifyContent};
`

const Block = styled.div`
  display: block;
  flex: 1;
`

const ItemHeader = styled.h6`
  color: 08090a;
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.03em;
`

function MenuItems( {items} ) {
    return (
        <>
            <ItemsArea>
                {
                    items.map((items) => {
                        const {id, title, category, price, image, description} = items;
                        return (
                            <StyledItem>
                                <StyledImage src={image}/>
                                <Block>
                                    <Flex justifyContent={'space-between'} margin={'10px 0'} >
                                        <ItemHeader>{title}</ItemHeader>
                                        <p color={'#35b8be'}>$ {price} USD</p>
                                    </Flex>
                                    <p>{description}</p>
                                    <Flex>
                                        <input type={'number'} min={1} max={10}/>
                                        <button>Add To Cart</button>
                                    </Flex>
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