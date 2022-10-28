import React, { useState, useEffect } from 'react'

const Projects = () => {
    const [recievedData, setRecievedData] = useState([])

    console.log(recievedData)
    useEffect(() => {
        fetch("/projects")
            .then(res => res.json())
            .then(data => setRecievedData(data))
            .catch((err) => console.log(err))

    }, [])
    return (
        <div className="project-container">
            <div className="project-header">
                <h2 className="project-title">
                    Projects
                </h2>
                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            {recievedData ? <div className="grid">{

                recievedData.map(project => {
                    return (<div key={project._id} className="grid-project">
                        <img src={project.image} alt="" />
                        <h3> {project.title}</h3>
                        <p> {project.description}</p>
                        <a className="button" href={project.github}>CODE</a>
                    </div>)
                })

            }</div> : null}
        </div>
    )
}

export default Projects