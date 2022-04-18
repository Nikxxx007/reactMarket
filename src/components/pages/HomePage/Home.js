import React from 'react';
import ContentSection from '../ContentSection';
import { sectionOne, sectionTwo } from './Data';
import ShoppingMenu from '../ShoppingMenu'

function Home(props) {
    return (
        <>
            <ContentSection {...sectionOne}/>
            <ContentSection {...sectionTwo}/>
            <ShoppingMenu />
        </>
    );
}

export default Home;