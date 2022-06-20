import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
`

function RightColumn(props) {
    return (
        <>
           <Flex>

           </Flex>
        </>
    );
}

export default RightColumn;