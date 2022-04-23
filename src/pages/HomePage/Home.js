import React from 'react';
import ContentSection from '../../components/ContentSection';
import { sectionOne, sectionTwo } from './Data';
import ShoppingMenu from '../../components/ShoppingMenu'

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