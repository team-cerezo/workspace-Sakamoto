import React from 'react'
import { add } from '../actions'
import { ProjectInitializer } from '../Initializer'


export default ({ projectId, iterations }) => {    
    
    if (iterations === '') {
        iterations = [];
    }
    return(
    <div>
        <h1>Project {projectId}</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>だいめい</th>
                    <th>期間</th>
                </tr>
            </thead>
            <tbody>
            {iterations.map(iteration => (
                <tr key={iteration.id}>
                    <td>{iteration.id}</td>
                    <td>{iteration.subject}</td>
                    <td>{iteration.startOn} ～ {iteration.endOn}</td>
                </tr>              
            ))}
            </tbody>
        </table>
        <div>
            <button onClick={add}>追加</button>
        </div>
        <ProjectInitializer projectId={projectId} />
    </div>)
};