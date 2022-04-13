import React from 'react';
import './ContentSection.css'
import ReviewSection from '../ReviewSection'
import Button from '../Button'

function ContentSection({ headerText,
                        sectionText,
                        buttonText, reviewSection, imageSrc, alt, imageIsLeft, backStyle}) {

    return (
        <>
            <div style={backStyle} className="content-section">
                <div className={imageIsLeft ? "container reverse" : "container"}>
                    <div className="half-section">
                       <div className="img-section">
                           <img src={imageSrc} alt={alt}/>
                       </div>
                    </div>
                    <div className="half-section">
                        <div className="text-section">
                            <h1>{headerText}</h1>
                            <p>{sectionText}</p>
                            <Button name={buttonText}/>
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