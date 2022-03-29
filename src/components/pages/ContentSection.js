import React from 'react';
import './ContentSection.css'


function ContentSection(props) {
    return (
        <>
            <div className="content-section">
                <div className="container">
                    <div className="text-section">
                        <h1>Left part</h1>
                    </div>
                    <div className="img-section">
                        <h1>Right part</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

//TODO add button component
export default ContentSection;