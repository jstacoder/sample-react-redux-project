import { ADD_PROJECT, SET_PROJECT, RESET_PROJECT, REMOVE_PROJECT } from '../actions';

const initialState = {
    projects: [],
    project:"",
};

const projects = (state = initialState, action) =>{    
    switch(action.type){
        case REMOVE_PROJECT:
            let projects = [...state.projects];
            const project = action.payload.project;
            const projectIndex = projects.indexOf(project);
            return {
                ...state,
                projects: projects.filter((project, index) =>(index != projectIndex))
            };
        case ADD_PROJECT:
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.payload.project
                ]
            };            
        case SET_PROJECT:
            return {
                ...state,
                project: action.payload.project
            };
        case RESET_PROJECT:
            return {
                ...state,
                project: initialState.project
            };            
        default:
            return state;
    }
};
export default projects
