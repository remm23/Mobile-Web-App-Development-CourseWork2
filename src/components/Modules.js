import React from 'react';

const Modules = (props) => {

    // Modules component is displaying the data from the array App.js
    return (
        <div className='component'>    
            <ul>
                <li>{props.code}</li>
                <li>{props.name}</li>
                <li>{props.startDate}</li>
                <li>{props.endDate}</li>
                <li>{props.courseName}</li>
            </ul>
        </div>
    );
}

export default Modules;