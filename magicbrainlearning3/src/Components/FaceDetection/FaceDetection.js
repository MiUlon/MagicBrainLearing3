import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({ imageUrl, putBoxOnFace }) => {
    return (
        <div className=' mt center'>
            <div className='pa4 absolute'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'></img>
                <div className='bounding-box' style={{top: putBoxOnFace.topRow, right: putBoxOnFace.rightCol, bottom: putBoxOnFace.bottomRow, left: putBoxOnFace.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceDetection;