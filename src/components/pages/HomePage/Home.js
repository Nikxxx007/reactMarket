import React from 'react';
import ContentSection from '../ContentSection';
import { sectionOne, sectionTwo } from './Data';

function Home(props) {
    return (
        <>
            <ContentSection {...sectionOne}/>
            <ContentSection {...sectionTwo}/>
        </>
    );
}

export default Home;