import React, { useState } from 'react';
import UniversityCourseModulePanel from './components/UniversityCourseModulePanel';
import UniversityCourseStudent from './components/UniversityCourseStudent';
import Modules from './components/Modules';
import './App.css';

function App() {

    let modulesArray = [
        {
            'code' : 'CP213432',
            'name': 'Mobile App Development',
            'startDate': '5/10/20',
            'endDate' : '22/1/2021',
            'courseName': 'Computer Science'
        },
        {
            'code' : 'CP213432',
            'name': 'Programming',
            'startDate': '5/10/20',
            'endDate' : '22/1/2021',
            'courseName': 'Computer Science'
        }
    ]

    // Hook for changing the state of the modules array
    const [modules, setModules] = useState(modulesArray);

    const students = [
        {
            name: "Remi",
            studentId: "21352892",
            courseName: "Computer Science",
            courseStartDate: "5/10/2020"
        },
        {
            name: "Adam",
            studentId: "21347829",
            courseName: "Computer Science",
            courseStartDate: "5/10/2020"
        },
        {
            name: "Bob",
            studentId: "21897642",
            courseName: "Cyber Security",
            courseStartDate: "8/10/2020"
        },
    ]

    const handleAddModule = (code, name, startDate, endDate, courseName ) => {
        // add details entered from form into the modules array
        setModules(modules.concat([{
            'code' : code,
            'name': name,
            'startDate': startDate,
            'endDate' : endDate,
            'courseName': courseName
        }]))
        
    }

	return(
    <div>
        <h1>Assignment 1 - Coursework 2</h1>
        <h1>Remi Tobias: 21352892</h1>
        <h2>Universe Course Students</h2>
        {/* map throuh students array and pass values as props */}
        {students.map( (student, index) => 
        <UniversityCourseStudent
            key={index}
            name={student.name}
            studentId={student.studentId}
            courseName={student.courseName}
            courseStartDate={student.courseStartDate}
        />
        )}
        <h2>Modules</h2>
        {/* map through modules array and pass properties to Modules component */}
        {modules.map( (mod, index) => 
            <Modules 
            key={index}
            code={mod.code}
            name={mod.name}
            startDate={mod.startDate}
            endDate={mod.endDate}
            courseName={mod.courseName}
            />
        )}
        <h2>Universe Course Module Panels</h2>
        <UniversityCourseModulePanel
            handleAddModule={handleAddModule}
         />
        
    </div>
  )
}

export default App;
