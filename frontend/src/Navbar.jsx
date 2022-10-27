import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="nav-title">ProjectHub</h1>
            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Project</Link>
                <Link to="/create">Create</Link>
            </ul>
        </div>

    )
}

export default Navbar