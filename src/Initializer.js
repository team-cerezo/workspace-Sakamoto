import React from 'react';
import {getProjects} from './fetch'

class Initializer extends React.Component {
    componentDidMount() {
        getProjects();
    }
    render() {
        return <span />;
    }
}

export { Initializer };