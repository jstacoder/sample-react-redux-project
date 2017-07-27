export const SAMPLE_ACTION_TYPE = 'SAMPLE_ACTION_TYPE';
export const NOT_LOADING = 'NOT_LOADING';
export const ADD_PROJECT = 'ADD_PROJECT';
export const SET_PROJECT = 'SET_PROJECT';
export const RESET_PROJECT = 'RESET_PROJECT';

export const resetProject = () =>({
    type: RESET_PROJECT,
});

export const addProject = (project) =>({
    type: ADD_PROJECT,
    payload:{
        project,
    }
});

export const setProject = (project) =>({
    type: SET_PROJECT,
    payload:{
        project,
    }
});

export const sampleAction = (arg) =>({
    type: SAMPLE_ACTION_TYPE,
    payload:{
        arg,
    }
});

export const notLoading = () =>({
    type: NOT_LOADING,
});
