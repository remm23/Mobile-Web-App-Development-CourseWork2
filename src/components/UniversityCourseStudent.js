import React from 'react';

const UniversityCourseStudent = (props) => {

    // UniversityCourseStudent component is displaying the data from the array App.js
    return(
        <div className='component'>
            <ul>
                <li>{props.name}</li>
                <li>{props.studentId}</li>
                <li>{props.courseName}</li>
                <li>{props.courseStartDate}</li>
            </ul>
        </div>
    )
}

export default UniversityCourseStudent;