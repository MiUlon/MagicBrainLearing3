import React from 'react';
import './ImageFormLink.css';

const ImageFormLink = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='center f3 pStyle'>This Magic Brain app will detect faces in your pictures. Give it a try!</p>
            <div className='center pa4 br3 shadow-5 imageFormLinkMaxWidth imageFormLinkBorder imageFormLinkBackground'>
                <input className='f4 pa2 center w-70 imageFormLinkBorder' type='text' onChange={onInputChange}></input>
                <button className='f4 center w-30 white grow link ph3 pv2 dib bg-light-purple imageFormLinkBorder' onClick={onButtonSubmit}>Detect!</button>
            </div>
        </div>
    )
}

export default ImageFormLink;