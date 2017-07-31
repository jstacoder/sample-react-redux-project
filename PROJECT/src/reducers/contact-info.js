import { RESET_CONTACT_INFO, SET_CONTACT_INFO_AGE, SET_CONTACT_INFO_COMMENT, SET_CONTACT_INFO_EMAIL, SET_CONTACT_INFO_NAME } from '../actions';

const initialState = {
    age:'',
    comment:'',
    name:'',
    email:'',
};

const contactInfo = (state = initialState, action) =>{    
    switch(action.type){
        case SET_CONTACT_INFO_AGE:
            return {
                ...state, 
                age: action.payload.age
            };                   
        case SET_CONTACT_INFO_COMMENT:
            return {
                ...state,
                comment: action.payload.comment,
            };        
        case SET_CONTACT_INFO_EMAIL:
            return {
                ...state, 
                email: action.payload.email
            };
        case SET_CONTACT_INFO_NAME:
            return {
                ...state,
                name: action.payload.name
            };            
        case RESET_CONTACT_INFO:
            return initialState;                        
        default:
            return state;
    }    
};

export default contactInfo