import React from 'react';
import ReviewLogo from '../assets/5e865e09d8efa3a3f976b5c3_trustpilot-logo.svg'

function ReviewSection(props) {
    if (!props.show)
        return null;
    return (
        <>
            <div className="review-section">
                <img src={ReviewLogo} alt='reviewLogo'/>
                <p><span className="colored-text">4.8 out of 5</span> based on 2000+ reviews</p>
            </div>
        </>
    );
}

export default ReviewSection;