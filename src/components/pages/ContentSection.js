import React from 'react';
import './ContentSection.css'
import ReviewSection from '../ReviewSection'

function ContentSection({ headerText,
                        sectionText,
                        buttonText, reviewSection, imageSrc, alt, imageIsLeft}) {

    return (
        <>
            <div className="content-section">
                <div className="container">
                    <div className="half-section">
                       <div className="img-section">
                           <img src={imageSrc} alt={alt}/>
                       </div>
                    </div>
                    <div className="half-section">
                        <div className="text-section">
                            <h1>{headerText}</h1>
                            <p>{sectionText}</p>
                            <button>{buttonText}</button>
                            <ReviewSection show={reviewSection}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

//TODO add button component
export default ContentSection;