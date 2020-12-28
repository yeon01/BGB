import React from 'react'
import "./Guide.css";

const Guide = () => {
    return(
        <div className="Guide">
            <div className="boxG">
            </div>
            <div className="boxG">
                <video controls src="/video/guide.mp4"></video>
            </div>
            <div className="boxG">
                <img src="./images/guide1.jpg" alt=""/>
            </div>
            <div className="boxG guideMain">
                <img src="./images/guide2.jpg" alt=""/>
                {/* <img src="./images/guide3.jpg" alt=""/> */}
            </div>
            <div className="boxG">
                <img src="./images/guide4.jpg" alt=""/>
            </div>
        </div>
    );
};

export default Guide;