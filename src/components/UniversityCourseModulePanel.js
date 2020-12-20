import React, { useState } from 'react'; // import React and useState

const UniversityCourseModulePanel = (props) => {

    // useState hooks for updating input state
    const [moduleName, setModuleName] = useState('');
    const [moduleCode, setModuleCode] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [courseName, setCourseName] = useState('');

    return(
        <div className='component'>
            <form>
                <label for="module name">Module Name</label>
                <input type="text" 
                    placeholder="Programming"
                    name="module name"
                    value={moduleName} 
                    onChange={event => setModuleName(event.target.value) }
                />
                <label for="module code">Module Code</label>
                <input type="text" 
                    placeholder="CP464223"
                    name="module code"
                    value={moduleCode} 
                    onChange={event => setModuleCode(event.target.value) }
                />
                <label for="start date">Start Date</label>
                <input type="text" 
                    placeholder="5/10/2020"
                    name="start date"
                    value={startDate} 
                    onChange={event => setStartDate(event.target.value) }
                />
                <label for="end date">End Date</label>
                <input type="text" 
                    placeholder="17/1/2021"
                    name="end date"
                    value={endDate} 
                    onChange={event => setEndDate(event.target.value) }
                />
                <label for="course name">Course Name</label>
                <input type="text" 
                    placeholder="Computer Science"
                    name="course name"
                    value={courseName} 
                    onChange={event => setCourseName(event.target.value) }
                />
                <input
                    type="submit" value="Submit"
                    onClick={(event) => {
                        let message;
                        // prevent the default behaviour of a form 
                        event.preventDefault();
                        // window only displays values when all input fields have a value
                        if (moduleName && moduleCode && startDate && endDate && courseName) {
                            message = `Added new module: ${moduleName}, ${moduleCode}, ${startDate}, ${endDate}, ${courseName}`; 
                            // callback function to add new module to the array and view on the page
                            props.handleAddModule(moduleCode,moduleName,startDate,endDate,courseName)
                        } else {
                            message = "Not all fields have been filled out";
                        }
                        // show message in alert window
                        window.alert(message);
                    }
                        }
                    />
            </form>
        </div>
    )
}

export default UniversityCourseModulePanel;