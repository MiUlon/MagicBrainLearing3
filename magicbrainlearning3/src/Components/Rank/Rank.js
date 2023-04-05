import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='f3 white rankStyle'>
                {`${name}, your current entries count:`}
            </div>
            <div className='f1 white center rankStyle rankRemoveSpaceAbove'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;