import { ReduceStore } from 'flux/utils';
import ActionTypes from '../action-types';
import IterationDispatcher from '../dispatcher';

class IterationStore extends ReduceStore {
    getInitialState() {
        return [];
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.ADD: {
                const { value } = payload;
                return state + value;
            }
            case ActionTypes.SET_ITERATIONS: {
                const { iterations } = payload;
                return iterations;
            }
            default:
                return state;
        }
    }
}

export default new IterationStore(IterationDispatcher);
