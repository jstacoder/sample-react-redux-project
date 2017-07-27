import { RESET_CONTACT_INFO, SET_CONTACT_INFO_AGE, SET_CONTACT_INFO_COMMENT, SET_CONTACT_INFO_EMAIL, SET_CONTACT_INFO_NAME } from '../actions';

const initialState = {
    age:'',
    comment:'',
    name:'',
    email:'',
};

const contactInfo = (state = initialState, action) =>{
    let newState = {...state};
    switch(action.type){
        case SET_CONTACT_INFO_AGE:
            newState.age = action.payload.age;
            break;
        case SET_CONTACT_INFO_COMMENT:
            newState.comment = action.payload.comment;
            break;
        case SET_CONTACT_INFO_EMAIL:
            newState.email = action.payload.email;
            break;
        case SET_CONTACT_INFO_NAME:
            newState.name = action.payload.name;
            break;
        case RESET_CONTACT_INFO:
            return initialState;                        
        default:
            break;
    }
    return newState;
};

export default contactInfo