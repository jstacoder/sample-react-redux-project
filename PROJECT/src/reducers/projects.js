import { ADD_PROJECT, SET_PROJECT, RESET_PROJECT, REMOVE_PROJECT } from '../actions';

const initialState = {
    projects: [],
    project:"",
};

const projects = (state = initialState, action) =>{
    let newState = {...state};
    switch(action.type){
        case REMOVE_PROJECT:
            let projects = [...newState.projects];
            const project = action.payload.project;
            const projectIndex = projects.indexOf(project);
            if(projectIndex > -1){
                projects.splice(projectIndex, 1);
                newState.projects = projects;
            }            
            return newState;
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
