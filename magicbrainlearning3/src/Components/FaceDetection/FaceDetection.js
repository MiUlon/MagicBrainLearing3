import React from 'react';

const FaceDetection = ({ imageUrl }) => {
    return (
        <div className='pa4 center'>
            <img alt='' src={imageUrl} width='500px' height='auto'></img>
        </div>
    )
}

export default FaceDetection;