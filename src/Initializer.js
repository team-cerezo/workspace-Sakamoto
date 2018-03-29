import React from 'react';
import {getProjects, getIterations} from './fetch'

class Initializer extends React.Component {
    componentDidMount() {
        getProjects();
    }
    render() {
        return <span />;
    }
}

class ProjectInitializer extends React.Component {
    componentDidMount() {
        getIterations(this.props.projectId);
    }
    render() {
        return <span />;
    }
}

export { Initializer, ProjectInitializer };