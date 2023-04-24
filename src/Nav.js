import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Navpill(){
    return (
        <Nav className="pill">
        <ul className="nav nav-pills">
        <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
            <a className="nav-link" href="./Community">Community</a>
=======
            <a className="nav-link" href="/Races">Race List</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/Community">Community</a>
>>>>>>> 07ea7060f1a68bb4566b347bff6520931afaeda6
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/Contact">Contact</a>
        </li>
        </ul>
        </Nav>
    )
}
