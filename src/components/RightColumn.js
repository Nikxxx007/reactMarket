import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  
  &div:nth-child(1) {
    margin-right: 10px;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  & {
    margin-bottom: 15px;
    text-decoration: none;
    color: #546285;
  }
`

const ColumnHeader = styled.div`
  color: #08090a;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`

function RightColumn(props) {
    return (
        <>
           <Flex>
               <Column>
                   <ColumnHeader>Links</ColumnHeader>
                   <Link to={'/Order'}>Order</Link>
                   <Link to={'./Company'}>Company</Link>
                   <Link to={'./FAQ'}>FAQ</Link>
                   <a href="mailto:info@website.com?subject=Hi">Contact</a>
               </Column>
               <Column>
                   <ColumnHeader>+7 (999) 999-99-99</ColumnHeader>
                   <div className="column-item">4040 Maple Lane</div>
                   <div className="column-item">from 10.00 a.m. till 12.30 p.m.</div>
               </Column>
           </Flex>
        </>
    );
}

export default RightColumn;