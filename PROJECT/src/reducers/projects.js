import { ADD_PROJECT, SET_PROJECT, RESET_PROJECT } from '../actions';

const initialState = {
    projects: [],
    project:"",
};

const projects = (state = initialState, action) =>{
    let newState = {...state};
    switch(action.type){
        case ADD_PROJECT:
            newState.projects.push(action.payload.project);
            return newState;
        case SET_PROJECT:
            newState.project = action.payload.project;
            return newState;
        case RESET_PROJECT:
            newState.project = initialState.project;
            return newState;
        default:
            return state;
    }
}
 export default projects
