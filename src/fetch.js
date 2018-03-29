import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';


const getProjects = () => {
    fetch('/projects' , { method: 'GET', headers: new Headers({'X-Bouncr-Credential': 'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyMSIsIm5hbWUiOiJUZXN0IHVzZXIxIiwicGVybWlzc2lvbnMiOlsicHJvamVjdDpyZWFkIiwicHJvamVjdDpjcmVhdGUiLCJwcm9qZWN0OnVwZGF0ZSIsInByb2plY3Q6ZGVsZXRlIl19.lfegO1IXi1hlBETymqw8nqRaq7POrnriJU_5YK2R-PI','accept': 'application/json'})})
        .then(response => response.json())
        .then(projects => {
            RascaloidDispatcher.dispatch({
                type: ActionTypes.SET_PROJECTS,
                payload: { projects }
            });
        })
}

export {getProjects, RascaloidDispatcher};