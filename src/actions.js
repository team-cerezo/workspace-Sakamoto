import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';

export const add = event => {
    const value = 1;
    RascaloidDispatcher.dispatch({
        type: ActionTypes.ADD,
        payload: { value }
    });
};