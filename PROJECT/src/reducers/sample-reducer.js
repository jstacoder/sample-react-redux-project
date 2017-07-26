import { SAMPLE_ACTION_TYPE, NOT_LOADING } from '../actions';

const initialState = {
    loading: false,
    games: [],
    currentGame:{
        id:''        
    }
};

const sample = (state = initialState, action = {}) =>{
    switch(action.type){
        case SAMPLE_ACTION_TYPE:
            return { 
                loading: true, 
                games: state.games, 
                currentGame: state.currentGame
            };
        case NOT_LOADING:
            return { 
                loading: false, 
                games: action.payload.data, 
                currentGame: state.currentGame
            };        
        default:
            return state;
    }    
}

export default sample