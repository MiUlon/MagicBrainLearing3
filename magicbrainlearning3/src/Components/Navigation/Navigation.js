import React from 'react';
import './Navigation.css';

const Navigation = ({ isSignedIn, onRouteChange }) => {
    if (isSignedIn) {
        return (
            <div className='navigationFlexEnd'>
                <p onClick={() => onRouteChange('signout')} className='f3 pa3 dim shadow-5 link black pointer navigationStyle grow'>Sign Out!</p>
            </div>
        )
    } else {
        return (
            <div className='navigationFlexEnd'>
                <p onClick={() => onRouteChange('signin')} className='f3 pa3 dim shadow-5 link black pointer navigationStyle grow'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 pa3 dim shadow-5 link black pointer navigationStyle grow'>Register</p>
            </div>
        )
    }
}

export default Navigation;