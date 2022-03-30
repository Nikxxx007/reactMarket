import React from 'react';
import './ContentSection.css'

function ContentSection(props) {
    return (
        <>
            <div className="content-section">
                <div className="container">
                    <div className="half-section">
                       <div className="img-section">
                           <h1>img-section</h1>
                       </div>
                    </div>
                    <div className="half-section">
                        <div className="text-section">
                            <h1>text-section</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

//TODO add button component
export default ContentSection;