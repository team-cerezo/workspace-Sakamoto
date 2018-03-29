import { ReduceStore } from 'flux/utils';
import ActionTypes from '../action-types';
import ProjectDispatcher from '../dispatcher';

class ProjectStore extends ReduceStore {
    getInitialState() {
        return '';
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.ADD: {
                const { value } = payload;
                return state + value;
            }
            case ActionTypes.SET_PROJECTS: {
                const { projects } = payload;
                return projects;
            }
            default:
                return state;
        }
    }
}

export default new ProjectStore(ProjectDispatcher);
