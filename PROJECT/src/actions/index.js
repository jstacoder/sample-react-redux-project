export const SAMPLE_ACTION_TYPE = 'SAMPLE_ACTION_TYPE';
export const NOT_LOADING = 'NOT_LOADING';
export const SET_CONTACT_INFO_NAME = 'SET_CONTACT_INFO_NAME';
export const SET_CONTACT_INFO_EMAIL = 'SET_CONTACT_INFO_EMAIL';
export const SET_CONTACT_INFO_AGE = 'SET_CONTACT_INFO_AGE';
export const SET_CONTACT_INFO_COMMENT = 'SET_CONTACT_INFO_COMMENT';
export const RESET_CONTACT_INFO = 'RESET_CONTACT_INFO';
export const ADD_PROJECT = 'ADD_PROJECT';
export const SET_PROJECT = 'SET_PROJECT';
export const RESET_PROJECT = 'RESET_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const ADD_TODO = 'ADD_TODO';
export const SET_CURRENT_TODO = 'SET_CURRENT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UNCOMPLETE_TODO = 'UNCOMPLETE_TODO';
export const UNDELETE_TODO = 'UNDELETE_TODO';


// todo related actions

export const uncompleteTodo = todo =>({
    type: UNCOMPLETE_TODO,
    payload:{
        todo,
    }
});

export const undeleteTodo = todo =>({
    type: UNDELETE_TODO,
    payload:{
        todo,
    }
});

export const addTodo = ({todo, index}) =>({
    type: ADD_TODO,
    payload:{
        todo,
        index,
    }
});
export const setCurrentTodo = todo =>({
    type: SET_CURRENT_TODO,
    payload:{
        todo
    }
});
export const completeTodo = todo =>({
    type: COMPLETE_TODO,
    payload: {
        todo
    }
});
export const deleteTodo = todo =>({
    type: DELETE_TODO,
    payload:{
        todo,
    }
});

// PROJECT RELATED ACTIONS 
export const removeProject = (project) =>({
    type: REMOVE_PROJECT,
    payload:{
        project,
    }
});
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
// CONTACT INFO RELATED ACTIONS
export const setContactInfoName = (name) =>({
    type: SET_CONTACT_INFO_NAME,
    payload:{
        name,
    }
});
export const setContactInfoEmail = (email) =>({
    type: SET_CONTACT_INFO_EMAIL,
    payload:{
        email,
    }
});
export const setContactInfoAge = (age) =>({
    type: SET_CONTACT_INFO_AGE,
    payload:{
        age,
    }
});
export const setContactInfoComment = (comment) =>({
    type: SET_CONTACT_INFO_COMMENT,
    payload:{
        comment,
    }
});
export const resetContactInfo = () =>({
    type:RESET_CONTACT_INFO,
});
// EXAMPLE ACTIONS
export const sampleAction = (arg) =>({
    type: SAMPLE_ACTION_TYPE,
    payload:{
        arg,
    }
});
export const notLoading = () =>({
    type: NOT_LOADING,
});
