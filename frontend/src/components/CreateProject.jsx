import { React, useState } from 'react'
import axios from "axios"
const CreateProject = () => {
    const [project, setProject] = useState({
        title: "",
        description: "",
        image: "",
        github: "",
    })




    const handleChange = (event) => {
        const { name, value } = event.target
        setProject(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleClick = (event) => {
        event.preventDefault()

        axios.post("/projects", project)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="create-title">
                <h2>Share Projects</h2>
            </div>
            <div className="create">
                <form>
                    <label> Title:</label>
                    <input type="text" name="title" value={project.title} placeholder="Title of project" onChange={handleChange} />
                    <label> Description:</label>
                    <textarea type="text" name="description" value={project.description} placeholder="Details about your project" onChange={handleChange} />
                    <label>Image: </label>
                    <input type="text" name="image" value={project.image} placeholder="Image URL" onChange={handleChange} />
                    <label> gitHub:</label>
                    <input type="text" name="github" value={project.github} placeholder="Source Code URL" onChange={handleChange} />
                    <button onClick={handleClick}>Add Project</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProject