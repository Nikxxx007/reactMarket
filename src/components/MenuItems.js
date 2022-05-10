import React from 'react';
import styled from 'styled-components';

const ItemsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledItem = styled.div`
  max-height: 200px;
  border: solid 1px gray;
  border-radius: 6px;
  margin: 0 5px;
`

function MenuItems( {items} ) {
    return (
        <>
            <ItemsArea>
                {
                    items.map((items) => {
                        const { id, title, category, price, image, description } = items;
                        return (
                            <StyledItem>
                                <h2>{title}</h2>
                                <p>{description} {price}</p>
                            </StyledItem>
                        );
                    })
                }
            </ItemsArea>
        </>
    );
}

export default MenuItems;