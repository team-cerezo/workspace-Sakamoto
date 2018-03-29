import React from 'react'
import { Link } from 'react-router-dom'
import { add } from '../actions'
import { Initializer } from '../Initializer'


export default ({ projects }) => {

    if (projects === '') {
        projects = [];
    }
    return(
    <div>
        <h1>Home</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>プロジェクト名</th>
                    <th>せつめい</th>
                </tr>
            </thead>
            <tbody>
            {projects.map(project => (
                <tr key={project.id}>
                    <td><p><Link to={"/projects/" + project.id}>{project.id}</Link></p></td>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                </tr>              
            ))}
            </tbody>
        </table>
        <div>
            <button onClick={add}>追加</button>
        </div>
        <Initializer />
    </div>)
};