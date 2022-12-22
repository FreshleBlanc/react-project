import { useState } from 'react'

export default function Students() {
    const [students, setStudents] = useState([
        {
            "name": "Lucas Lang",
            "jobTitle": "Software Developer 👩‍💻",
            "skills": {
                "JavaScript": 9,
                "Python": 8,
                "Java": 6,
                "CSS": 9
            }
        },
        {
            "name": "Charles McCall",
            "jobTitle": "Programmer, Performer",
            "skills": {
                "JavaScript": 3,
                "Python": 6,
                "Java": null,
                "CSS": 4,
                "Singing": 9,
                "Dance": 7,
                "Gaming": 8,
                "Menace": 100,
                "Writing": 7
            }
        },
        {
            "name": "Brendan Carlson",
            "jobTitle": "Student",
            "skills": {
                "JavaScript": 6,
                "Python": 5,
                "Assembly": -1,
                "CSS": 7,
                "Sleepiness": 11,
                "Hunger": 8,
                "Caffeination": 9
            }
        },
        {
            "name": "Lucas Leung",
            "jobTitle": "Dude",
            "skills": {
                "JavaScript": 4,
                "Python": 6,
                "Java": 4,
                "CSS": 8,
                "Eating":5,
                "Sleeping":2,
                "Talking":1,
                "Listening":6,
                "Eye Contact":0
            }
        },
        {
            "name": "John Han",
            "jobTitle": "Professional Potato 🥔",
            "skills": {
                "Python": 8,
                "JavaScript": 7,
                "HTML": 6,
                "CSS": 6,
                "Potato Rating": 88,
                "Power Level": 9999,
                "Lucky Number": 13
            }
        },
        {
            "name": "Devon 'Fresh' Chang",
            "jobTitle": "Maverick",
            "skills": {
                "JavaScript": 3,
                "Python": 3,
                "Java": 3,
                "CSS": 8,
                "Brewing": 9,
                "Electrical": 10,
                "Martial Arts": 9001
            }
        },
        {
            "name": "Hayden Lynch",
            "jobTitle": "Data Analyst",
            "skills": {
                "SQL": 6,
                "Python": 6,
                "Excel": 9,
                "Math": 9,
                "Gaming": 6,
                "Grilling": 8,
                "Running": 10,
                "Brewing": 7,
                "Drowsiness": 11 
            }
        }
    ])

    const [featuredStudent, setFeaturedStudent] = useState(students[0])

    return (
        <div className="students">
            <h2>Featured Student</h2>
            {/* Featured Student Goes Here */}
            <div className="featured-student">
                <h3>{ featuredStudent.name }</h3>
                <p>{ featuredStudent.jobTitle }</p>
            </div>
            <hr />
            { students.map(student => {
                return (
                    <div className="student" onClick={ () => setFeaturedStudent(student) }>
                        <h3>{student.name}</h3>
                        <p>{student.jobTitle}</p>
                    </div>
                )
            }) }
        </div>
    )
}